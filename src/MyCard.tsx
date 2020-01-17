import React, {PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import styled from "styled-components";

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

        {children}
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
  color :rgb(69, 79, 93);
  width: 280px;
  min-height: 200px;
  border-radius: 6px;
  border: 0.5px solid rgba(130,130,130,0.25);
  padding: 16px;
  box-sizing: border-box;
  //box-shadow:rgba(0, 0, 0, 0.2) 0px 7px 10px 0px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export default MyCard;
