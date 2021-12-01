import PropTypes from 'prop-types';
import friends from './friends.json';
import styles from './FriendList.module.css';

export const FriendList = () => {
    return (
        <ul className={styles.List}>
            <FriendListItem />
        </ul>
    )
}
const FriendListItem = () => {
    return (
        <>
            {friends.map(friend => (
                <div key={friend.id} className={styles.Card}>
                    <li className={styles.Item}>
                        <span className={friend.isOnline === true ? styles.StatusIsOnline : styles.StatusIsOffline}></span>
                        <img className={styles.Avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={styles.Name}>{friend.name}</p>
                    </li>
                </div>
            ))}
        </>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}