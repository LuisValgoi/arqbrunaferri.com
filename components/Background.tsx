import React from 'react';
import styled from '@emotion/styled';
import { useColorModeValue } from '@chakra-ui/react';

const Lines = styled.svg<{ $bgLines: string; $stretch: boolean }>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${(props) => (props.$stretch ? '100vh' : '100%')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) => `url(${props.$bgLines})`};
`;

const Texture = styled.span<{ $bgColor: string; $bgImage: string; $stretch: boolean }>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${(props) => (props.$stretch ? '100vh' : '100%')};
  overflow-x: hidden;
  opacity: 0.8;
  background-size: 10px 10px;
  background-color: ${(props) => props.$bgColor};
  background-image: ${(props) => props.$bgImage};
`;

const Background: React.FC<{ stretch: boolean }> = ({ stretch }) => {
  const bgLines = useColorModeValue('/lines.svg', '/lines-dark.svg');
  const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgba(0, 0, 0, 0.4)');
  const bgImage = useColorModeValue(
    'repeating-linear-gradient(45deg,rgb(255, 255, 255) 0px, rgb(255, 255, 255) 1px, rgb(250, 250, 250) 0px, rgb(250, 250, 250) 50%)',
    'repeating-linear-gradient(45deg,rgb(60,60,60) 0px, rgb(60,60,60) 1px, rgb(65, 65, 65) 0px, rgb(65, 65, 65) 50%)',
  );

  return (
    <>
      <Lines id="background-line" $stretch={stretch} $bgLines={bgLines} />
      <Texture id="background-texture" $stretch={stretch} $bgColor={bgColor} $bgImage={bgImage} />
    </>
  );
};

export default Background;
