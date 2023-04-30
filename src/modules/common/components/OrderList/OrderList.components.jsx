import styles from './OrderList.module.scss';
import {Container} from "../Container";
import {OrderItem} from "../OrderItem";
import {useDispatch, useSelector} from "react-redux";
import {getOrder, makeOrder} from "../../../redux/ordersSlice";
import {getQntOrder} from "../../../utils/utils";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {LINK_KEYS} from "../../const/app-keys.const";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {useState} from "react";

export const OrderList = ({products}) => {
  const {order} = useSelector(getOrder);
  const [active, setActive] = useState('Home');
  const handleSelect = eventKey => setActive(eventKey);

  const totalItems=getQntOrder(order)
  const keys=Object.keys(order)
  const aaOfOrders=[...Object.values(order)]
  const dispatch = useDispatch();
  let sum=0;
  keys.map(item=>{
    console.log(item)
    const foundElement = products.find(element => element.id === Number(item) );
    return sum+=foundElement.price*order[item].quantity
  })

  const makeFinalOrder = () => {
    dispatch(makeOrder() );
  };


  return (
    <Container>
      <ul className={styles.list}>
        {
          aaOfOrders.map(item => (
            <OrderItem key={item.id} value={item}  />
          ))
        }
      </ul>
      {totalItems===0?(
        <div className={styles.makeOrder}>
          <span>You have no orders yet
follow the link and order quickly</span>
          <Nav className={styles.menu} variant='pills' activeKey={active} onSelect={handleSelect}>
            <Nav.Item className={styles.Orderitem}>
              <Nav.Link
                as={NavLink}
                className={styles.link}
                eventKey='Home'
                to={LINK_KEYS.ROOT}
              > Choose one of pizza
                <LocalPizzaIcon style={{ color: 'grey' }} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      ):(
        <div className={styles.makeOrder}>
          <span className={styles.totalPrice}>Total Price:  </span>
          <span>{sum}</span>
          <button className={styles.orderBtn} onClick={makeFinalOrder}>make order</button>
        </div>

      )}


    </Container>
  )
}
