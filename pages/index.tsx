import type { NextPage } from 'next';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';

import BasePage from '@/components/BasePage';
import HomeComp from '@/pages/home/components';

const Home: NextPage = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <BasePage>
      <HomeComp isMobile={!isLargerThan1280} isOpen={isOpen} onPopoverToggle={onToggle} onPopoverClose={onClose} />
    </BasePage>
  );
};

export default Home;
