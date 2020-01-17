import {useState} from "react";

const useScrollPosition = (): number => {
  const [position, setPosition] = useState(window.scrollY);


  window.onscroll = () => {
    if (window.scrollY - position > 50 || position - window.scrollY > 50) {
      setPosition(window.scrollY);
    }
  };

  return position;
};

export default useScrollPosition;
