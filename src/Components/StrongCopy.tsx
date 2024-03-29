import React, {CSSProperties, ReactChild, ReactChildren, ReactNode, useEffect, useRef, useState} from 'react';
import {textColor} from "../color";

interface IProps {
  text: ReactNode,
  reversed ? :boolean,
  power ? :boolean,
  useZoom? : boolean,
  style?: CSSProperties,
}


const StrongCopy: React.FC<IProps> = ({text, reversed=false, power=false, useZoom=false, style}) => {

  const ref = useRef<HTMLDivElement>(null);

  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!useZoom) {
      return;
    }
    const current = ref.current!.offsetTop - 300;

    let diff = Math.abs(window.scrollY - current);
    if (diff <= 120 && diff >= 0) {
      setZoomed(true);
    } else {
      setZoomed(false);
    }

  }, [window.scrollY]);

  return (

    <div ref={ref} style={{
      fontWeight: power ? 800 : 700,
      color: reversed ? 'white' : textColor,
      fontSize: power ?  28   :( zoomed ? 22 : 18),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      transitionDelay:'0s',
      transitionDuration:'0.6s',
      transitionProperty:'all',
      ...style,
    }}>{text}</div>
  );
};

export default StrongCopy;
