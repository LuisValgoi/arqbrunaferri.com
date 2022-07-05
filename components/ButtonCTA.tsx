import { PropsWithChildren } from 'react';

import { Button } from '@chakra-ui/react';
import { DEFAULT_COLOR_ARQBROWN } from '../styles';

import theme from '../theme';

const ButtonCTA: React.FC<PropsWithChildren & { link: string }> = ({ link, children }) => (
  <Button
    w="90%"
    variant="outline"
    fontFamily="Emperatriz"
    border="2px"
    size="lg"
    borderRadius="md"
    borderColor="arqbrown.500"
    onClick={() => {
      window.open(link, '_blank');
      alert(link);
    }}
    _hover={{ bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' }}
  >
    {children}
  </Button>
);

export default ButtonCTA;
