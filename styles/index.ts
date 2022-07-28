import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../theme';
const ENV = process.env.NODE_ENV;

export const rotateAnimation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const ProfileImageArea = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ProfileImageBorder = styled.span`
  background: linear-gradient(
    252deg,
    ${theme.colors.white} 0%,
    ${theme.colors['arqbrown'][300]} 55%,
    ${theme.colors['arqbrown'][500]} 85%
  );
  border-radius: 50%;
  width: 170px;
  height: 170px;
  position: absolute;
  animation-name: ${rotateAnimation};
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const profileImageStyle = css`
  border-radius: 50%;
`;

export const letteringStyleDesktop = css`
  font-size: 12px !important;
  line-height: unset !important;
  position: absolute !important;

  animation-name: ${rotateAnimation};
  animation-duration: 100000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  & div {
    position: unset !important;
  }
`;

export const letteringStyleMobile = css`
  font-size: 12px !important;
  line-height: unset !important;
  position: absolute !important;

  animation-name: ${rotateAnimation};
  animation-duration: 100000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  & div {
    position: unset !important;
  }
`;
