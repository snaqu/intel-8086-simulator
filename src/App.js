import React, { useState } from 'react'

import Registers from './components/Registers';
import Commands from './components/Commands';

import {
  moveParameters,
  addSubParameters,
} from './utils/parametersSet';

const App = () => {
  const [ax, setAx] = useState('');
  const [bx, setBx] = useState('');
  const [cx, setCx] = useState('');
  const [dx, setDx] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (ax === '' || bx === '' || cx === '' || dx === '') {
      return alert('Complete all text fields in the register');
    }

    const data = new FormData(e.target);
    const setters = { setAx, setBx, setCx, setDx };
    const getters = { ax, bx, cx, dx};

    switch (data.get('command')) {
      case 'MOV':
         return moveParameters(data, setters, getters);      
    
      case 'ADD': 
        return addSubParameters(data, setters, getters);
      
      case 'SUB': 
        return addSubParameters(data, setters, getters, true);
      
      default:
        break;
    }
  };
 
  return (
    <div className="container mx-auto px-4">
      <div className="flex mb-4">
        <div className="w-1/2 mx-2">
          <Commands
            ax={ax}
            bx={bx}
            cx={cx}
            dx={dx}
            setAx={setAx}
            setBx={setBx}
            setCx={setCx}
            setDx={setDx}
          />
        </div>
        <div className="w-1/2 mx-2">
          <Registers 
            onSubmit={onSubmit} 
          />
        </div>
      </div>
    </div>
  )
}

export default App;
