import React from "react";
import { render } from "react-dom";

import "./index.css";

// DATA
import user from "./database/user.json";
import statisticalData from "./database/statistical-data.json";
import friends from "./database/friends.json";
import transactions from "./database/transactions.json";

// COMPONENTS
import UserProfile from "./components/UserProfile/UserProfile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => (
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

render(<App />, document.getElementById("root"));
