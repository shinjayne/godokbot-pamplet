import React, {PropsWithChildren} from 'react';
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import {primaryColor, textColor} from "./color";

interface IProps {
  reversed: boolean,
}


const DisplaySection: React.FC<PropsWithChildren<IProps>> = ({children, reversed}) => {

  return (
    <>
      <div style={{
        backgroundColor: reversed ? primaryColor : 'white',
        color: reversed ? 'white' : textColor,
        marginBottom: 100,
        padding: reversed ? "50px 16px 32px 16px" : 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }} key={1}>
        {children}
      </div>
    </>
  );
};

export default DisplaySection;
