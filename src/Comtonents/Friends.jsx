import FriendListItem from "./FriendListItem";
function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name} />
      ))}
    </ul>
  );
}
export default Friends;
