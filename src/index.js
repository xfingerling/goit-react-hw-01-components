import React, { Component } from "react";
import { render } from "react-dom";

import "./index.module.css";

// DATA
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

// COMPONENTS
import UserProfile from "./components/UserProfile/UserProfile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

class App extends Component {
  render() {
    return (
      <>
        <UserProfile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
