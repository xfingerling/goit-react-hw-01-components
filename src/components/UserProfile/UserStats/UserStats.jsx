import React from "react";
import PropTypes from "prop-types";

import styles from "./UserStats.module.css";

const UserStats = ({ stats: { followers, views, likes } }) => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
);

UserStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default UserStats;
