import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Timer from './Timer';
import { useState } from 'react';
import TextInput from './State';
import TimerComponent from './Effect'; 

function App() {

  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      <div className='black-bg'>
        <h3>멋쟁이사자처럼</h3>
      </div>
      <div>
        {showTimer &&<Timer></Timer>}
        <button onClick={()=>setShowTimer(!showTimer)}>타이머 열기 / 닫기 </button>
      </div>
      <div>
        <TextInput/>
      </div>
      <div>
        <TimerComponent/>
      </div>
    </div>
  );
}

export default App;
