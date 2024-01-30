import ControlQ from './components/ControlQ';
import ControlShiftQ from './components/ControlShiftQ';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [keys, setState] = useState(0)
  const handleKeyPress = (e)=>{
    console.log(e.key)
    console.log(e.shiftKey)
    console.log(e.ctrlKey)
    if(e.shiftKey && e.ctrlKey && e.key.toLowerCase() === 'q'){
      setState(2)
    }
    else if(e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === 'q'){
      setState(1)
    }
  }
  console.log(keys)

  useEffect(()=>{
    
    document.addEventListener('keydown', handleKeyPress)

    return ()=>{
      document.removeEventListener('keydown', handleKeyPress)
    }
  },[])

  return (
    <div className="App">
      {keys === 1 ? <ControlQ />:null}
      {keys === 2 ? <ControlShiftQ />:null}
    </div>
  );
}

export default App;
