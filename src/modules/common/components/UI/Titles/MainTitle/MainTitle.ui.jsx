import styles from "./MainTitle.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

export const MainTitle = ({ className, title }) => {
  const classList = cx(styles.mainTitle, className);

  return <h1 className={classList}>{title}</h1>;
};

MainTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
