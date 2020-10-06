import React, {CSSProperties, PropsWithChildren, useEffect, useState} from 'react';
import styled from "styled-components";
import {primaryColor} from "../color";

interface IProps {
  style? : CSSProperties,
}


const Tag : React.FC<PropsWithChildren<IProps>> = ({children, style}) => {

  return (
    <>
      <StyledSpan style={style}>
        {children}
      </StyledSpan>
    </>
  );
};

const StyledSpan = styled.span`
  background-color: ${primaryColor};
  color: white;
  font-size: 12px;
  padding: 6px 10px 6px 10px;
  border-radius: 11px;
`;

export default Tag;
