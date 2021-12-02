import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css';

export const FriendsListItem = ({ isOnline, avatar, name }) => {
   return (
      <li className={s.item}>
         <span
            className={isOnline === true ? s.statusIsOnline : s.statusIsOffline}
         />
         <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={s.name}>{name}</p>
      </li>
   );
};

FriendsListItem.propTypes = {
   avatar: PropTypes.string,
   name: PropTypes.string,
   isOnline: PropTypes.bool,
};
