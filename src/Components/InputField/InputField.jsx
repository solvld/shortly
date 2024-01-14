import React from 'react';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

function InputField() {
  return (
    <form className="rounded-lg relative flex justify-center bg-very-dark-blue p-12 mb-6">
      <input
        className="p-2 rounded-lg mr-4 w-full"
        type="text"
        placeholder="Shorten a link here..."
      />
      <Button roundBorder={false}>Shorten it!</Button>
    </form>
  );
}

export default InputField;
