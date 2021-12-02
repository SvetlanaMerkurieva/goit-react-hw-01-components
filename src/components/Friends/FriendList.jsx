import { FriendsListItem } from './FriendsListItem/FriendsListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
   return (
      <ul className={s.list}>
         {friends.map(friend => {
            return <FriendsListItem {...friend} key={friend.id} />;
         })}
      </ul>
   );
};
