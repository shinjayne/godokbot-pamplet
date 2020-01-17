import React, {useEffect, useState} from 'react';
import './App.css';
import Title from "antd/lib/typography/Title";
import image1 from './machine.png';
import dongHangLogo from './dh.jpg';
import winnerImg from './winner.jpg';
import phoneUseImg from './phone-use.jpg';
import iphoneBackImg from './iphone-back.png';
// @ts-ignore
import DisplaySection from "./DisplaySection";
import StrongCopy from "./StrongCopy";
import styled from 'styled-components';
import FixedHeader from "./FixedHeader";
import DisplayGroup from "./DisplayGroup";
import useScrollPosition from "./useScrollPosition";
import PhoneImage from "./PhoneImage";
import ZoomImage from "./ZoomImage";
import Counter from "./Counter";
import MyCard from "./MyCard";
import {Card} from "antd";

const App: React.FC = () => {

  const [count, setCount] = useState(892);
  const [toggleButton, setToggleButton] = useState(false);

  let position = useScrollPosition();

  useEffect(() => {
    if (820 < position && position < 870) {
      grainCountStart();
    }

    if (position < 500) {
      setToggleButton(false);
    } else {
      setToggleButton(true);
    }

  }, [position]);


  async function grainCountStart() {
    setCount(400);
    await wait(10);
    for (let i = 0; i <= 892; i++) {
      setCount(i);
      await wait(1);
    }
  }

  async function wait(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <>


      <Root>
        <FixedHeader toggled={toggleButton} title={'deepTery'} subTitle={'당신을 위한 똑똑한 인공지능 로또 생활.'}/>
        <div>
          <FirstArea style={{backgroundImage: `url(${phoneUseImg})`}}>
            <FirstCopy> 로또번호 선택,</FirstCopy>
            <FirstCopy> AI 비서로부터. </FirstCopy>
            <FirstCopySmall>고민은 줄이고, 확률은 높이고!</FirstCopySmall>
          </FirstArea>

          <DisplayGroup
            key={'hddsfs'}
            strongCopy={'AI 비서, 무엇을 도와주나요?'}
            imgSrc={image1}
            desc={'고정수 지정 기능과 제외수 지정 등 다양한 커스텀 방식을 제공합니다.'}/>
          <DisplayGroup
            reversed={true}
            key={'hdsds'}
            strongCopy={<>빈도분석부터, <br/> 제외수 고정수 선정도.</>}
            imgNode={<PhoneImage key={'k'} />}
            desc={'알파고 인공지능 구현에 사용된 기술인 머신러닝, 선형회귀분석 등의 최신 알고리즘을 사용해 당첨 확률이 높은 번호들을 엄선합니다.'}
          />
          <DisplayGroup
            key={'hdssa'}
            strongCopy={<><div><Counter inital={500} max={893}/> 회의</div> 동행복권 이력을 분석합니다.</>}
            imgSrc={dongHangLogo}
            desc={'로또번호 선택, AI 비서의 도움을 받아보세요'}
          />
          <DisplayGroup
            reversed
            key={'hds'}
            strongCopy={'Torch Algorithm 과 함께합니다.'}
            imgNode={<PhoneImage key={'e'} />}
            desc={'알파고 인공지능 구현에 사용된 기술인 머신러닝, 선형회귀분석 등의 최신 알고리즘을 사용해 당첨 확률이 높은 번호들을 엄선합니다.'}
          />
          <DisplayGroup
            key={'hdsds'}
            strongCopy={<>빈도분석부터, <br/> 제외수 고정수 선정도.</>}
            imgNode={<PhoneImage key={'k'} />}
            desc={'알파고 인공지능 구현에 사용된 기술인 머신러닝, 선형회귀분석 등의 최신 알고리즘을 사용해 당첨 확률이 높은 번호들을 엄선합니다.'}
          />
          <DisplayGroup
            key={'hdsds'}
            strongCopy={<>다양한 멤버쉽, <br/> deepTery의 무한한 가능성.</>}
            desc={<>
              <MyCard title={'Plan A'} />
              <MyCard title={'Plan B'}/>
              <MyCard title={'Plan C'}/>
            </>}
          />

        </div>
        <MainActionButton toggled={String(toggleButton)}> 사전 신청 </MainActionButton>
      </Root>
    </>
  );
};

const Root = styled.div`
  font-family: 'NanumSquare'; 
  color: rgb(69, 79, 93);
  overscroll-behavior-x: none;
`;


const FirstArea = styled.div`
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
`;

const FirstCopySmall = styled.div`
  margin-top: 32px;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-weight: 700;
`;


export const Desc = styled.div`
   text-align: center;
`;

export const MainActionButton = styled.a<{ toggled: string }>`
display: flex;
align-items: center;
justify-content: center;
text-align:center;

background-color:rgb(69, 79, 93);
border-radius: ${(props) => props.toggled === 'true' ? '0px' : '6px'};
bottom: ${(props) => props.toggled === 'true' ? '0px' : '54px'};
box-shadow:rgba(0, 0, 0, 0.2) 0px 0px 15px 0px;
box-sizing:border-box;
color:rgb(255, 255, 255);
cursor:pointer;
//font-family:"Spoqa Han Sans", Sans-serif;
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
