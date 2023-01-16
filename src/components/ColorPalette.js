function ColorPalette() {

function change() {
  var color = Math.floor(Math.random() * 16777215).toString(16);
  var hexcolor = "#" + color;
  document.getElementById("radomcolorgenerator").style.backgroundColor =
    hexcolor;

  var color = Math.floor(Math.random() * 16777215).toString(16);
  var hexcolor = "#" + color;
  document.getElementById("radomcolorgenerator2").style.backgroundColor =
    hexcolor;

  var color = Math.floor(Math.random() * 16777215).toString(16);
  var hexcolor = "#" + color;
  document.getElementById("radomcolorgenerator3").style.backgroundColor =
    hexcolor;

  var color = Math.floor(Math.random() * 16777215).toString(16);
  var hexcolor = "#" + color;
  document.getElementById("radomcolorgenerator4").style.backgroundColor =
    hexcolor;

  var color = Math.floor(Math.random() * 16777215).toString(16);
  var hexcolor = "#" + color;
  document.getElementById("radomcolorgenerator5").style.backgroundColor =
    hexcolor;
}
return (
  <div className="max-h-full justify-center flex items-center flex-col gap-2">
    <div className="flex items-center main-container">
      <div
        id="radomcolorgenerator"
        style={{
          backgroundColor: "black",
        }}
      ></div>
      <div
        id="radomcolorgenerator2"
        style={{
          backgroundColor: "pink",
        }}
      ></div>
      <div
        id="radomcolorgenerator3"
        style={{
          backgroundColor: "red",
        }}
      ></div>
      <div
        id="radomcolorgenerator4"
        style={{
          backgroundColor: "white",
        }}
      ></div>
      <div
        id="radomcolorgenerator5"
        style={{
          backgroundColor: "yellow",
        }}
      ></div>
    </div>
    <button
      onClickCapture={change}
      className="bg-slate-700 text-white p-2  rounded-md hover:bg-slate-300 hover:text-black"
    >
      Random Color
    </button>
  </div>
);
}

export default ColorPalette;
