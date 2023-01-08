import Layout from "./layout.js";

const Expertise = document.querySelector("#Expertise");
Expertise.innerHTML = Layout();

const svgFront = document.querySelector(".frontend svg");
const svgBack = document.querySelector(".backend svg");

//let wea = true;

function checkColor(wea = false) {
  wea = !wea;
  if (wea) {
    svgBack.style.setProperty("filter", "blur(0.5px) grayscale(70%)");
    svgFront.style.setProperty("filter", "none");
  } else {
    svgFront.style.setProperty("filter", "blur(0.5px) grayscale(70%)");
    svgBack.style.setProperty("filter", "none");
  }
}

svgBack.addEventListener("click", () => {
  checkColor(true);
});
svgFront.addEventListener("click", () => {
  checkColor(false);
});

export default Expertise;
