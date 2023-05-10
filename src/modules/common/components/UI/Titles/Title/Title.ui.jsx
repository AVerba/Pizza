import styles from "./Title.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

export const Title = ({ tagType, className, title }) => {
  const Tag = tagType;
  const classList = cx(styles.title, className);


  return <Tag className={classList}>{title}</Tag>;
};

Title.propTypes = {
  className: PropTypes.string,
  tagType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
