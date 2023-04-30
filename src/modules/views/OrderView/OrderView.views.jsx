import styles from './OrderView.module.scss';
import {Container} from "../../common/components/Container";
import {OrderList} from "../../common/components/OrderList";
import {products} from "../../services/products";

const OrderView = () => {
  return (

    <div className={styles.orderView}>
      <Container>
        <OrderList products={products}/>
      </Container>



    </div>
  );
};
export default OrderView;
