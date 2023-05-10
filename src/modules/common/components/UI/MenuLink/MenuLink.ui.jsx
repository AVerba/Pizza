import styles from "./MenuLink.moddule.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import { Container } from "../../Container";

export const MenuLink = ({ path, className, activeClassName, title, children }) => {
  const classList = cx(styles.link, className);
  const activeClassList = cx(styles.activeLink, activeClassName);

  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? classList : isActive ? activeClassList : classList
      }
      to={path}>
      {title}
      {children}
    </NavLink>
  );
};
MenuLink.propTypes = {
  className: PropTypes.string,
  activeClassName:PropTypes.string,
  title:PropTypes.string.isRequired,
  path:PropTypes.string.isRequired,
  children: PropTypes.node
};
