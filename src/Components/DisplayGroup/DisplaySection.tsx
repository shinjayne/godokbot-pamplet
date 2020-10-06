import React, {CSSProperties, PropsWithChildren} from 'react';
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import {primaryColor, textColor} from "../../color";

interface IProps {
  reversed: boolean,
  compact? : boolean,
  style?: CSSProperties,
}


const   DisplaySection: React.FC<PropsWithChildren<IProps>> = ({children, reversed, compact= false, style}) => {

  return (
    <>
      <div style={{
        backgroundColor: reversed ? primaryColor : 'white',
        color: reversed ? 'white' : textColor,
        marginBottom: compact ? 0 :  100,
        padding: reversed ? "50px 16px 32px 16px" : 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }} key={1}>
        {children}
      </div>
    </>
  );
};

export default DisplaySection;
