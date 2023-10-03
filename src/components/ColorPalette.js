import React, { useState } from 'react';


function ColorPalette() {
  const initialColors = ["#000", "pink", "red", "white", "yellow"];
  const [colors, setColors] = useState(initialColors);

  const randomizeColors = () => {
    const newColors = initialColors.map(() => {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      return `#${color}`;
    });
    setColors(newColors);
  };

  return (
    <div className="max-h-full justify-center flex items-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {colors.map((color, index) => (
          <div className="" style={{}}>
            <div
              key={index}
              style={{
                backgroundColor: color,
              }}
              className="h-[15vh] grid place-content-center w-[100vw] lg:w-[20vw] lg:h-[80vh]"
            >
              <div className="lg:hidden text-xl text-black">{color}</div>
            </div>
            <div className="lg:grid hidden place-content-center text-xl text-black">
              {color}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={randomizeColors}
        className="bg-slate-700 text-white mt-2 p-2 rounded-md hover:bg-slate-300 hover:text-black mt-5"
      >
        Random Color
      </button>
    </div>
  );
}

export default ColorPalette;
