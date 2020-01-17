import React from 'react';
import Slider from "react-slick";
import MyCard from "./MyCard";
import styled from "styled-components";
import StrongCopy from "./StrongCopy";

interface IProps {
  title?: string;
}


const SlidePart : React.FC<IProps> = ({title}) => {

  return (
    <>
      <SliderContainer>
        {title && <StrongCopy reversed={true} text={title}/>}
        <Slider arrows={false} autoplay={true} autoplaySpeed={1500} pauseOnHover={true} pauseOnDotsHover pauseOnFocus  infinite dots={true}  variableWidth>
          <SliderItem>
            <MyCard title={'Torch Algorithm'}/>
          </SliderItem>
          <SliderItem>
            <MyCard title={'패턴 분석'}/>
          </SliderItem>
          <SliderItem>
            <MyCard title={'Linear Regression 선형 회귀'}/>
          </SliderItem>
          <SliderItem>
            <MyCard title={'고정수 제외수'}/>
          </SliderItem>
        </Slider>
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled.div`
  padding: 60px 20px 40px 20px;
  background-color: rgb(52, 58, 66);
  margin-bottom: 70px;
`;

const SliderItem = styled.div`
 //display: flex;
 //align-items: center;
 //justify-content: center;
 padding-left: 10px;
 padding-right: 10px;

`;

export default SlidePart;
