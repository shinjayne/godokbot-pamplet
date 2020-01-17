import React, {useEffect, useRef, useState} from 'react';

interface IProps {
  imgSrc: string|undefined,
}


const ZoomImage : React.FC<IProps> = ({ imgSrc}) => {


  const ref = useRef<HTMLImageElement>(null);

  const [zoomed, setZoomed] = useState(false);

  useEffect(()=>{
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
      <img ref={ref} src={imgSrc} style={{
        width: zoomed ? 200: 140,


        transitionDelay:'0s',
        transitionDuration:'0.6s',
        transitionProperty:'all',
      }}/>
    </>
  );
};

export default ZoomImage;
