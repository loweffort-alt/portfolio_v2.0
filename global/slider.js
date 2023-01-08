const slider = document.querySelector(".Slider");
const gridContainer = document.querySelector(".gridContainer");
const nav_option = [].slice.call(slider.children);

function changeScreen(length, e, i) {
  if (window.screen.width <= 400) {
    gridContainer.style.transform = `translate(0%, ${length}%)`;
  } else {
    gridContainer.style.transform = `translate(${length}%, -50%)`;
  }
  gridContainer.style.setProperty("transition", "transform 1s ease-in-out");
  nav_option.map((e) => e.classList.remove("current-slider"));
  e.target.classList.add("current-slider");
}

nav_option.map((e, i) => {
  const length = -100 * i;
  e.addEventListener("click", (e) => changeScreen(length, e, i));
});

export default nav_option;
