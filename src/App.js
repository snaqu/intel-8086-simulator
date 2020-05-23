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

    const registers = [ax, bx, cx, dx];

    if (registers.some((item) => item === '')) {
      return alert('Complete all text fields in the register');
    }

    if (registers.some((item) => !/\b[01]+\b/.test(item))) {
      return alert('Incorrect field format. Use binary code');
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

  const chartOfRegisters = [
    { label: 'AX', value: ax, onChange: setAx },
    { label: 'BX', value: bx, onChange: setBx },
    { label: 'CX', value: cx, onChange: setCx },
    { label: 'DX', value: dx, onChange: setDx },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex mb-4">
        <div className="w-1/2 mx-2">
          <Commands chartOfRegisters={chartOfRegisters} />
        </div>
        <div className="w-1/2 mx-2">
          <Registers onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default App;
