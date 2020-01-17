import React, {ReactChild} from 'react';
import DisplaySection from "./DisplaySection";
import StrongCopy from "./StrongCopy";
import {Desc} from "./App";
import ZoomImage from "./ZoomImage";

interface IProps {
  strongCopy: ReactChild,
  imgSrc?: string,
  imgNode?: ReactChild,
  desc?: ReactChild,
  reversed? : boolean,

}


const DisplayGroup: React.FC<IProps> = ({strongCopy, imgSrc, imgNode, desc, reversed=false}) => {

  return (
    <>
      <DisplaySection reversed={reversed}>
        <StrongCopy reversed={reversed} text={strongCopy}/>
        {(imgNode || imgSrc) &&
        <div style={{marginTop: 40, marginBottom: 40}}>
          {imgNode}
          {!imgNode && imgSrc && <ZoomImage imgSrc={imgSrc}/>}
        </div>
        }
        <Desc>
          {desc}
        </Desc>

      </DisplaySection>

    </>
  );
};

export default DisplayGroup;
