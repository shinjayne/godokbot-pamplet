import React, { useEffect, useState } from 'react';
import Title from "antd/lib/typography/Title";
import {primaryColor} from "./color";
import {Icon} from "antd";

interface IProps {
  toggled?: boolean,
  title: string,
  subTitle: string,
}


const FixedHeader : React.FC<IProps> = ({toggled = false, title, subTitle}) => {

  return (
    <>
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        color: toggled ? primaryColor : 'white',
        backgroundColor:  toggled ? 'white': 'transparent',
        width: '100%',

        zIndex: 1,
        boxShadow: toggled ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : "",
        padding: 16,

        height: toggled ? 60 : 40,

        transitionDelay:'0s',
        transitionDuration:'0.35s',
        transitionProperty:'all',

      }}>
        <Title level={1} style={{
          fontWeight: 1000,
          fontSize: toggled ? 25 : 30,
          margin: "0 0 6px 0",

          fontFamily: 'Binggrae-Bold',
          boxSizing: "border-box",
          width: "fit-content",
          // border: toggled ? '' : `3px solid ${toggled ? primaryColor : 'white'}`,

          transitionDelay:'0s',
          transitionDuration:'0.35s',
          transitionProperty:'all',
        }}> {title}</Title>
        <span style={{fontSize: 14}}>
        {toggled &&  subTitle}
        </span>
      </div>
    </>
  );
};

export default FixedHeader;
