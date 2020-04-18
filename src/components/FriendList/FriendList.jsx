import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends = [] }) => {
  const listItem = friends.map(({ id, name, avatar, isOnline }) => {
    return (
      <FriendListItem
        key={id}
        name={name}
        avatar={avatar}
        isOnline={isOnline}
      />
    );
  });

  return <ul className={styles.list}>{listItem}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
