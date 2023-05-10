import styles from './MainView.module.scss';

import { products } from '../../services/products.js';
import { Container  } from '../../common/components/Container';
import { ProposalList } from '../../common/components/ProposalList';
import { MainTitle } from "../../common/components/UI/Titles/MainTitle";

const MainView = () => {


  return (
    <div className={styles.main}>
      <Container >
        <MainTitle className={styles.title} title={"Try our best menu"}/>
        <ProposalList products={products}/>
      </Container >
    </div>

  );
};
export default MainView;

