import React, {CSSProperties, ReactNode} from 'react';
import styled from "styled-components";
import StrongCopy from "../StrongCopy";
import {primaryColor, textColor} from "../../color";
import {Desc} from "../../HomePage/Home";
import CustomImage from "../CustomImage";


interface IProps {
  reverse?: boolean,
  title?: ReactNode;
  imgNode?: ReactNode,
  imgSrc?: string,
  imgContainerStyle?: CSSProperties,
  desc?: ReactNode,

  containerStyle? : CSSProperties,
  contents: { title?: ReactNode, imgSrc?: string, body?: ReactNode, key?: number | string }[],
}


const ListDisplayGroup: React.FC<IProps> = ({reverse = false, title, contents, imgNode, imgSrc, imgContainerStyle, desc ,containerStyle,} ) => {

  return (
    <>
      <SliderContainer reverse={String(reverse)} style={containerStyle}>
        {title && <StrongCopy reversed={reverse} text={title}/>}
        <br/>

        {(imgNode || imgSrc) &&
        <div style={{marginTop: 40, marginBottom: 40, width: '100%', ...imgContainerStyle}}>
          {imgNode}
          {!imgNode && imgSrc && <CustomImage imgSrc={imgSrc}/>}
        </div>
        }
        <Desc style={{marginBottom: 40}}>
          {desc}
        </Desc>

        {contents.map(content => <ListCard key={content.key}>
          <CardTitle>{content.title}</CardTitle>
          {content.imgSrc && <img src={content.imgSrc} style={{width: 100, marginTop: 20, marginBottom: 40}}/>}
          <Desc style={{textAlign: "initial"}}>{content.body}</Desc>
        </ListCard>)}

      </SliderContainer>
    </>
  );
};

const SliderContainer = styled.div<{ reverse: string }>`
  padding: 60px 20px 40px 20px;
  background-color: ${({reverse}) => reverse === 'true' ? primaryColor : 'white'} ;
  margin-bottom: 70px;
  color: ${({reverse}) => reverse === 'true' ? 'white': textColor};
`;


const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 16px 32px 16px;
  border-radius: 6px;
    background-color: white;
  color : ${textColor};
  border: 0.5px solid rgba(130,130,130,0.25);
  box-sizing: content-box;
  margin: 8px 0 8px 0;
`;

const CardTitle = styled.div`
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.9; 
`;


export default ListDisplayGroup;
