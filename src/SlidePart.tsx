import React, {ReactNode} from 'react';
import Slider from "react-slick";
import MyCard from "./MyCard";
import styled from "styled-components";
import StrongCopy from "./StrongCopy";
import {primaryColor} from "./color";


interface IProps {
  title?: string;

  contents : {title?: ReactNode, imgSrc? : string, body? : ReactNode, key? : number | string}[],
}


const SlidePart : React.FC<IProps> = ({title, contents}) => {

  return (
    <>
      <SliderContainer>
        {title && <StrongCopy reversed={true} text={title}/>}
        <Slider initialSlide={0} arrows={false} autoplay={true} autoplaySpeed={1500}  pauseOnDotsHover pauseOnFocus  infinite dots={true}  variableWidth>
          {contents.map(content => <SliderItem key={content.key}> <MyCard title={content.title}>
            {content.imgSrc && <img src={content.imgSrc}  style={{width: 100, marginTop: 20, marginBottom: 40}} />}
            {content.body}
          </MyCard> </SliderItem>)}
        </Slider>
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled.div`
  padding: 60px 20px 40px 20px;
  background-color: ${primaryColor};
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
