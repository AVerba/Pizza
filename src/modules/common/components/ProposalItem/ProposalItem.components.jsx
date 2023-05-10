import styles from "./ProposalItem.module.scss";
import { addOrder, deleteItemOrder, deleteFromOrder, getOrder } from "../../../redux/ordersSlice";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { ReactComponent as Pizza } from "../../../../assets/icons/pizza.svg";
import { CommonButton } from "../UI/Buttons/CommonButton";
import { Title } from "../UI/Titles/Title";

export const ProposalItem = ({ item }) => {
  const dispatch = useDispatch();

  const { order } = useSelector(getOrder);
  const foundItem = order[item.id];
  const addToOrder = () => {
    dispatch(addOrder(item));
  };
  const decrementQuantity = () => {
    dispatch(deleteItemOrder(item));
  };
  const deleteFromOrderList = () => {
    dispatch(deleteFromOrder(item));
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__card}>
        <div className={styles.item__img__overlay}>
          <img className={styles._img} src={item.image} alt={item.title} />
          <p className={styles.item__textOverlay}>
            <p>{item.description}</p>
            <Pizza className={styles.itemPizzaLogo} />
          </p>

        </div>
        <div className={styles.item__content}>
          <Title tagType={"h4"} title={item.title} className={styles.item__title}/>
          <p className={styles.item__price}>Price: {item.price} UAH</p>
          <div className={styles.item__control}>
            {!foundItem ? (
              <div className={styles.order__add}>
                <CommonButton className={styles.order__addBtn} handleClick={addToOrder} title={"Add to cart"} />
              </div>
            ) : (
              <div className={styles.order__conrtol}>
                <button className={styles.CntrBtn} onClick={addToOrder}><AddBoxIcon className={styles.CntrBtn__icon}
                                                                                    style={{ color: "green" }} />
                </button>
                <span className={styles.display__qnt}> {foundItem.quantity} </span>
                <button className={styles.CntrBtn} onClick={decrementQuantity}><IndeterminateCheckBoxIcon
                  className={styles.CntrBtn__icon} style={{ color: "tomato" }} /></button>
                <button className={styles.CntrBtn} onClick={deleteFromOrderList}><DeleteIcon
                  className={styles.CntrBtn__icon} /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
    ;
};
