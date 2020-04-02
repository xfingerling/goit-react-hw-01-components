import React from "react";
import PropTypes from "prop-types";

import styles from "./Status.module.css";

const Status = ({ isOnline }) =>
  isOnline ? (
    <span className={styles.online}></span>
  ) : (
    <span className={styles.offline}></span>
  );

Status.propsTypes = {
  isOnline: PropTypes.bool,
};

export default Status;
