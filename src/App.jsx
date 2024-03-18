import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import './App.css'
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import transactions from "../src/transactions.json";

export default function App() {
  return (
    <>
      <p className="title">Profile</p>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      <p className="title">FriendList</p>
      <FriendList friends={friends} />
      <p className="title">Transaction</p>
      <TransactionHistory items={transactions} />
    </>
  );
}
