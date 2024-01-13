import React from 'react';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

function InputField() {
  return (
    <div className="rounded-lg flex justify-center bg-very-dark-blue p-8 mb-6">
      <input
        className="p-2 rounded-lg mr-4"
        type="text"
        placeholder="Shorten a link here..."
      />
      <Button roundBorder={false}>Shorten it!</Button>
    </div>
  );
}

export default InputField;
