import React, {useEffect, useRef, useState} from 'react';

interface IProps {
  inital? :number,
  max? : number,
}


const Counter : React.FC<IProps> = ({ inital = 0, max=100}) => {


  const ref = useRef<HTMLImageElement>(null);


  const [count, setCount] = useState<number>(max);
  const [doCount, setDoCount] = useState(false);

  useEffect(()=>{
    const current = ref.current!.offsetTop - 300;

    let diff = Math.abs(window.scrollY - current);
    if (diff <= 120 && diff >= 0) {
      setDoCount(true);
    }
    else {
      setDoCount(false);
    }

  }, [window.scrollY]);

  useEffect(()=> {
    if (doCount) grainCountStart();
  }, [doCount]);

  async function grainCountStart() {
    setCount(inital);
    await wait(10);
    for (let i = inital; i <= max; i++) {
      setCount(i);
      await wait(1);
    }
  }

  async function wait(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <>
      <span ref={ref} style={{display: 'inline', margin: 0, padding: 0}}>{count}</span>
    </>
  );
};

export default Counter;
