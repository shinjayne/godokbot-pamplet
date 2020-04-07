const useGtag = () => {
  // @ts-ignore
  const gtag = window.gtag;
  return gtag as (...arg: any) => void;
};


export default useGtag;
