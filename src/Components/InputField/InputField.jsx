import React from 'react';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

import { useState } from 'react';

function InputField({addLink}) {
  const [text, setText] = useState('')

  const handleTextChange = ({target}) => setText(target.value) 
  const handleSubmit = (event) => {
    event.preventDefault()
    text && addLink(text)
    setText('');
  }
  return (
    <form className="rounded-lg relative flex  justify-center bg-very-dark-blue  md:p-12 mb-6" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-lg mr-4 w-full"
        type="text"
        placeholder="Shorten a link here..."
        value={text}
        onChange={handleTextChange}
      />
      <Button roundBorder={false} type="submit">
        Shorten it!
      </Button>
    </form>
  );
}

export default InputField;
