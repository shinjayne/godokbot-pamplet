import React, {useEffect, useRef, useState} from 'react';
import iphoneBackImg from "./iphone-back.png";

interface IProps {
  imgSrc?: string,
  useZoom?: boolean,
}


const WidthSafeImage : React.FC<IProps> = ({imgSrc, useZoom=true}) => {

  // const position = useScrollPosition();

  const ref = useRef<HTMLDivElement>(null);


  const [zoomed, setZoomed] = useState(false);

  useEffect(()=>{
    if (!useZoom) {
      return;
    }
     const current = ref.current!.offsetTop - 300;

    let diff = Math.abs(window.scrollY - current);
    if (diff <= 120 && diff >= 0) {
      setZoomed(true);
    }
    else {
      setZoomed(false);
    }

  }, [window.scrollY]);

  return (
    <>
      <div ref={ref} style={{
        backgroundImage: `url(${imgSrc || iphoneBackImg})`,
        backgroundPositionX: '50%' ,
        backgroundSize: useZoom ? 'cover' : 'contain',
        backgroundRepeat: "no-repeat",
        width: '100%',
        height: zoomed ? 300 : 250,

        transitionDelay:'0s',
        transitionDuration:'0.6s',
        transitionProperty:'all',
      }} />
    </>
  );
};

export default WidthSafeImage;
