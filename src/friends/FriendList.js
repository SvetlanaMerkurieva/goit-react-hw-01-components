import friends from './friends.json';
import styles from './FriendList.modules.css';

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
                <li className={styles.Item}>
                    <span className={styles.Status}>{friend.isOnline}</span>
                    <img className={styles.Avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={styles.Name}>{friend.name}</p>
                </li>
            ))}
        </>
    )
}