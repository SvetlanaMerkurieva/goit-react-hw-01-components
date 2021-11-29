import friends from './friends.json';

export const FriendList = () => {
    return (
        <ul class="friend-list">
            <FriendListItem />
        </ul>
    )
}

const FriendListItem = () => {
    return (
        <div>
            {friends.map(friend => (
                <li className="item">
                    <span className="status">{friend.isOnline}</span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </div>
    )
}