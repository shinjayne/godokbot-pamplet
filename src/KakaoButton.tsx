import React, {CSSProperties, ReactNode, useEffect, useState} from 'react';
import KakaoLogo from './kakao.png';
import styled from "styled-components";
import CustomButton from "./CustomButton";

interface IProps {
  content?: ReactNode,
  style?: CSSProperties,
  onClick?: () => void,
  forShare?: boolean,
}


const KakaoButton: React.FC<IProps> = ({content = '', style = {}, onClick, forShare = false}) => {

  return (
    <CustomButton id={forShare ? 'kakao-link-btn' : ''} onClick={onClick}
                  style={{...style, backgroundColor: '#f7e40d', color: 'black', border: "none", padding: 3}}>
      <img src={KakaoLogo}/>
      {content}
    </CustomButton>
  );
};


export default KakaoButton;
