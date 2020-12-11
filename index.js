const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorGen = null;

function changeColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}
refs.start.addEventListener("click", (event) => {
  colorGen = setInterval(changeColor, 1000);
  event.target.disabled = true;
});
refs.stop.addEventListener("click", () => {
  clearInterval(colorGen);
  refs.start.disabled = false;
});
