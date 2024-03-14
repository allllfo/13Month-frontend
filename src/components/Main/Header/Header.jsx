import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-start h-30 w-full">
        <img
          src="src/assets/images/cloud.png"
          className="w-12 h-12 ml-4 mr-2"
        ></img>
        <p className="font-semibold text-2xl">13월</p>
      </div>
    </div>
  );
}
