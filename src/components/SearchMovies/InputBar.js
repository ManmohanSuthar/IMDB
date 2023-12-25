import React, { useState } from 'react';

const InputBar = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // Pass the updated value back to the parent component or handler function
    onInputChange(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputBar;
