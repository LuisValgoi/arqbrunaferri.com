import { NextPage } from 'next';

import BasePage from '@/components/BasePage';
import FourOhFourComp from './components';

const FourOhFour: NextPage = () => {
  return (
    <BasePage stretch>
      <FourOhFourComp />
    </BasePage>
  );
};

export default FourOhFour;
