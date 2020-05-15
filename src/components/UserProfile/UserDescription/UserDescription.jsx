import React from "react";
import PropTypes from "prop-types";

import styles from "./UserDescription.module.css";

const UserDescription = ({ name, tag, avatar, location }) => (
  <div className={styles.description}>
    <div>
      <img
        className={styles.avatar}
        src={avatar}
        alt="user avatar"
        width="128"
        height="128"
      />
    </div>
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

UserDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserDescription;
