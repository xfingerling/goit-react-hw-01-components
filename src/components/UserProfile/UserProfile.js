import React from "react";
import PropTypes from "prop-types";

import styles from "./UserProfile.module.css";

import UserDescription from "./UserDescription/UserDescription";
import UserStats from "./UserStats/UserStats";

const UserProfile = ({ stats, ...props }) => {
  return (
    <div className={styles.profile}>
      <UserDescription {...props} />
      <UserStats stats={stats} />
    </div>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default UserProfile;
