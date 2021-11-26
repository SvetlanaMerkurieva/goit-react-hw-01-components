export const FriendList = () => {
    return (
        <ul class="friend-list">
            <FriendListItem />
        </ul>
    )
}

const FriendListItem = (friends) => {
    return (
        {friends.map(friend => (
            <li class="item">
                <span class="status"></span>
                <img class="avatar" src="" alt="User avatar" width="48" />
                <p class="name"></p>
            </li>
        ))}
    )
}