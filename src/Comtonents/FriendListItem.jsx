import clsx from "clsx";
import css from "./FriendListItem.module.css";
function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className="item">
      <span
        className={clsx(css["status"], {
          [css.true]: isOnline,
          [css.false]: !isOnline,
        })}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
export default FriendListItem;
