import styles from './Header.module.scss';
import { MainMenu } from '../../../navigation/MainMenu';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MainMenu />
    </header>

  );
}
