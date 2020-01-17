import React, {useEffect, useRef, useState} from 'react';
import iphoneBackImg from "./iphone-back.png";

interface IProps {
}


const PhoneImage : React.FC<IProps> = () => {

  // const position = useScrollPosition();

  const ref = useRef<HTMLDivElement>(null);


  const [zoomed, setZoomed] = useState(false);

  useEffect(()=>{
     const current = ref.current!.offsetTop - 300;

    let diff = Math.abs(window.scrollY - current);
    if (diff <= 120 && diff >= 0) {
      setZoomed(true);
      console.log('hit');
    }
    else {
      setZoomed(false);
    }

  }, [window.scrollY]);

  return (
    <>
      <div ref={ref} style={{
        backgroundImage: `url(${iphoneBackImg})`,
        backgroundPositionX: '50%' ,
        backgroundSize: 'cover',
        width: '100vw',
        height: zoomed ? 300 : 250,

        transitionDelay:'0s',
        transitionDuration:'0.6s',
        transitionProperty:'all',
      }} />
    </>
  );
};

export default PhoneImage;
