import type { NextPage } from 'next';

import BasePage from '@/components/BasePage';
import SobreComp from './components';

const Sobre: NextPage = () => {
  return (
    <BasePage stretch>
      <SobreComp />
    </BasePage>
  );
};

export default Sobre;
