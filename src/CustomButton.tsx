import React, {CSSProperties, PropsWithChildren, useEffect, useState} from 'react';
import styled from "styled-components";
import {buttonColor, primaryColor, textColor} from "./color";

export type customButtonType = 'primary' | 'default' | 'disabled';
interface IProps {
  style?: CSSProperties,
  type?: customButtonType,
}


const CustomButton : React.FC<PropsWithChildren<IProps>> = ({children, style={}, type='default'}) => {


  const colorMap : {[k in customButtonType] : CSSProperties} = {
    primary: {
      backgroundColor: buttonColor,
      color: 'white',
      border: "none",
    },
    default: {
      backgroundColor: 'white',
      border: `0.5px solid rgba(69, 79, 93, 0.8)`,
      color: textColor,
    },
    disabled: {
      backgroundColor: '#e0e0e0',
      border: `0.5px solid rgba(69, 79, 93, 0.8)`,
      color: textColor,
      cursor: "not-allowed",
    },
  };

  return (
    <Button style={{...colorMap[type], ...style}}>
      {children}
    </Button>
  );
};
const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px auto;
    background: ${buttonColor};
    color: white;
    width: 100%;
    
    cursor: pointer;
    
    font-size: 13px;
   
    padding: 6px;
    margin-top: 26px;
    font-weight: bold;
    border-radius: 22px;
    box-sizing: border-box;
    text-align: center;
    
`;

export default CustomButton;
