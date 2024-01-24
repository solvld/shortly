import React from 'react';
import Button from '../Button/Button';

function LinkCard({ children, shortLink }) {
  return (
    <div className="flex py-4 px-8 bg-slate-300 mb-4 rounded-lg justify-between items-center">
      <p>{children}</p>
      <div>
        <a href={`/${shortLink}`}className="mr-4">
          {shortLink}
        </a>
        <Button roundBorder={false}>Copy</Button>
      </div>
    </div>
  );
}

export default LinkCard;
