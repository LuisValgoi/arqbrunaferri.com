import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../theme';

export const DEFAULT_COLOR_ARQBROWN = theme.colors['arqbrown'][400];

export const DEFAULT_COLOR_ARQBROWN_DARK = 'rgba(190, 135, 96, 0.12)';

export const profileImageBorderSpin = keyframes`
from {
  transform:rotate(0deg);
}
to {
  transform:rotate(360deg);
}
`;

export const ProfileImageArea = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;

  & span:last-child {
    position: absolute !important;
    animation-name: ${profileImageBorderSpin};
    animation-duration: 60000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
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
  animation-name: ${profileImageBorderSpin};
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const profileImageStyle = css`
  border-radius: 50%;
`;