'use client'
import React from 'react';

function KeyboardEventHandler() {
  const handleKeyDown = (event:React.KeyboardEvent<HTMLDivElement>) => {
    // Your code to handle key events goes here
    console.log('Key pressed:', event.key);
  };

  return (
    <div>
      <p>Press a key:</p>
      <div
        onKeyDown={handleKeyDown}
        tabIndex={0}
        style={{ outline: 'none' }} // Remove the default focus outline
        className='bg-red-600 h-52 w-52'
      >
        {/* Content that can receive keyboard focus */}
      </div>
    </div>
  );
}

export default KeyboardEventHandler;

