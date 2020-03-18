import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {useEffect, useState} from 'react';
import './App.css';
// import videoDemo from './videodemo.mp4';
import talkIllust from './draw1.svg';
import phoneUseImg from './phone-use2.jpg';
import talkImage from './phonetalk.png';
import roomList from './draw2.svg';
// @ts-ignore
import styled from 'styled-components';
import FixedHeader from "./FixedHeader";
import DisplayGroup from "./DisplayGroup";
import useScrollPosition from "./useScrollPosition";
import CustomImage from "./CustomImage";
import {buttonColor, textColor} from "./color";
import moment, {Duration} from "moment";
import ListPart from "./ListPart";
import KakaoButton from "./KakaoButton";
import CustomButton from "./CustomButton";
import ListDisplayGroup from "./ListDisplayGroup";
import logo from './logo.png';
import DrawerImage from "./DrawerImage";


const App: React.FC = () => {

  const targetOpen = moment('2020-04-01 00:00:00');

  const [toggleButton, setToggleButton] = useState(false);
  const [sec, setSec] = useState<number>(60);
  const [diff, setDiff] = useState<Duration>(moment.duration(targetOpen.diff(moment())));


  let position = useScrollPosition();

  useEffect(() => {

    if (position < 500) {
      setToggleButton(false);
    } else {
      setToggleButton(true);
    }

  }, [position]);

  useEffect(() => {
    decrease();

    async function decrease() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSec(sec - 1);

      setDiff(moment.duration(targetOpen.diff(moment())));
    }
  }, [diff]);


  return (
    <>


      <Root>
        <FixedHeader toggled={toggleButton} title={'고독한 취준봇'} subTitle={'내게 필요한 취준 정보만 쏙쏙'}/>

        <div>
          <FirstArea
            style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5) ), url(${phoneUseImg})`}}>
            <FirstCopySmall> 자소서 꿀팁, 기업 최신이슈 등 </FirstCopySmall>
            <FirstCopySmall> 고퀄리티 취준 컨텐츠가 매일 2개씩 쏙쏙. </FirstCopySmall>
            <FirstCopySmall>내게 딱 맞는 취준 도우미</FirstCopySmall>
            <FirstCopy style={{fontFamily: 'Jalnan'}}>고독한 취준봇 <img src={logo} style={{height: 30, marginTop: 3, marginLeft: 10}}/> </FirstCopy>

          </FirstArea>


          {/*<video className='videoTag' autoPlay loop muted>*/}
          {/*  <source src={`./videodemo.mp4`} type='video/mp4' />*/}
          {/*</video>*/}

          <DisplayGroup
            key={'hddcsfs'}
            strongCopy={<>기업 준비하는 분들의 마음을 잘 알기에, 항상 필요한 정보만 전해드리려고 합니다</>}
            imgContainerStyle={{padding: 14, display: 'flex', justifyContent: 'center'}}
            imgNode={<CustomImage imgSrc={talkIllust} defaultHeight={200} useZoom={false}  />}
            desc={<> 고독한 취준봇은 정보공유 오픈 채팅방입니다. 💬 참여자들의 잡담은 일절 금지되어있고, 오롯히 저희가 제공하는 취준 컨텐츠로만 찾아뵙겠습니다. 마음 편히 알림을 켜놓으셔도
              됩니다. </>}/>


          <ListDisplayGroup
            reverse={true}
            title={<>하루 두번, ✌️<br/> 고퀄리티 취준 컨텐츠로 찾아뵙겠습니다</>}
            imgNode={<DrawerImage imgSrc={talkImage} key={'e'}/>}
            desc={'매일 아침 저녁으로, 자소서부터 면접까지 필요한 정보를 골고루 보내드려요'}
            contents={[{
              title: '1️⃣ 꼭 알아야하는 시장 트렌드',
              body: <>
                Trend 2. 4차 산업혁명과 뉴메모리의 부상 <br/> <br/>

                인공지능(AI), 5G 등의 발달로 데이터 양이 급증하면서, 새로운 메모리 반도체의 등장을 재촉하고 있다. 기존 D램과 플래시 메모리의 한계를...  <br/><br/>

                함께 읽어보면 좋은 기사 : [3색 뉴메모리 - sk 뉴스룸]
              </>,
              key: '1',
            },
              {
                title: '2️⃣ 자소서 작성 팁',
                body: <>
                  작성 팁 하나: STAR 기법 & 두괄식 작성법<br/><br/>

                  1. STAR 기법<br/>

                  Situation (상황) : 활동의 계기, 배경, 목표<br/>
                  Task (목표) : 해결해야할 문제다<br/>
                  ...<br/><br/>

                  2. 왜 두괄식으로 써야할까? <br/>
                  ...
                </>,
                key: '2',
              },
              {
                title: '3️⃣ 합격자가 떠먹여주는 기업 분석',
                body: <>
                  ✔ SK하이닉스 한 줄 요약 ✔ <br/><br/>

                  💡 Brand Identity<br/>
                  - SK하이닉스는 "첨단기술의 중심, 더 나은 세상을 만드는 회사 (Technology Innovator for a better world)" 비전을 가지고 있습니다.<br/><br/>

                  💡 Global Network <br/>
                  - SK하이닉스는 이천, 청주의 국내 사업장을 포함하여 전세계에 [ 4개 생산법인 / 5개 연구개발법인 / 10개 판매법인 ] 운영하는 글로벌 기업입니다.<br/><br/>

                  💡 Business Area<br/>
                  - SK하이닉스의 주요 제품은 "메모리 반도체"와 "시스템 반도체" 입니다. [메모리 반도체]에는 DRAM, NAND Flash 제품이, [시스템 반도체]에는 CIS 제품이 있습니다.

                </>,
                key: '3',
              },

            ]}
          />

          {/*<DisplayGroup*/}
          {/*  reversed={true}*/}
          {/*  key={'hdsdsas'}*/}
          {/*  strongCopy={<>하루 두번,<br/> 고퀄리티 취준 컨텐츠로 찾아뵙겠습니다</>}*/}
          {/*  imgNode={<ZoomVideo videoSrc={'./videodemo.mp4'}/>}*/}
          {/*  desc={'매일 아침 저녁으로 ⚡꼭 알아야 하는 트렌드⚡,\n' +*/}
          {/*  '              📍자소서 TIP : 문항 지원자(합격자) 예시 + 꿀팁📍 등 꼭 필요한 기업 정보를 공유할 예정입니다.'}*/}
          {/*/>*/}


          <DisplayGroup
            key={'hdadsagfs'}
            // strongCopy={<>초당 <Counter inital={199500} max={200000}/> 번의 <br/> 연산을 통한 분석.</>}
            strongCopy={'고독한 취준봇에는 광고, 잡담이 없습니다'}
            imgContainerStyle={{padding: 14, display: 'flex', justifyContent: 'center'}}
            imgNode={<CustomImage imgSrc={roomList} useZoom={true} defaultHeight={260} zoomHeight={280}/>}
            desc={'더이상 정보를 얻기 위해 취준생 정보공유방의 잡담 알림을 참지 마세요. 🤯 고독한 취준방에서 원하는 기업의 취준 컨텐츠만 받아가세요.'}
          />



          <ListPart
            key={'hdsfsdfsdds'}
            title={'오, 그럼 어떻게 운영되나요? 👀'}
            contents={[
              {
                title: '👉 기업의 공개채용 공고가 올라오면, 취준봇 운영팀이 해당 기업의 정보공유방을 만들어요.',
                body: '정보공유방의 이름은 "고독한 00봇" 형식으로 만들어요. 운영하는 기업은 아래의 <어떤 기업들이 있나요?> 를 확인해주세요.',
                key: 'a',
              },
              {
                title: '👉 채널톡을 통해, 새로운 정보방 출시를 알려드려요.',
                body: <>
                  아래에 기업중에 취업을 준비하는 기업이 있다면, {`<`}고독한 취준봇{'>'} 카톡 채널을 친구추가 해주세요. <br/>
                  <KakaoButton
                    content={<>
                     고독한 취준봇 채널 추가하기
                    </>}/>
                </>,
                key: 'b',
              },
              {
                title: '👉 원하는 기업 정보방과 입장료 계좌이체가 확인되면, 정보방 참여코드를 드려요. ',
                body: '광고성 유저를 거르기위해 소정의 입장료를 받고있어요.💰 모든 과정은 채널톡을 통한 소통으로 이루어져요. 취준봇은 채널로 오는 메세지를 항상 확인중이에요! 🤖',
                key: 'c',
              },

            ]}
          />


          <ListPart
            reverse={true}
            title={'어떤 기업들이 있나요? '}
            contents={[
              {
                title: 'SK하이닉스',
                body: <>
                  공개채용기간 : 3월 후반 ~ 4월 초 예상
                  <CustomButton>
                    하이닉스방 참여하기
                  </CustomButton>
                </>,
                key:'k',
              },
              {
                title: '삼성전자 (예정)',
                body: <>
                  공개채용기간 : 3월 후반 ~ 4월 초 예상
                  <CustomButton type={'disabled'}>
                    삼성전자방 참여하기 (준비중)
                  </CustomButton>
                </>,
                key:'kb',
              },
              {
                title: '취준컨텐츠가 필요한 기업을 알려주세요!',
                body: <>
                  고독한 취준봇 팀은 많은 분들이 요청주신 기업을 추가로 제공할 예정이에요 😉
                  <CustomButton type={'primary'}>
                    필요한 기업 알려주기
                  </CustomButton>
                </>,
                key:'ka',
              },
            ]}/>

          <DisplayGroup
            key={'share'}
            strongCopy={'함께 취준하는 친구에게 알려주세요 👥 '}
            desc={<>
              <KakaoButton
                style={{width: 300}}
                content={<>
                  취준하는 친구에게 공유하기
                </>}/>

            </>}

          />


          <DisplayGroup
            key={'hdsds'}
            reversed
            desc={<>
              <div style={{}}>개인정보 보호 약관</div>
              <div style={{fontSize: 12, marginTop: 24, marginBottom: 36, textAlign: "start"}}>본 서비스는 이용자의 개인 정보를 수집하지 않습니다.
              </div>

              <div style={{}}>문의사항 및 피드백</div>
              <div style={{fontSize: 12, marginTop: 24, marginBottom: 24, textAlign: 'start'}}>자세한 문의는 카카오톡 채널 {'<'}고독한 취준봇{'>'} 을 통해 언제든지 자유롭게 문의 및 피드백 부탁드립니다.
              </div>
            </>}
          />


        </div>
        <MainActionButton toggled={String(toggleButton)} onClick={() => {
          window.open('https://forms.gle/boeozudJpDbWpXNh9')
        }} href='#'> 하이닉스방 참여하기 (진행중) </MainActionButton>
        <img style={{
          position: 'fixed', left: "calc(50% - 15px)",
          bottom: 13,
          width: 30,
          textShadow: "rgba(0, 0, 0, 0.2) 0px 0px 15px 0px",
        }} src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png" alt="내용 보기"/>

      </Root>
    </>
  );
};

const Root = styled.div`
  font-family:  'NanumSquare' , sans-serif; 
  color: ${textColor};
  overscroll-behavior-x: none;
  word-spacing: initial;
  line-height: 1.4;
  
  width: 100vw;
  @media screen and (min-width: 420px) {
  max-width: 420px;
  }
  
`;


const FirstArea = styled.div`
  font-family: 'NanumSquare' , sans-serif;
  box-sizing: border-box;
  display: flex; 
  flex-direction:column; 
  align-items: flex-end; 
  justify-content: flex-end ; 
  
  padding-right: 16px;
  padding-bottom: 200px;
  height: 650px; 
  background-size: cover;
  background-position: 60% 50%;
  
  margin-bottom: 50px;
  //background-color: lightgray;
`;

const FirstCopy = styled.div`
  text-align: right;
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-weight: 800;
  margin-top: 32px;
`;

const FirstCopySmall = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-weight: 700;
  margin-top: 8px;
`;


export const Desc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
   text-align: center;
   line-height: 1.9;
   font-size: 14px;
  width: 100%;
`;


export const MainActionButton = styled.a<{ toggled: string }>`
display: flex;
align-items: center;
justify-content: center;
text-align:center;

background-color: ${buttonColor};
border-radius: ${(props) => props.toggled === 'true' ? '0px' : '6px'};
bottom: ${(props) => props.toggled === 'true' ? '0px' : '54px'};
box-shadow:rgba(0, 0, 0, 0.2) 0px 0px 15px 0px;
box-sizing:border-box;
color: white;
cursor : pointer;
font-family:"Jalnan" , Sans-serif,sans-serif;
font-size:18px;
font-weight:700;
height: 58px;
left: ${(props) => props.toggled === 'true' ? '0px' : '10%'};
line-height:58px;
position:fixed;
right: ${(props) => props.toggled === 'true' ? '0px' : '10%'};

text-decoration-color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-style:solid;
-webkit-text-size-adjust:100%;
-ms-text-size-adjust:100%;
-moz-text-size-adjust:100%;
transition-delay:0s;
transition-duration:0.35s;
transition-property:all;
transition-timing-function:ease;
user-select:none;
width: ${(props) => props.toggled === 'true' ? '100%' : '80%'};
word-break:keep-all;
z-index:3;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;


export default App;
