import styled from "styled-components";
import {textColor} from "../color";

/**
 * 최대 너비 420 의 모바일 화면을 항상 보장해주는 Content Body
 */
export const ContentBody = styled.div`
  color: ${textColor};
  overscroll-behavior-x: none;
  word-spacing: initial;
  line-height: 1.4;
  
  width: 100vw;
  @media screen and (min-width: 420px) {
  max-width: 420px;
  }
`;
