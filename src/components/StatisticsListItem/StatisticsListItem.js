import React from "react";
import PropTypes from "prop-types";

import styles from "./StatisticsListItem.module.css";

const StatisticsListItem = ({ statsItem }) => (
  <li className={styles.listItem}>
    <span className={styles.label}>{statsItem.label}</span>
    <span>{statsItem.percentage}%</span>
  </li>
);

StatisticsListItem.propTypes = {
  statsItem: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default StatisticsListItem;
