import user from './user.json';
import styles from './Profile.module.css';

export const Profile = () => {
    return (
    <div className={styles.Profile}>
        <div className={styles.description}>
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
                <span class="label">Followers</span>
                <span class="quantity">{user.stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{user.stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{user.stats.likes}</span>
            </li>
        </ul>
        </div>
    );
};