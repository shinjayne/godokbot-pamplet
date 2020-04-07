import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import logo from "./logo.png";
import {primaryColor} from "./color";

interface IProps {
  reversed? : boolean,
}


const LogoLink : React.FC<IProps> = ({reversed = true}) => {

  return (
    <>
      <Link
        to={'/'}
        style={{
          fontWeight: 1000,
          fontSize: 14,
          margin: "0 0 40px 0",
          color: reversed ?  "white" : primaryColor,

          fontFamily: 'Jalnan',
          boxSizing: "border-box",
          width: "fit-content",
          // border: toggled ? '' : `3px solid ${toggled ? primaryColor : 'white'}`,

          transitionDelay: '0s',
          transitionDuration: '0.35s',
          transitionProperty: 'all',
        }}>
        고독한 취준봇
        <img src={logo}
             style={{height: 14, marginLeft: 5, marginTop: -2}}/>
      </Link>
    </>
  );
};

export default LogoLink;
