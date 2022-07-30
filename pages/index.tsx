import type { NextPage } from 'next';
import { useMediaQuery } from '@chakra-ui/react';

import BasePage from '@/components/BasePage';
import HomeComp from '@/pages/home/components';

const Home: NextPage = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <BasePage>
      <HomeComp isMobile={!isLargerThan1280} />
    </BasePage>
  );
};

export default Home;
