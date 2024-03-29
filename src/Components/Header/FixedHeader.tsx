import React, {CSSProperties, ReactNode} from 'react';
import Title from "antd/lib/typography/Title";
import {primaryColor} from "../../color";
import styled from "styled-components";

interface IProps {
  toggled?: boolean,
  title: ReactNode,
  subTitle: ReactNode,
  style? : CSSProperties,
}


const FixedHeader: React.FC<IProps> = ({toggled = false, title, subTitle, style}) => {

  return (
    <>
      <FixedContainer toggled={String(toggled)} style={style}>
        <div style={{
          fontWeight: 1000,
          fontSize: toggled ? 25 : 30,
          margin: "0 0 6px 0",

          fontFamily: 'Jalnan',
          boxSizing: "border-box",
          width: "fit-content",
          // border: toggled ? '' : `3px solid ${toggled ? primaryColor : 'white'}`,

          transitionDelay: '0s',
          transitionDuration: '0.35s',
          transitionProperty: 'all',
        }}> {title}</div>
        <span style={{fontSize: 14}}>
        {toggled && subTitle}
        </span>
      </FixedContainer>
    </>
  );
};


const FixedContainer = styled.div<{ toggled: string }>`
        position: fixed;
        left: 0;
        top: 0;
        color: ${({toggled}) => toggled === 'true' ? primaryColor : 'white'};
        background-color:  ${({toggled}) => toggled === 'true' ? 'white' : 'transparent'};
        width: 100%;

        z-index: 1;
        box-shadow: ${({toggled}) => toggled === 'true' ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : ''};
        
        padding: 16px;

        height: ${({toggled}) => toggled === 'true' ? '92px' : '40px'};

        transition-delay:0s;
        transition-duration:0.35s;
        transition-property:all;
        
        @media screen and (min-width: 420px) {
          color: ${primaryColor};
        }
`;

export default FixedHeader;
