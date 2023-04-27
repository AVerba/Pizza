import styles from './ProposalItem.module.scss';
import{addOrder} from '../../../redux/ordersSlice';
import { useDispatch } from 'react-redux';

export const ProposalItem = ({ item }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addOrder(item.id));
  };
  return (

    <li className={styles.item}>
      <a className={styles.item__card} href='#'>
        <div className={styles.item__img__overlay}>
          <img className={styles._img}  src={item.image} alt={item.title} />
          <p className={styles.item__textOverlay}>{item.description}</p>
        </div>
        <div className={styles.item__content}>
          <h4 className={styles.item__title}>{item.title}</h4>
          <p className={styles.item__price}>{item.price}</p>
          <button onClick={add}>Add to cart</button>
        </div>
      </a>
    </li>
  );
};
