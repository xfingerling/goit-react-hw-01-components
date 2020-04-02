import React from "react";
import PropTypes from "prop-types";

import styles from "./TransactionHistoryRow.module.css";

const TransactionHistoryRow = ({ items }) => {
  const { type, amount, currency } = items;

  return (
    <tr>
      <td className={styles.cell}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
};

TransactionHistoryRow.propTypes = {
  items: PropTypes.objectOf(PropTypes.string),
};

export default TransactionHistoryRow;
