const globalContainer = document.querySelector("#globalContainer");
let value = 61;
let suma = true;
let resta = false;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(arr) {
  const hexcolor =
    "#" +
    componentToHex(arr[0]) +
    componentToHex(arr[1]) +
    componentToHex(arr[2]);
  const wea = `linear-gradient(
    285.18deg,
    #000000 0%,
    ${hexcolor} 50%,
    #000000 100%
  )`;
  return wea;
}

function changeNumber() {
  let color = [0, value - 40, 61];
  let pato = rgbToHex(color);
  //globalContainer.style.setProperty("--background", pato);
  if (value == 115) {
    resta = true;
    suma = false;
  }
  if (value > 60 && suma) {
    value = value + 1;
  }
  if (value <= 115 && resta) {
    value = value - 1;
  }
  if (value == 61) {
    resta = false;
    suma = true;
  }
}

const dinamicColor = setInterval(changeNumber, 100);

export default dinamicColor;
