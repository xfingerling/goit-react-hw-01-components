import React from "react";
import PropTypes from "prop-types";

import styles from "./StatisticsList.module.css";

import StatisticsListItem from "../StatisticsListItem/StatisticsListItem";

const StatisticsList = ({ stats }) => {
  const listItem = stats.map((el) => (
    <StatisticsListItem key={el.id} statsItem={el} />
  ));

  return <ul className={styles.list}>{listItem}</ul>;
};

StatisticsList.defaultProps = {
  stats: [],
};

StatisticsList.propTypes = {
  statsItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default StatisticsList;
