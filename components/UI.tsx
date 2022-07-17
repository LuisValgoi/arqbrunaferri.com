import React from 'react';
import theme from '../theme';
import {
  Text as TextChakra,
  TextProps,
  Heading as HeadingChakra,
  HeadingProps,
  Button as ButtonChakra,
  ButtonProps,
  Box as BoxChakra,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { DEFAULT_COLOR_ARQBROWN, DEFAULT_COLOR_ARQBROWN_DARK } from '../styles';
import { IconBaseProps, IconType } from 'react-icons';
import { css } from '@emotion/react';

export const Text: React.FC<TextProps> = ({ fontWeight = 'thin', ...props }) => {
  const colorTheme = useColorModeValue('gray.500', 'white');

  return (
    <TextChakra fontWeight={fontWeight} color={colorTheme} {...props}>
      {props.children}
    </TextChakra>
  );
};

export const Heading: React.FC<HeadingProps> = ({ fontSize = '2xl', ...props }) => {
  const colorTheme = useColorModeValue('arqbrown.400', 'arqbrown.100');

  return (
    <HeadingChakra color={colorTheme} fontSize={fontSize} {...props}>
      {props.children}
    </HeadingChakra>
  );
};

export const BoxCallout: React.FC<BoxProps> = ({
  px = 4,
  py = 2,
  borderWidth = '1px',
  borderRadius = 'md',
  ...props
}) => {
  const borderColorTheme = useColorModeValue('arqbrown.400', 'arqbrown.100');

  return (
    <BoxChakra
      bg="unset"
      px={px}
      py={py}
      borderColor={borderColorTheme}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      {...props}
    >
      {props.children}
    </BoxChakra>
  );
};

export const Button: React.FC<ButtonProps> = ({
  w = '90%',
  variant = 'outline',
  fontFamily = 'Emperatriz',
  border = '2px',
  size = 'lg',
  borderRadius = 'md',
  ...props
}) => {
  const colorTheme = useColorModeValue('arqbrown.400', 'white');
  const borderColorTheme = useColorModeValue('arqbrown.500', 'arqbrown.100');
  const _hoverTheme = useColorModeValue(
    { bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' },
    { bg: DEFAULT_COLOR_ARQBROWN_DARK, color: theme.colors.white, transform: 'scale(1.05)' },
  );

  return (
    <ButtonChakra
      w={w}
      variant={variant}
      fontFamily={fontFamily}
      border={border}
      size={size}
      borderRadius={borderRadius}
      color={colorTheme}
      borderColor={borderColorTheme}
      _hover={_hoverTheme}
      {...props}
    >
      {props.children}
    </ButtonChakra>
  );
};

type IconBasePropsUI = IconBaseProps & { Src: IconType; };
export const Icon: React.FC<IconBasePropsUI> = ({ Src, size, ...props }) => {
  const colorTheme = useColorModeValue(DEFAULT_COLOR_ARQBROWN, theme.colors['arqbrown'][100]);
  const colorHoverTheme = useColorModeValue(theme.colors['arqbrown'][500], theme.colors['arqbrown'][200]);
  const socialMediaIcons = css`
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${colorTheme};

    &:hover {
      transform: scale(1.05);
      color: ${colorHoverTheme};
    }
  `;

  return <Src {...props} size={size} css={socialMediaIcons} />;
};
