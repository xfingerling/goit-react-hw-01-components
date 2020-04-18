import React from "react";
import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

import TransactionHistoryRow from "./TransactionHistoryRow/TransactionHistoryRow";

const TransactionHistory = ({ items }) => {
  const listItems = items.map((el) => (
    <TransactionHistoryRow key={el.id} item={el} />
  ));

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.head}>Type</th>
          <th className={styles.head}>Amount</th>
          <th className={styles.head}>Currency</th>
        </tr>
      </thead>

      <tbody>{listItems}</tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  item: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default TransactionHistory;
