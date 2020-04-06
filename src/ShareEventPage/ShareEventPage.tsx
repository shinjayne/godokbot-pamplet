import React, {useRef, useState} from 'react';
import {ContentBody} from "../Components/ContentBody";
import DisplayGroup from "../Components/DisplayGroup/DisplayGroup";
// images
import memberCard from './membercard.jpg';
import smallMemberCard from './membercard.png';
import godokProfile from './godokprof.svg';
import CustomImage from "../Components/CustomImage";
import {Input, Select, Slider, Upload} from 'antd';
import {RcFile, UploadChangeParam} from 'antd/lib/upload';
import CustomButton from "../Components/Buttons/CustomButton";
import styled from "styled-components";
import {SliderValue} from 'antd/lib/slider';


import {UploadOutlined} from '@ant-design/icons';
import {ListCard} from "../Components/DisplayGroup/ListPart";
import {Company, companyImageMap} from "./enum";

import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import KakaoButton from "../Components/Buttons/KakaoButton";
import {FirebaseContainer} from "../index";

import firebase from 'firebase';

interface IProps {
}


const ShareEventPage: React.FC<IProps> = () => {


  const [userImageUrl, setUserImageUrl] = useState<string | null>(godokProfile);

  const [name, setName] = useState("취준봇");
  const [engName, setEngName] = useState("Godok Bot");
  const [department, setDepartment] = useState("기획/전략 2팀");
  const [grade, setGrade] = useState("사원");

  const [company, setCompany] = useState<Company>(Company.samsung);


  const [size, setSize] = useState(200);
  const [top, setTop] = useState(-20);
  const [left, setLeft] = useState(0);


  function onImageChange(params: UploadChangeParam) {
    setUserImageUrl(URL.createObjectURL(params.file.originFileObj));
  }

  function validateImage(file: RcFile) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    return isJpgOrPng;
  }

  function onSizeChange(value: SliderValue) {
    setSize(value as number);
  }

  function onTopChange(value: SliderValue) {
    setTop(value as number);
  }

  function onLeftChange(value: SliderValue) {
    setLeft(value as number);
  }


  function handleCompanyChange(value: Company) {
    setCompany(value);
  }


  function downloadImage() {


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

  function share(imageUrl  : string) {


    // @ts-ignore
    const Kakao  = window['kakao'];

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '고독한 사원증',
        description: '합격 기원 사원증, 너도 만들어봐!',
        imageUrl:  imageUrl,
        link: {
          mobileWebUrl: 'https://godokbot.web.app/#/share-congrats',
        },
      },

      buttons: [
        {
          title: '만들러 가기',
          link: {
            mobileWebUrl: 'https://godokbot.web.app/#/share-congrats',
          },
        },
      ],
      success: function(response: any) {
        console.log('success');
        console.log(response);
      },
      fail: function(error: any) {
        console.log('error');
        console.log(error);
      }
    });


  }

  function onKakao(){
    const firebaseUrl =  `images/${Number(new Date())}-.${Number(new Date().getMilliseconds())}jpeg`;
    domtoimage.toBlob(document.getElementById('result') as Node)
      .then(async function (blob) {
        const storageRef = firebase.storage().ref();
        const childRef = storageRef.child(firebaseUrl);

        try {
          await childRef.put(blob);

          const downloadUrl = await childRef.getDownloadURL();


          share(downloadUrl);
        }catch(e) {
          console.log(e);
        }


      });

    // @ts-ignore
    // const Kakao  = window['kakao'];
    //
    // console.log(Kakao);
    // Kakao.API.request({
    //   url: '/v2/api/talk/memo/default/send',
    //   data: {
    //     template_object: {
    //       object_type: 'feed',
    //       content: {
    //         title: '카카오톡 링크 4.0',
    //         description: '디폴트 템플릿 FEED',
    //         image_url:
    //           'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    //         link: {
    //           web_url: 'http://dev.kakao.com',
    //           mobile_web_url: 'http://dev.kakao.com',
    //         },
    //       },
    //       social: {
    //         like_count: 100,
    //         comment_count: 200,
    //       },
    //       button_title: '바로 확인',
    //     },
    //   },
    //   success: function(response: any) {
    //     console.log(response);
    //   },
    //   fail: function(error: any) {
    //     console.log(error);
    //   },
    // });
  }


  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <ContentBody>

        <DisplayGroup
          reversed
          desc={<>
            <div
              style={{
                fontWeight: 1000,
                fontSize: 30,
                margin: "0 0 6px 0",

                fontFamily: 'Jalnan',
                boxSizing: "border-box",
                width: "fit-content",
                color: "white",
              }}
            >
              고독한 사원증
            </div>

            {/*<StrongCopy  reversed={true} text={'취준하는 친구에게 사원증을 선물해 보세요!'}/>*/}
            나만의 합격기원 사원증을 만들어보세요!

            <CustomImage imgSrc={smallMemberCard}/>

            <FormItem>
              이름
              <Input onChange={event => setName(event.target.value)} defaultValue={name}/>
            </FormItem>
            <FormItem>
              영문명
              <Input onChange={event => setEngName(event.target.value)} defaultValue={engName}/>
            </FormItem>
            <FormItem>
              희망 부서
              <Input onChange={event => setDepartment(event.target.value)} defaultValue={department}/>
            </FormItem>
            <FormItem>
              직급
              <Input onChange={event => setGrade(event.target.value)} defaultValue={grade}/>
            </FormItem>
            <FormItem>
              사원증 사진 등록
              <ListCard>
                1. 본인이 나온 사진의 배경을 제거합니다.
                <CustomButton style={{width: 280}} type={"primary"}
                              onClick={() => window.open("https://www.remove.bg/ko/upload")}>
                  이미지 배경
                  제거하고 오기
                </CustomButton>
              </ListCard>
              <ListCard>
                2. 사원증 사진을 업로드합니다.
                <div style={{width: '100%', textAlign: "center"}}>
                  <Upload
                    // listType="picture-card"
                    showUploadList={false}
                    beforeUpload={validateImage}
                    onChange={onImageChange}
                  >

                    <CustomButton style={{width: 280, height: 37}}><UploadOutlined style={{marginRight: 10}}/> 사원증 사진
                      업로드
                    </CustomButton>


                  </Upload>
                </div>
              </ListCard>

            </FormItem>

            <FormItem>
              기업 선택

              <div style={{width: '100%', display: 'block'}}>
                <Select defaultValue={company} onChange={handleCompanyChange} style={{width: '100%'}}>
                  <Select.Option value={Company.hynix}>
                    SK하이닉스
                  </Select.Option>
                  <Select.Option value={Company.samsung}>
                    삼성전자
                  </Select.Option>
                  <Select.Option value={Company.none}>
                    기업 로고 없음
                  </Select.Option>
                </Select>
              </div>
            </FormItem>

          </>}/>


        <div ref={ref}>
          <DisplayGroup
            // compact={true}
            displaySectionStyle={{marginBottom: 0}}
            strongCopy={'당신의 합격을 기원합니다!'}
            desc={<>
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

              </CustomMemberCard>
            </>}
          />
        </div>

        <DisplayGroup

          reversed={true}
          displaySectionStyle={{paddingTop: 5}}
          desc={<>

            <span style={{marginBottom: 15, fontWeight: 600}}>이미지 조절하기</span>


            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan >사이즈</SliderSpan>
              <SliderContainer>
                <Slider
                  min={0}
                  max={200}
                  defaultValue={size}
                  onChange={onSizeChange}
                />
              </SliderContainer>
            </div>


            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan>상하</SliderSpan>
            <SliderContainer>
              <Slider

                min={-120}
                max={120}
                defaultValue={top}
                onChange={onTopChange}
              />
            </SliderContainer>
              </div>

            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan>좌우</SliderSpan>
            <SliderContainer>
              <Slider

                min={-50}
                max={50}
                defaultValue={left}
                onChange={onLeftChange}
              />
            </SliderContainer>
            </div>

            <CustomButton onClick={downloadImage}> 내려받기 </CustomButton>
            <KakaoButton content={'친구에게 공유하기 '} onClick={onKakao}/>
          </>}
        />
      </ContentBody>
    </>
  );
};

const CustomMemberCard = styled.div`
  background-image: url(${memberCard});
  width: 100%;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 60%;
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

const FormItem = styled.div`
text-align: start;
width: 100%;
margin: 10px 0 10px 0;
`;

const SliderSpan = styled.span`
 width: 50px;
 padding-top: 5px;
 
 
`;
const SliderContainer = styled.div`
  display: block;
  width: 80%;
  height: 50px;
`;

export default ShareEventPage;

