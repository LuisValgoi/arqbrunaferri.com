import { Button, useColorMode } from '@chakra-ui/react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label="Theme Switcher"
      variant="outline"
      borderRadius={50}
      padding={2}
      onClick={toggleColorMode}
      colorScheme="arqbrown"
    >
      {colorMode === 'light' ? <BiMoon /> : <BsSun />}
    </Button>
  );
};
export default ThemeSwitcher;
