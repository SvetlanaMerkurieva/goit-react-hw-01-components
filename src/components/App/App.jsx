import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { Transactions } from '../Transactions/Transactions';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h1>React Homework № 1</h1>
        <h2 className={s.title}>Профиль социальной сети</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h2 className={s.title}>Секция статистики</h2>
        <Statistics title="Unload stats" stats={data} />
        <Statistics stats={data} />
        <h2 className={s.title}>Список друзей</h2>
        <FriendList friends={friends} />
        <h2 className={s.title}>История транзакций</h2>
        <Transactions items={transactions} />
      </header>
    </div>
  );
}
