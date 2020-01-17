import {useState} from "react";

const useScrollPosition = (): number => {
  const [position, setPosition] = useState(window.scrollY);


  window.onscroll = () => {
    if (window.scrollY - position > 50 || position - window.scrollY > 50) {
      console.log(window.scrollY);
      setPosition(window.scrollY);
    }
  };

  return position;
};

export default useScrollPosition;
