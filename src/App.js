
import { useState } from 'react';
import './App.css';
import Finish from './components/Finish';
import Main from './components/Main';


function App() {

  const [gameScreen, setGameScreen] = useState("start");

  const restartGame = () => {
    setGameScreen("start");
  };

  return (
     <div>
      <div className="App">  
        <Main onRestart={restartGame} />
        {gameScreen === "finish" && <Finish onRestart={restartGame} />}
      </div>
    </div>
  );
}

export default App;
