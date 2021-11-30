import './App.css';
import {Profile} from './profile/Profile';
import data from './statistics/data.json';
import {Statistics} from './statistics/Statistics';
import {FriendList} from './friends/FriendList';
import {Transactions} from './transactions/TransactionHistory';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Homework № 1
        </p>
        <ul className="App-list">
          <li className="App-task">Профиль социальной сети</li>
          <Profile />
          <li className="App-task">Секция статистики</li>
          <Statistics title="Unload stats" stats={data} />
          <Statistics stats={data} />
          <li className="App-task">Список друзей</li>
          <FriendList />
          <li className="App-task">История транзакций</li>
          <Transactions />
        </ul>
      </header>
    </div>
  )
}


