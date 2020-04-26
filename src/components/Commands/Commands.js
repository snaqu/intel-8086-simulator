import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Forms/Input';

const Commands = ({
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
      <h3 className="my-5">Registers</h3>
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

Commands.propTypes = {
  ax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAx: PropTypes.func.isRequired,
  setBx: PropTypes.func.isRequired,
  setCx: PropTypes.func.isRequired,
  setDx: PropTypes.func.isRequired,
}

export default Commands
