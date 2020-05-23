import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Forms/Input';

const Commands = ({ chartOfRegisters }) => (
  <>
    <h3 className="my-5">Registers</h3>
    {chartOfRegisters.map(({ label, value, onChange }) => (
      <Input
        key={label}
        label={label}
        value={value}
        onChange={onChange}
      />
    ))}
  </>
);

Commands.propTypes = {
  chartOfRegisters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onChange: PropTypes.func,
    })
  ),
}

export default Commands
