import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Forms/Input';

const Registers = ({
  ax,
  bx,
  cx,
  dx,
  setAx, 
  setBx,
  setCx,
  setDx,
}) => {

  return (
    <>
      <h3 className="my-5">Rejestry</h3>
      <Input 
        label="AX"
        value={ax}
        onChange={setAx}
      />
      <Input 
        label="BX"
        value={bx}
        onChange={setBx}
      />
      <Input 
        label="CX"
        value={cx}
        onChange={setCx}
      />
      <Input 
        label="DX"
        value={dx}
        onChange={setDx}
      />
    </>
  )
}

Registers.propTypes = {
  ax: PropTypes.string.isRequired,
  bx: PropTypes.string.isRequired,
  cx: PropTypes.string.isRequired,
  dx: PropTypes.string.isRequired,
  setAx: PropTypes.func.isRequired,
  setBx: PropTypes.func.isRequired,
  setCx: PropTypes.func.isRequired,
  setDx: PropTypes.func.isRequired,
}

export default Registers
