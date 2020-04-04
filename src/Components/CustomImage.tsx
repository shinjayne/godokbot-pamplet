import React, {CSSProperties, useEffect, useRef, useState} from 'react';

interface IProps {
  imgSrc: string,
  useZoom?: boolean,
  defaultHeight?: string | number,
  zoomHeight?: string | number,
  style?: CSSProperties,
}


/**
 * background 처리로, 선택 불가능하게 되어있는 이미지
 */
const CustomImage : React.FC<IProps> = ({imgSrc, useZoom=false, defaultHeight=250, zoomHeight=300, style={}}) => {

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
        backgroundImage: `url(${imgSrc})`,
        backgroundPositionX: '50%' ,
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat",
        width: '100%',
        height: zoomed ? zoomHeight :defaultHeight,

        transitionDelay:'0s',
        transitionDuration:'0.6s',
        transitionProperty:'all',

        ...style,
      }} />
    </>
  );
};

export default CustomImage;
