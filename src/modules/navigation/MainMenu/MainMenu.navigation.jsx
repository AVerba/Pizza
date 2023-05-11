import styles from "./MainMenu.module.scss";
import { LINK_KEYS } from "../../common/const/app-keys.const";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { useSelector } from "react-redux";


import { getOrder } from "../../redux/ordersSlice";
import { getQntOrder } from "../../utils/utils";
import { MenuLink } from "../../common/components/UI/MenuLink";

export const MainMenu = () => {
  const { order } = useSelector(getOrder);
  const totalItems = getQntOrder(order);

  return (

    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <MenuLink
            title={"Pizzas menu"}
            path={LINK_KEYS.ROOT}
            className={styles.link}
            activeClassName={styles.active}>
            <LocalPizzaIcon style={{ color: "grey" }} />
          </MenuLink>
        </li>
        <li className={styles.menu__item}>
          <MenuLink
            title={"Your order"}
            path={LINK_KEYS.ORDER}
            className={styles.link}
            activeClassName={styles.active}>
            <span>{totalItems}</span>
            <ShoppingCartIcon style={totalItems === 0 ? ({ color: "grey" }) : ({ color: "tomato" })} />
          </MenuLink>
        </li>
      </ul>
    </nav>
  );

};
