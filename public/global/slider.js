const slider = document.querySelector(".Slider");
const gridContainer = document.querySelector(".gridContainer");
const nav_option = [].slice.call(slider.children);

function changeScreen(axisXEnd, e, i) {
  gridContainer.style.transform = `translate(${axisXEnd}, -50%)`;
  gridContainer.style.setProperty("transition", "transform 1s ease-in-out");
  nav_option.map((e) => e.classList.remove("current-slider"));
  e.target.classList.add("current-slider");
}

nav_option.map((e, i) => {
  const axisXEnd = `-${100 * i}%`;
  e.addEventListener("click", (e) => changeScreen(axisXEnd, e, i));
});

export default nav_option;
