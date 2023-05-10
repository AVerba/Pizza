import styles from "./CommonButton.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

export const CommonButton = ({ type, handleClick, title, className }) => {
  const btnType = type !== undefined ? type : "button";
  const classList = cx(styles._btn, className);

  return <button className={classList} type={btnType} onClick={handleClick}>{title}</button>;
};

CommonButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
