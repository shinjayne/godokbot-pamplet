import React, {CSSProperties, ReactChild} from 'react';
import DisplaySection from "./DisplaySection";
import StrongCopy from "../StrongCopy";
import {Desc} from "../../HomePage/Home";
import CustomImage from "../CustomImage";

export interface DisplayGroupProps {
  strongCopy?: ReactChild,
  imgSrc?: string,
  imgNode?: ReactChild,
  desc?: ReactChild,
  reversed? : boolean,
  imgContainerStyle?: CSSProperties,
  compact? : boolean,
  displaySectionStyle?: CSSProperties,
}

type DisplayGrounType = 'default' | 'reversed' | 'secondary';


const DisplayGroup: React.FC<DisplayGroupProps> = ({compact=false, strongCopy, imgSrc, imgNode, desc, reversed=false, imgContainerStyle={}, displaySectionStyle}) => {

  return (
    <>
      <DisplaySection style={displaySectionStyle} compact={compact} reversed={reversed}>
        {strongCopy && <StrongCopy reversed={reversed} text={strongCopy}/>}
        {(imgNode || imgSrc) &&
        <div style={{marginTop:  40, marginBottom: 40, width: '100%',  ...imgContainerStyle}}>
          {imgNode}
          {!imgNode && imgSrc && <CustomImage imgSrc={imgSrc}/>}
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
