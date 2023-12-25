import React, { useState } from 'react';
import InputBar from './InputBar';

const ParentComponent = () => {
  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    // Handle the input change here in the parent component
    setText(value);
  };

  return (
    <div>
      <h1>Input Bar Example</h1>
      <InputBar onInputChange={handleInputChange} />
      <p>Input value: {text}</p>
    </div>
  );
};

export default ParentComponent;
