import { PropsWithChildren } from 'react';

import { Button } from '@chakra-ui/react';
import { DEFAULT_COLOR_ARQBROWN } from '../styles';

import theme from '../theme';

const ButtonCTA: React.FC<PropsWithChildren & { link?: string; }> = (props) => (
  <Button
    w="90%"
    variant="outline"
    fontFamily="Emperatriz"
    border="2px"
    size="lg"
    borderRadius="md"
    borderColor="arqbrown.500"
    onClick={() => props.link ?? window.open(props.link, '_blank')}
    _hover={{ bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' }}
  >
    {props.children}
  </Button>
);

export default ButtonCTA;
