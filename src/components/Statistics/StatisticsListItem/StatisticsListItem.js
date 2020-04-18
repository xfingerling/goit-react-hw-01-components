import React from "react";
import PropTypes from "prop-types";

import styles from "./StatisticsListItem.module.css";

const StatisticsListItem = ({ statsItem }) => {
  const { percentage, label } = statsItem;

  return (
    <li className={styles.listItem}>
      <span className={styles.label}>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  statsItem: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default StatisticsListItem;
