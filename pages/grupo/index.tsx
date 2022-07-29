import { NextPage } from 'next';

import BasePage from '@/components/BasePage';
import GrupoComp from './components';

const Grupo: NextPage = () => {
  return (
    <BasePage stretch>
      <GrupoComp />
    </BasePage>
  );
};

export default Grupo;
