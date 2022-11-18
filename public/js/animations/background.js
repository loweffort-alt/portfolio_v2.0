const background = document.getElementById("globalContainer");
const random = document.querySelector("html");
let color = [115, 61, 61];
let suma = true;
let resta = false;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//random.style.setProperty("--hola", `${rgbToHex(r, g, b)}`);

//function changeColor(value) {
//console.log(value);
//if (value == 115) {
//resta = true;
//suma = false;
//}
//if (value > 60 && suma) {
//value++;
//}
//if (value <= 115 && resta) {
//value--;
//}
//if (value == 61) {
//resta = false;
//suma = true;
//}
////setTimeout(changeColor, 100);
//}

function changeColor() {
  const weon = color.map((e) => {
    if (e == 115) {
      resta = true;
      suma = false;
    }
    if (e <= 115 && resta) {
      return e--;
    }
    if (e == 61) {
      resta = false;
      suma = true;
    }
    if (e >= 61 && suma) {
      return e++;
    }
  });
}

for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(function () {
      if (e == 115) {
        resta = true;
        suma = false;
      }
      if (e <= 115 && resta) {
        return e--;
      }
      if (e == 61) {
        resta = false;
        suma = true;
      }
      if (e >= 61 && suma) {
        return e++;
      }
    }, i * 5000);
  })(i);
}

export default changeColor();
