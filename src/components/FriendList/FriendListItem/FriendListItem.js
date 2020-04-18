import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

import Status from "../Status/Status";

const FriendListItem = ({ name, avatar, isOnline }) => (
  <li className={styles.listItem}>
    <Status isOnline={isOnline} />
    <img className={styles.avatar} src={avatar} alt={name} />
    <p>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
