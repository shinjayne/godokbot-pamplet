import React, {useEffect, useRef, useState} from 'react';

interface IProps {
  videoSrc: string | undefined,
}


const ZoomVideo: React.FC<IProps> = ({videoSrc}) => {


  const ref = useRef<HTMLVideoElement>(null);

  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const current = ref.current!.offsetTop - 300;

    let diff = Math.abs(window.scrollY - current);
    if (diff <= 120 && diff >= 0) {
      setZoomed(true);
    } else {
      setZoomed(false);
    }

  }, [window.scrollY]);

  return (
    <>
      <video style={{
        width: zoomed ? '80vw' : 200,
        transitionDelay: '0s',
        transitionDuration: '0.6s',
        transitionProperty: 'all',
      }} ref={ref} autoPlay loop muted>
        <source src={`./videodemo.mp4`} type='video/mp4'/>
      </video>
    </>
  );
};

export default ZoomVideo;
