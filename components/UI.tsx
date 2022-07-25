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
  forwardRef,
} from '@chakra-ui/react';

export const Text: React.FC<TextProps> = ({ fontWeight = 'thin', ...props }) => {
  const colorTheme = useColorModeValue('gray.500', 'white');

  return (
    <TextChakra fontWeight={fontWeight} color={colorTheme} {...props}>
      {props.children}
    </TextChakra>
  );
};
Text.displayName = 'Text';

export const Heading: React.FC<HeadingProps> = ({ fontSize = '2xl', ...props }) => {
  const colorTheme = useColorModeValue('arqbrown.400', 'arqbrown.100');

  return (
    <HeadingChakra color={colorTheme} fontSize={fontSize} {...props}>
      {props.children}
    </HeadingChakra>
  );
};
Heading.displayName = 'Heading';

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
BoxCallout.displayName = 'BoxCallout';

export const Button = forwardRef<ButtonProps, 'button'>(
  (
    {
      w = '90%',
      variant = 'outline',
      fontFamily = 'Emperatriz',
      border = '2px',
      size = 'lg',
      borderRadius = 'md',
      textTransform = 'uppercase',
      ...props
    },
    ref,
  ) => {
    const colorTheme = useColorModeValue('arqbrown.400', 'white');
    const borderColorTheme = useColorModeValue('arqbrown.500', 'arqbrown.100');
    const _hoverTheme = useColorModeValue(
      { bg: 'rgba(190, 135, 96, 0.12)', transform: 'scale(1.05)' },
      { bg: 'rgba(190, 135, 96, 0.12)', color: theme.colors.white, transform: 'scale(1.05)' },
    );

    return (
      <ButtonChakra
        ref={ref}
        w={w}
        variant={variant}
        fontFamily={fontFamily}
        border={border}
        size={size}
        borderRadius={borderRadius}
        textTransform={textTransform}
        color={colorTheme}
        borderColor={borderColorTheme}
        _hover={_hoverTheme}
        {...props}
      >
        {props.children}
      </ButtonChakra>
    );
  },
);
Button.displayName = 'Button';
