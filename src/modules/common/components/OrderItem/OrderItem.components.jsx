import styles from './OrderItem.module.scss';
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import {addOrder, deleteFromOrder, deleteItemOrder} from "../../../redux/ordersSlice";
import {useDispatch} from "react-redux";
import {products} from '../../../services/products';


export const OrderItem = ({value}) => {
  const {id, quantity}=value;
  const dispatch = useDispatch();
  const item = products.find(item => item.id ===  id)

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
      <div className={styles.item__img}>
        <button className={styles.CntrBtn}><DeleteIcon onClick={deleteFromOrderList}/></button>
        <img className={styles._img} src={item.image} alt={item.title} width="100"/>
      </div>

      <div className={styles.order__conrtol}>
        <button className={styles.CntrBtn}><AddBoxIcon onClick={addToOrder} style={{color: 'green'}}/></button>
        <span>Quantity <span>{ quantity}</span> </span>
        <button className={styles.CntrBtn}><IndeterminateCheckBoxIcon onClick={decrementQuantity} style={{color: 'tomato'}}/></button>

      </div>


      <span> Price <span>{item.price*quantity}</span> </span>
    </li>

  )
};
