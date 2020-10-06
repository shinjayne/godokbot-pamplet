import React, {CSSProperties, ReactNode, useEffect, useState} from 'react';
import KakaoLogo from '../../HomePage/kakao.png';
import styled from "styled-components";
import CustomButton from "./CustomButton";

interface IProps {
  content?: ReactNode,
  style?: CSSProperties,
  onClick?: () => void,
  id?: string,
}


const KakaoButton: React.FC<IProps> = ({content = '', style = {}, onClick,  id}) => {

  return (
    <CustomButton id={id} onClick={onClick}
                  style={{...style, backgroundColor: '#f7e40d', color: 'black', border: "none", padding: 3}}>
      <img src={KakaoLogo}/>
      {content}
    </CustomButton>
  );
};
[]

export default KakaoButton;
