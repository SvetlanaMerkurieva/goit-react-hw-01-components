import './App.css';
import {Profile} from './profile/Profile';
import {Statistics} from './statistics/Statistics';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Homework № 1
        </p>
        <ul>
          <li className="App-task">Профиль социальной сети</li>
            <Profile />
          <li className="App-task">Секция статистики</li>
            <Statistics />
          <li className="App-task">Список друзей</li>
          <li className="App-task">История транзакций</li>
        </ul>
      </header>
    </div>
  )
}

export default App;
