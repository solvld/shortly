import React from 'react';
import Button from '../Button/Button';

function LinkCard({ children }) {
  return (
    <div className="flex py-4 px-8 bg-slate-300 mb-4 rounded-lg justify-between items-center">
      <p>{children}</p>
      <div className="">
        <a href="http://" className="mr-4">
          short.link
        </a>
        <Button roundBorder={false}>Copy</Button>
      </div>
    </div>
  );
}

export default LinkCard;
