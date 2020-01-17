import React, {PropsWithChildren} from 'react';
// @ts-ignore
import Zoom from "react-reveal/Zoom";

interface IProps {
  reversed: boolean,
}


const DisplaySection: React.FC<PropsWithChildren<IProps>> = ({children, reversed}) => {

  return (
    <>
      <Zoom wait={1500} timeout={1500} duration={3000} exit>
        <div style={{
          backgroundColor: reversed ? 'rgb(52, 58, 66)' : 'white',
          color: reversed  ?  'white' : 'rgb(69, 79, 93)',
          marginBottom: 100,
          padding: reversed ?  "50px 16px 32px 16px" : 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }} key={1}>
          {children}
        </div>
      </Zoom>
    </>
  );
};

export default DisplaySection;
