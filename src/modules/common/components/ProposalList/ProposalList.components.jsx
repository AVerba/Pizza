import styles from './ProposalList.module.scss';
import { Container } from '../Container';
import { ProposalItem } from '../ProposalItem';


export const ProposalList = ({ products }) => {

  return (
    <Container>
      <ul className={styles.list}>
        {
          products.map(item => (<ProposalItem key={item.id} item={item} />))
        }
      </ul>

    </Container>
  );
};
