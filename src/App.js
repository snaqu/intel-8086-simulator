import React, { useState } from 'react'

import Registers from './components/Registers';
import Commands from './components/Commands';

const moveParameters = (form, setters, getters) => {
  const mappedOptions = {
    AX: 'setAx',
    BX: 'setBx',
    CX: 'setCx',
    DX: 'setDx',
  };
  
  const firstParam = form.get('param1');
  const secondParam = form.get('param2');
  
  // wartość z pola 1 jest przepisywana do pola 2
  // wartość z pola 1 wtedy znika

  const pickedFirstParam = mappedOptions[firstParam];
  const pickedSecondParam = mappedOptions[secondParam];
  
  setters[pickedFirstParam](getters[secondParam.toLowerCase()]);
  setters[pickedSecondParam](getters[firstParam.toLowerCase()]);
};

const App = () => {
  const [ax, setAx] = useState('');
  const [bx, setBx] = useState('');
  const [cx, setCx] = useState('');
  const [dx, setDx] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const setters = { setAx, setBx, setCx, setDx };
    const getters = { ax, bx, cx, dx};

    switch (data.get('command')) {
      case 'MOV':
         return moveParameters(data, setters, getters);     
    
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
