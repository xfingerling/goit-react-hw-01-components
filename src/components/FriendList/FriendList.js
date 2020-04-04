import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "../FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const listItem = friends.map((friend) => {
    return (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    );
  });

  return <ul className={styles.list}>{listItem}</ul>;
};

FriendList.defaultProps = {
  friends: [],
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
