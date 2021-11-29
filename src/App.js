import './App.css';
import {Profile} from './profile/Profile';
import {Statistics} from './statistics/Statistics';
import {FriendList} from './friends/FriendList';
import {Transactions} from './transactions/TransactionHistory';


function App() {
  /*const task1 = document.querySelector(".App-task1");
  const task2 = document.querySelector(".App-task2");
  const task3 = document.querySelector(".App-task3");
  const task4 = document.querySelector(".App-task4");

  task1.addEventListener("click",  <Profile />);
  task2.addEventListener("click",  <Statistics />);
  task3.addEventListener("click",  <FriendList />);
  task4.addEventListener("click",  <Transactions />);*/

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Homework № 1
        </p>
        <ul>
          <li className="App-task1">Профиль социальной сети</li>
          <Profile />
          <li className="App-task2">Секция статистики</li>
          <Statistics />
          <li className="App-task3">Список друзей</li>
          <FriendList />
          <li className="App-task4">История транзакций</li>
          <Transactions />
        </ul>
      </header>
    </div>
  )
}

export default App;
