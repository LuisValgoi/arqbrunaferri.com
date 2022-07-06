import React from 'react';

import {
  Text as TextChakra,
  TextProps,
  Heading as HeadingChakra,
  HeadingProps,
  Button as ButtonChakra,
  ButtonProps,
} from '@chakra-ui/react';
import { DEFAULT_COLOR_ARQBROWN } from '../styles';
import theme from '../theme';

export const Text: React.FC<TextProps> = ({ fontWeight = 'thin', color = 'gray.500', ...props }) => {
  return (
    <TextChakra fontWeight={fontWeight} color={color} {...props}>
      {props.children}
    </TextChakra>
  );
};

export const Heading: React.FC<HeadingProps> = ({ color = 'arqbrown.300', fontSize = '2xl', ...props }) => {
  return (
    <HeadingChakra color={color} fontSize={fontSize} {...props}>
      {props.children}
    </HeadingChakra>
  );
};

export const Button: React.FC<ButtonProps> = ({
  w = '90%',
  variant = 'outline',
  fontFamily = 'Emperatriz',
  border = '2px',
  size = 'lg',
  borderRadius = 'md',
  borderColor = 'arqbrown.500',
  _hover = { bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' },
  ...props
}) => {
  return (
    <ButtonChakra
      w={w}
      variant={variant}
      fontFamily={fontFamily}
      border={border}
      size={size}
      borderRadius={borderRadius}
      borderColor={borderColor}
      _hover={_hover}
      {...props}
    >
      {props.children}
    </ButtonChakra>
  );
};
