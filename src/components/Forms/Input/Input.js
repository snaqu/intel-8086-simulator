import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, value, onChange }) => {
  return (
    <div className="w-full md:w-full mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
        type="text"
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
