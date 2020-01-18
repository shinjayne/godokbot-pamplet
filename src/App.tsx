import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {useEffect, useState} from 'react';
import './App.css';
import image3 from './ai.svg';
// import videoDemo from './videodemo.mp4';
import dongHangLogo from './dh.jpg';
import barChart from './bar-chart.svg';
import cookieImg from './fortune-cookie.svg';
import mlImg from './machine-learning.svg';
import bnfImg from './bnf.svg';
import colorGraphImg from './line-chart.svg';
import algoImg from './algorithm.svg';
import lottoGif from './gif-lotto.gif';
import phoneUseImg from './phone-use.jpg';
import logo from './logo-mytto.png';
import settingW from './setting-w.png';
import resultP from './result-w.png';

// @ts-ignore
import styled from 'styled-components';
import FixedHeader from "./FixedHeader";
import DisplayGroup from "./DisplayGroup";
import useScrollPosition from "./useScrollPosition";
import PhoneImage from "./PhoneImage";
import Counter from "./Counter";
import MyCard from "./MyCard";
import SlidePart from "./SlidePart";
import {buttonColor, textColor} from "./color";
import StrongCopy from "./StrongCopy";
import ZoomVideo from "./ZoomVideo";
import moment, {Moment, Duration} from "moment";


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
        <FixedHeader toggled={toggleButton} title={'deepTery'} subTitle={'당신의 행복을 함께 꿈꾸는 즐거운 로또.'}/>

        <div>
          <FirstArea style={{backgroundImage: `url(${phoneUseImg})`}}>
            <FirstCopySmall> 운명을 바꿀 수 있는</FirstCopySmall>
            <FirstCopySmall> 한 번의 선택 </FirstCopySmall>
            <FirstCopy>내 운명은 내가 결정한다</FirstCopy>
          </FirstArea>


          {/*<video className='videoTag' autoPlay loop muted>*/}
          {/*  <source src={`./videodemo.mp4`} type='video/mp4' />*/}
          {/*</video>*/}

          <DisplayGroup
            key={'hddcsfs'}
            strongCopy={<>여러분의 행운 가이드 <br/> deepTery는</>}
            imgContainerStyle={{margin: 0}}
            imgNode={<img src={lottoGif} style={{width: '100vw'}}/>}
            desc={<> 복권 번호를 고르는 과정에서 <br/> 최선의 선택을 할 수 있도록 돕습니다. </>}/>

          <DisplayGroup
            reversed={true}
            key={'hdsdsas'}
            strongCopy={<>로또는 어렵지만, <br/> deepTery 는 쉽습니다.</>}
            imgNode={<ZoomVideo videoSrc={'./videodemo.mp4'}/>}
            desc={'고정수, 제외수를 선택한 뒤, 엄선된 알고리즘과 기법들을 입맛에 맞게 고를 수 있습니다.'}
          />

          <DisplayGroup
            key={'hdadsagfs'}
            strongCopy={<>초당 <Counter inital={199500} max={200000}/> 번의 <br/> 연산을 통한 분석.</>}

            imgNode={<PhoneImage imgSrc={settingW} key={'e'}/>}
            desc={'알파고 인공지능 구현에 사용된 기술인 머신러닝, 선형회귀분석 등의 최신 알고리즘을 사용해 당첨 확률이 높은 번호들을 엄선합니다.'}
          />


          <SlidePart title={'deepTery가 드리는 추천'}
                     contents={[{
                       title: '회귀 분석',
                       imgSrc: barChart,
                       body: '끝수, 홀짝, 구간별 데이터 기반 통계분석',
                       key: '1',
                     },
                       {
                         title: '빈도수 분석',
                         imgSrc: bnfImg,
                         body: '빅데이터 기반으로 번호 빈도수 분석 ',
                         key: '2',
                       },
                       {
                         title: '색상 분석',
                         imgSrc: colorGraphImg,
                         body: '색상을 분산 패턴, 빈도수,구간별 분석',
                         key: '3',
                       },
                       {
                         title: 'AI 분석',
                         imgSrc: mlImg,
                         body: 'deepTery가 DB 기반의 시뮬레이션 결과 제공',
                         key: '4',
                       },
                       {
                         title: '패턴 분석',
                         imgSrc: algoImg,
                         body: '데이터를 도식화하여 패턴 기반 분석',
                         key: '5',
                       },
                       {
                         title: '사주 분석',
                         imgSrc: cookieImg,
                         body: '생년월일을 입력하여 나온 사주를 분석',
                         key: '16',
                       }


                     ]}
          />


          <DisplayGroup
            key={'hdsfsdfsdds'}
            strongCopy={<>알고리즘은 어렵지만, <br/> deepTery 는 쉽습니다. </>}
            imgNode={<PhoneImage imgSrc={resultP} key={'k'}/>}
            desc={'최적의 분석 결과와 종합적인 분석 근거를 제시합니다. 이 모든 계산이 deepTery 에서는 수초만에 이루어집니다.'}
          />

          <DisplayGroup
            key={'hdsdsds'}
            reversed
            strongCopy={<>운명을 바꿀 시간까지... <br/> 🎉 </>}
            desc={<>

              <div style={{marginTop: 30, marginBottom: 70}}>
                <StrongCopy power reversed text={<div style={{display: "flex", alignItems: 'center'}}>
                  <Counter delay={10} reversed inital={99} max={diff.months() * 30 + diff.days()}/> 일
                  <span style={{width: 10}}/>
                  <Counter delay={25} reversed inital={100} max={diff.hours()}/> 시간
                  <span style={{width: 10}}/>
                  <Counter delay={40} reversed inital={100} max={diff.minutes()}/> : <Counter delay={40} inital={100}
                                                                                              reversed
                                                                                              max={diff.seconds()}/>
                </div>}/>

              </div>


              <div>
                기다리면 복이 오나니...
                <br/>
                2020년 4월 1일에 출시 예정입니다. <br/>
                <span style={{fontSize: 12}}>(출시 알림 신청자가 일정 기준 넘을 시)</span>
              </div>
            </>}
          />


          <DisplayGroup
            key={'hfsdfvdssa'}
            strongCopy={<>
              <div>벌써 <Counter inital={500} max={893}/> 번의</div>
              운명이 바뀌었습니다.</>}
            imgSrc={dongHangLogo}
            desc={'지금 바로 "출시 알림" 을 신청해보세요.'}
          />


          <DisplayGroup
            key={'hdsds'}
            reversed
            desc={<>
              <div style={{}}>개인정보 보호 약관</div>
              <div style={{fontSize: 12, marginTop: 24, marginBottom: 36}}>서비스 출시 알림 목적 외에 고객님의 개인정보는 일체 이용되지 않습니다.
              </div>

              <div style={{}}>서비스 이용 고시</div>
              <div style={{fontSize: 12, marginTop: 24, marginBottom: 24}}>본 서비스는 이용자의 로또 번호 선택을 도울 뿐, 당첨을 보장하지 않습니다.
              </div>
            </>}
          />


        </div>
        <MainActionButton toggled={String(toggleButton)} href={'https://forms.gle/boeozudJpDbWpXNh9'}> 출시
          알림 </MainActionButton>
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
`;


export const Desc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
   text-align: center;
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
font-family:"Binggrae-Bold", Sans-serif;
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
text-size-adjust:100%;
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
