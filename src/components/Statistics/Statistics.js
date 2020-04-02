import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

import StatisticsTitle from "../StatisticsTitle/StatisticsTitle";
import StatisticsList from "../StatisticsList/StatisticsList";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <StatisticsTitle title={title} />
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

export default Statistics;
