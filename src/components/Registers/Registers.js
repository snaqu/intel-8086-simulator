import React, { useState } from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames';

import { commandOptions, paramsOptions } from '../../utils/selectOptions';
import Select from '../Forms/Select';


const Registers = ({ onSubmit }) => {
  const [command, setCommand] = useState('MOV');
  const [firstParam, setFirstParam] = useState('CX');
  const [secondParam, setSecondParam] = useState('BX');

  return (
    <form onSubmit={onSubmit}>
      <h3 className="my-5">Commands</h3>
      <Select
        value={command}
        label="Command"
        name="command"
        onChange={setCommand}
        options={commandOptions}
      />
      <Select
        value={firstParam}
        label="Parameter 1"
        name="param1"
        onChange={setFirstParam}
        options={paramsOptions}
      />
      <Select
        value={secondParam}
        label="Parameter 2"
        name="param2"
        onChange={setSecondParam}
        options={paramsOptions}
      />
      <button
        disabled={firstParam === secondParam}
        type="submit"
        className={cx("bg-transparent mt-6 w-full text-blue-700 font-semibold py-3 px-4 border border-blue-500 rounded", {
          "cursor-not-allowed opacity-50": firstParam === secondParam,
        })}
      >
        Submit
      </button>
    </form>
  )
};

Registers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Registers
