import React, {useEffect, useState} from 'react';
import CustomImage from "../Components/CustomImage";
import {Company, companyImageMap} from "./enum";
import styled from "styled-components";
import memberCard from "./membercard.jpg";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import CustomButton from "../Components/Buttons/CustomButton";
import {ContentBody} from "../Components/ContentBody";
import {UAParser} from "ua-parser-js";
import KakaoButton from "../Components/Buttons/KakaoButton";
import firebase from "firebase";
import LogoLink from "../LogoLink";
import logoText from './logotext.png';
import useGtag from "../useGtag";
import StrongCopy from "../Components/StrongCopy";

interface IProps {
  company: Company,
  name: string,
  engName: string,
  department: string,
  grade: string,
  userImageUrl: string,
  size: number,
  top: number,
  left: number,
}


const ResultPage: React.FC<IProps> = ({company, name, engName, department, grade, userImageUrl, size, top, left}) => {
  console.log(userImageUrl);
  const gtag = useGtag();

  async function downloadWithHtml2Canvas() {

    console.log('Safari or Iphone - Html2Canvas');
    const canvas = await html2canvas(document.getElementById('result')!, {imageTimeout: 600000});

    let link2 = document.createElement('a');
    link2.download = '사원증.jpeg';
    link2.href = canvas.toDataURL();
    link2.click();
  }

  function downloadWithDomToImage() {
    console.log('Others - DomToImage');
    domtoimage.toJpeg(document.getElementById('result') as Node, {
      quality: 1,
      height: 600,
      width: document.getElementById('result')!.clientWidth,
      bgcolor: 'white'
    }).then(
      function (dataUrl: string) {
        let link = document.createElement('a');
        link.download = '사원증.jpeg';
        link.href = dataUrl;
        link.click();
      }
    );
  }

  async function downloadImageOnDesktop() {

    gtag('event', 'purchase', {});


    const uaParser = new UAParser();
    const result = uaParser.getResult();
    console.log(result);

    if (result.browser.name && result.browser.name.indexOf('Safari') >= 0) {
      // every safari
      await downloadWithHtml2Canvas();
    } else if (result.device.type && ['mobile', 'tablet'].includes(result.device.type) && result.device.vendor && result.device.vendor === 'Apple') {
      // every ios mobile device
      await downloadWithHtml2Canvas();
    } else {
      downloadWithDomToImage();
    }
  }

  return (

    <>
      <ContentBody style={{paddingTop: 10}}>
        <StrongCopy text={'🎉 당신의 합격을 기원합니다!'}/>
        <DescClone>

          <CustomMemberCard id={'result'}>
            <CustomImage
              style={{
                marginTop: 130,
                minHeight: 120,
              }}
              useZoom={false} defaultHeight={120} imgSrc={companyImageMap[company]}/>
            <MemberName>
              {name}
            </MemberName>
            <MemberSubName>
              {engName}
            </MemberSubName>
            <MemberDirectory>
              {department} <br/>
              {grade}
            </MemberDirectory>

            {userImageUrl && (
              <MemberImageContainer>
                <MemberImage
                  imageUrl={userImageUrl}
                  width={String(size)}
                  style={{
                    backgroundPositionY: `${top}px`,
                    position: 'relative',
                    left: left,
                  }}
                />
              </MemberImageContainer>
            )}
            <div style={{width: '100%', display: "flex", justifyContent: "center", marginTop: 50}}>
              <CustomImage useZoom={false} defaultHeight={40} imgSrc={logoText}/>
            </div>
          </CustomMemberCard>

        </DescClone>


        <CustomButton onClick={downloadImg}> 내려받기 </CustomButton>
        <KakaoButton content={'친구에게 공유하기 '} onClick={onKakao}/>
        <span style={{fontSize: 11}}> (모바일에서는 인물 사진이 나오지 않을 수 있어, 캡쳐를 권장드립니다. PC Chrome 에서는 다운로드와 공유 모두 잘 동작합니다.)</span>
      </ContentBody>


    </>
  );

  function share(imageUrl: string) {


    // @ts-ignore
    const Kakao = window['kakao'];

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${name} ${grade}, 인사드립니다.`,
        description: `합격 기원 사원증, 너도 만들어봐!`,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: 'https://godokbot.web.app/#/share-congrats?from=share',
        },
      },

      buttons: [
        {
          title: '만들러 가기',
          link: {
            mobileWebUrl: 'https://godokbot.web.app/#/share-congrats?from=share',
          },
        },
        {
          title: '서비스 소개',
          link: {
            mobileWebUrl: 'https://godokbot.web.app/#/?from=congrats-share',
          },
        }
      ],
      success: function (response: any) {
        console.log('success');
        console.log(response);
      },
      fail: function (error: any) {
        console.log('error');
        console.log(error);
      }
    });


  }

  async function getBlob() {

    const uaParser = new UAParser();
    const result = uaParser.getResult();
    console.log(result);

    if (result.browser.name && result.browser.name.indexOf('Safari') >= 0) {
      // every safari
      return await getBlobApple();
    } else if (result.device.type && ['mobile', 'tablet'].includes(result.device.type) && result.device.vendor && result.device.vendor === 'Apple') {
      // every ios mobile device
      return await getBlobApple();
    } else {
      return getBlobOther();
    }
  }

  async function getBlobApple() {
    console.log('Safari or Iphone - Html2Canvas');
    const canvas = await html2canvas(document.getElementById('result')!, {imageTimeout: 600000});

    const blob = await new Promise<Blob | null>(resolve => canvas.toBlob((blob: Blob | null) => resolve(blob)));
    return blob;
  }

  async function getBlobOther() {
    const blob: Blob = await domtoimage.toBlob(document.getElementById('result') as Node, {
      height: 600,
      width: document.getElementById('result')!.clientWidth,
      bgcolor: 'white',
    });
    return blob;
  }

  async function downloadImg() {
    const uaParser = new UAParser();
    const result = uaParser.getResult();
    console.log(result);
    if (uaParser.getDevice().type !== 'mobile') {
      await downloadImageOnDesktop();
      return ;
    }

    const blob = await getBlob();
    const firebaseUrl = `images/${Number(new Date())}-.${Number(new Date().getMilliseconds())}jpeg`;

    const storageRef = firebase.storage().ref();
    const childRef = storageRef.child(firebaseUrl);

    if (blob === null) {
      return;
    }

    try {
      await childRef.put(blob);

      const downloadUrl = await childRef.getDownloadURL();

      window.open(downloadUrl);
    } catch (e) {
      console.log(e);
    }

  }

  async function onKakao() {

    gtag('event', 'share', {method: 'kakao'});


    const firebaseUrl = `images/${Number(new Date())}-.${Number(new Date().getMilliseconds())}jpeg`;
    const blob: Blob | null
      = await getBlob();

    if (blob === null) {
      share('');
      return;
    }


    const storageRef = firebase.storage().ref();
    const childRef = storageRef.child(firebaseUrl);

    try {
      await childRef.put(blob);

      const downloadUrl = await childRef.getDownloadURL();

      share(downloadUrl);
    } catch (e) {
      console.log(e);
    }


  }
};

const DescClone = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
   text-align: center;
   line-height: 1.9;
   font-size: 14px;
  width: 100%;
`;

const CustomMemberCard = styled.div`
  background-image: url(${memberCard});
  width: 100%;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  color: black;
 
 text-align: center;
  display: flex;
  flex-direction: column;
 
 
`;

const MemberName = styled.div`
  
  margin-top: 20px;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 10px;
  margin-right: -10px;
`;

const MemberSubName = styled.div`
 
  font-size: 15px;

`;

const MemberDirectory = styled.div`
margin-top: 5px;
line-height: 1.5;
font-size: 12px;

`;

const MemberImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberImage = styled.div<{ imageUrl: string, width: string }>`
  background-image: url(${(props) => props.imageUrl});
  height: 133.3px;
  width: ${(props) => props.width}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  
`;

export default ResultPage;
