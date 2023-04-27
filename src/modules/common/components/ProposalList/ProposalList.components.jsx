import styles from './ProposalList.module.scss';
import { Container } from '../Container';
import { ProposalItem } from '../ProposalItem';


export const ProposalList = ({ products }) => {
  console.log(products);
  return (
    <Container>
      <h3 className={styles.title}>Try our best menu</h3>
      <ul className={styles.list}>
        {
          products.map(item => (<ProposalItem key={item.id} item={item} />))
        }
      </ul>

    </Container>
  );
};
