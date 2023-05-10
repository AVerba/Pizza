import styles from "./Logo.module.scss";
import { ROUTER_KEYS } from "../../const/app-keys.const";

export const Logo = () => {
  return (
    <a href={ROUTER_KEYS.ROOT}>
      <span className={styles.logo}>
      <span>Piz</span>
      <span>zaSt</span>
      <span>yle</span>
    </span>
    </a>


  );
};
