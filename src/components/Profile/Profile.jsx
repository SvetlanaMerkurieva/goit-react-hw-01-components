import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
   return (
      <div className={s.profile}>
         <div className={s.description}>
            <img src={avatar} alt="User avatar" className={s.avatar} />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
         </div>
         <ul className={s.stats}>
            <li className={s.list}>
               <span>Followers</span>
               <span>{stats.followers}</span>
            </li>
            <li className={s.list}>
               <span>Views</span>
               <span>{stats.views}</span>
            </li>
            <li className={s.list}>
               <span>Likes</span>
               <span>{stats.likes}</span>
            </li>
         </ul>
      </div>
   );
};
Profile.propTypes = {
   username: PropTypes.string,
   tag: PropTypes.string,
   location: PropTypes.string,
   avatar: PropTypes.string,
   stats: PropTypes.object,
};
