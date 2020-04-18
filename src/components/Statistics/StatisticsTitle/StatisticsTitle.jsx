import React from "react";
import PropTypes from "prop-types";

import styles from "./StatisticsTitle.module.css";

const StatisticsTitle = ({ title }) =>
  !!title.length && <h2 className={styles.title}>{title}</h2>;

StatisticsTitle.defaultProps = {
  title: "",
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
