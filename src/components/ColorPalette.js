import React, { useState } from 'react';

function ColorPalette() {
  const initialColors = ['#000', 'pink', 'red', 'white', 'yellow'];
  const [colors, setColors] = useState(initialColors);

  const randomizeColors = () => {
    const newColors = initialColors.map(() => {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      return `#${color}`;
    });
    setColors(newColors);
  };

  return (
    <div className="max-h-full justify-center flex items-center flex-col gap-2">
      <div className="flex items-center main-container">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
            }}
            className="color-box"
          ></div>
        ))}
      </div>
      <button
        onClick={randomizeColors}
        className="bg-slate-700 text-white mt-2 p-2 rounded-md hover:bg-slate-300 hover:text-black"
      >
        Random Color
      </button>
    </div>
  );
}

export default ColorPalette;
