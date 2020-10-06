import React, {useEffect, useState} from 'react';
import {ContentBody} from "../Components/ContentBody";
import DisplayGroup from "../Components/DisplayGroup/DisplayGroup";
import LogoLink from "../LogoLink";

import book from './책.svg';
import thumbnail2 from  './thumbnail2.png';
import demo from '../HomePage/demo.png';
import allSet from './allset.svg';
import cjMoem from './cj-moem.svg';
import bookBg from './bg-book.svg';
import cjLogo from './cj-logo.svg';
import CustomImage from "../Components/CustomImage";
import styled from "styled-components";
import {primaryColor, secondaryColor} from "../color";
import MyCard from "../Components/MyCard";
import StrongCopy from "../Components/StrongCopy";
import {Desc} from '../HomePage/Home';
import ListDisplayGroup from "../Components/DisplayGroup/ListDisplayGroup";
import FixedHeader from "../Components/Header/FixedHeader";
import useScrollPosition from "../useScrollPosition";
import CustomButton from "../Components/Buttons/CustomButton";
import KakaoButton from "../Components/Buttons/KakaoButton";
import {Link} from "react-router-dom";
import DrawerImage from "../Components/DrawerImage";
import {Helmet} from "react-helmet";

interface IProps {
}


const MoemzipPage: React.FC<IProps> = () => {
  const [toggleButton, setToggleButton] = useState(false);

  let position = useScrollPosition();

  useEffect(() => {

    if (position < 500) {
      setToggleButton(false);
    } else {
      setToggleButton(true);
    }

  }, [position]);

  function sendKakao() {
    // @ts-ignore
    window.kakao.Link.sendCustom({
      templateId: 23918,
    });
  }

  return (
    <>
      <Helmet>
        <title>CJ제일제당 모음집 | 고독한 취준봇</title>
        <meta property="og:image" content={thumbnail2}/>
        <meta property="og:image:width" content="800"/>
        <meta property="og:image:height" content="400"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:title" content="CJ제일제당 모음집"/>
        <meta property="og:description" content="고독한 취준봇이 자신있게 선보이는 제일제당 취준 자료집"/>
      </Helmet>
      <FixedHeader
        toggled={toggleButton}
        title={<>
          <div style={{display: "flex", justifyContent: "space-between", width: '90vw', alignItems: "center"}}>
            <div style={{fontSize: 17}}>
              CJ 제일제당 <br/> 자료모음집
            </div>
            <CustomButton type={"primary"} style={{width: '100px', margin: 0}}> 구매하러 가기 </CustomButton>
          </div>
        </>}
        subTitle={<>

        </>}
        style={toggleButton ? {} : {display: "none"}}/>
      <ContentBody>

        <div>
          <DisplayGroup
            displaySectionStyle={{paddingTop: 15, marginBottom: 50}}

            desc={<>
              <LogoLink reversed={false}/>
              <div
                style={{
                  fontWeight: 1000,
                  fontSize: 30,
                  margin: "0 0 3px 0",


                  fontFamily: 'Jalnan',
                  boxSizing: "border-box",
                  width: "100%",
                  textAlign: "end",
                  lineHeight: 1.4,
                }}
              >
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                <CustomImage defaultHeight={45} style={{width: 200, marginRight: -43, marginBottom: 15}} imgSrc={cjLogo}/>
                </div>

                자소서, 면접 대비<br/>
                자료 모음집<br/>

              </div>

              <div>
              </div>

            </>}/>


          <ImageBackground>
            <MyCard style={{width: '100%'}}>

              <StrongCopy text={'자신있게 소개합니다'} style={{marginBottom: 48}}/>
              <CustomImage defaultHeight={260} useZoom={false} imgSrc={cjMoem} style={{marginBottom: 48}}/>
              <Desc>

                2020년 상반기, <br/> CJ 제일제당 취업을 준비하시는 모든 분들을 위하여 <br/>
                고독한 취준봇이 준비한 <br/> 알짜배기 모음집
                <KakaoButton onClick={sendKakao} content={'친구에게 공유하기'}/>
              </Desc>

            </MyCard>
          </ImageBackground>
          <DisplayGroup
            strongCopy={<>
              만족도 90% 이상의 취준봇 정보방의 컨텐츠를 정성스레 모았습니다.
            </>}
            imgNode={<DrawerImage imgSrc={demo} key={'e'}/>}
            displaySectionStyle={{marginTop: 0, backgroundColor: secondaryColor, paddingTop: 100}}
            desc={<>

              <Link to={'/'} style={{width: '100%'}}>
                <CustomButton>고독한 취준봇이 뭔가요?</CustomButton>
              </Link>
            </>}
          />
          <ListDisplayGroup

            title={'모음집은 다음과 같은 내용으로 구성되어 있습니다.'}
            contents={[
              {
                title: '1. 기업 정보 분석',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },
              {
                title: '2. 제일제당 자소서, 어떻게 쓰나요?',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },
              {
                title: '3. 꼭 알아야하는 트렌드 Top 10',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },
              {
                title: '4. 제일제당, 최신 뉴스 읽어드립니다',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },
              {
                title: '5.자소서 쓸 때 보고 또 볼 TIP',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },
              {
                title: '6. 알기 쉽게 떠먹여드립니다',
                body: <>
                  <CustomButton>미리보기</CustomButton>
                </>,
              },


            ]}
          />

          <DisplayGroup
            strongCopy={'☕️ 커피 한잔의 가격에, 취준봇의 모음집을 즐겨보세요.'}
            imgSrc={allSet}
            imgContainerStyle={{height: 200}}
            displaySectionStyle={{backgroundColor: secondaryColor}}
            desc={<>
              SK 하이닉스, 삼성전자 자료모음집을 만들던 노하우를 담아 만들었습니다. 4,100원에 제일제당 자소서와 면접에 필요한 자료모음집을 만나보세요.

              <CustomButton type={"primary"}>구매하러 가기</CustomButton>
              (카카오톡 채널을 통한 계좌 이체를 통해 구매가 가능합니다.)
            </>}
          />
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <LogoLink reversed={false}/>

          </div>
        </div>
      </ContentBody>

    </>
  );
};

const ImageBackground = styled.div`
display : flex;
flex-direction: column;
padding: 700px 15px 15px 15px;  
align-items: center;
  background-image: url("${bookBg}");
  background-size:   contain;
  width: 100%;
  min-height: 1300px;
`;

export default MoemzipPage;
