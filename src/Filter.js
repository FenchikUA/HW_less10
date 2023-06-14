import React, { useState } from 'react'

const Filter = ({ onFilterChange }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onFilterChange(inputValue);
  };
  return (
    <div className='counris-filter'>
      <input type="text" placeholder='ENTER COUNTRY' value={value} onChange={handleChange} />
    </div>
  )
}

export default Filter
