import React from 'react';
import {Helmet} from "react-helmet";

import thumbnail from './thumbnail1.jpeg';

interface IProps {
}


const DefaultHelmet : React.FC<IProps> = () => {

  return (
    <Helmet>
      <meta property="og:image" content={thumbnail}/>
      <meta property="og:image:width" content="800"/>
      <meta property="og:image:height" content="400"/>
      <meta property="og:image:type" content="image/jpeg"/>
      <meta property="og:title" content="고독한 취준봇"/>
      <meta property="og:description" content="하루 두번 취준 컨텐츠 쏙쏙, 고독한 취준봇"/>
      <meta
        name="description"
        content="하루 두번 취준 컨텐츠 쏙쏙"
      />
      <title>고독한 취준봇</title>
    </Helmet>
  );
};

export default DefaultHelmet;
