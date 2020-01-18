import React, {PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import styled from "styled-components";
import {textColor} from "./color";

interface IProps {
  title? : ReactNode,

}


const MyCard : React.FC<PropsWithChildren<IProps>> = ({title, children}) => {

  return (
    <>
      <Con>
        <Title>
        {title}
        </Title>

        <BodyPart>
        {children}
        </BodyPart>
      </Con>
    </>
  );
};

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 0 20px 0;
  background-color: white;
  color : ${textColor};
  width: 280px;
  min-height: 200px;
  border-radius: 6px;
  border: 0.5px solid rgba(130,130,130,0.25);
  padding: 16px;
  box-sizing: border-box;
  //height: 230px;
  //box-shadow:rgba(0, 0, 0, 0.2) 0px 7px 10px 0px;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 600;
  
  margin-bottom: 20px;
`;

const BodyPart = styled.div`
  height: 255px;
  //height: 130px;
  font-size: 13px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MyCard;
