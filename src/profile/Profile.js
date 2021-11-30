/*import PropTypes from 'prop-types';*/
import user from './user.json';
import styles from './Profile.module.css';

export const Profile = () => {
    return (
    <div className={styles.Profile}>
        <div className={styles.Description}>
            <img 
            src= {user.avatar}
            alt="User avatar"
            className={styles.Avatar}
            />
            <p className={styles.Name}>{user.username}</p>
            <p className={styles.Tag}>{user.tag}</p>
            <p className={styles.Location}>{user.location}</p>
        </div>
        <ul className={styles.Stats}>
            <li className={styles.List}>
                <span className="label">Followers</span>
                <span className="quantity">{user.stats.followers}</span>
            </li>
            <li className={styles.List}>
                <span className="label">Views</span>
                <span className="quantity">{user.stats.views}</span>
            </li>
            <li className={styles.List}>
                <span className="label">Likes</span>
                <span className="quantity">{user.stats.likes}</span>
            </li>
        </ul>
        </div>
    );
};
/*Profile.propTypes = {

}*/