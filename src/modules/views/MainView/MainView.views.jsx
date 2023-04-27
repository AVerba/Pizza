import styles from './MainView.module.scss';

import { products } from '../../services/products.js';
import { Container  } from '../../common/components/Container';
import { ProposalList } from '../../common/components/ProposalList';

const MainView = () => {


  return (
    <div className={styles.main}>
      <Container >
        <ProposalList products={products}/>
      </Container >
    </div>

  );
};
export default MainView;

