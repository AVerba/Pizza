import styles from './ProposalItem.module.scss';
import {addOrder, deleteItemOrder,deleteFromOrder, getOrder} from '../../../redux/ordersSlice';
import {useDispatch, useSelector} from 'react-redux';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

export const ProposalItem = ({item}) => {
  const dispatch = useDispatch();

  const {order} = useSelector(getOrder);
  const foundItem = order[item.id];
  const addToOrder = () => {
    dispatch(addOrder(item));
  };
  const decrementQuantity = () => {
    dispatch(deleteItemOrder(item));
  }
  const deleteFromOrderList = () => {
    dispatch(deleteFromOrder(item));
  }

  return (
    <li className={styles.item}>
      <div className={styles.item__card}>
        <div className={styles.item__img__overlay}>
          <img className={styles._img} src={item.image} alt={item.title}/>
          <p className={styles.item__textOverlay}>{item.description}</p>
        </div>
        <div className={styles.item__content}>
          <h4 className={styles.item__title}>{item.title}</h4>
          <p className={styles.item__price}>{item.price}</p>
          <div className={styles.item__control}>
            {!foundItem ? (
              <div className={styles.order__add}>
                <button className={styles.order__addBtn} onClick={addToOrder}>Add to cart</button>
              </div>
            ) : (
              <div className={styles.order__conrtol}>
                <button className={styles.CntrBtn} onClick={addToOrder}><AddBoxIcon  style={{color: 'green'}}/></button>
                <span> {foundItem.quantity} </span>
                <button className={styles.CntrBtn} onClick={decrementQuantity}><IndeterminateCheckBoxIcon  style={{color: 'tomato'}}/></button>
                <button className={styles.CntrBtn} onClick={deleteFromOrderList}><DeleteIcon /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
    ;
};
