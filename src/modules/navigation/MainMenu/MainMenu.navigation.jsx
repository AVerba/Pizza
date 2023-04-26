import styles from './MainMenu.module.scss';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LINK_KEYS } from '../../common/const/app-keys.const';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
export const MainMenu = () => {
  const [active, setActive] = useState('Home');
  const [qntOrder, setQntOrder] = useState(1);
  const handleSelect = eventKey => setActive(eventKey);
  return (
    <Nav className={styles.menu} variant='pills' activeKey={active} onSelect={handleSelect}>
      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey='Home'
          to={LINK_KEYS.ROOT}
        > Pizzas
          <LocalPizzaIcon style={{ color: 'grey' }} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey='Order'
          to={LINK_KEYS.ORDER}
        > Order
          <span>{qntOrder}</span>
          <ShoppingCartIcon style={qntOrder === 0 ? ({ color: 'grey' }) : ({ color: 'tomato' })} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

}
