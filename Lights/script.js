const lights = document.querySelectorAll(".light");
const startBtn = document.querySelector("button.start");
const stopBtn = document.querySelector("button.stop");

const colors = [
  "#987284",
  "#9DBF9E",
  "#D0D6B5",
  "#F9B5AC",
  "#EE7674",
  "#619462",
];

var intervalFunction; // global scope

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

startBtn.addEventListener("click", () => {
  // clear previous intervals
  clearInterval(intervalFunction);

  // create new interval
  intervalFunction = setInterval(() => {
    let max = colors.length;
    for (let i = 0; i < lights.length; i++) {
      //lights[i].style.backgroundColor = colors[getRandomInt(0, max)];
      // change the color variable in CSS for both element and its pseudo ::before element
      lights[i].style.setProperty(
        "--color-light",
        colors[getRandomInt(0, max)]
      );
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalFunction);
  for (let j = 0; j < lights.length; j++) {
    //lights[j].style.backgroundColor = "#d4c4cc";
    // change the color variable in CSS for both element and its pseudo ::before element
    lights[j].style.setProperty("--color-light", "#d4c4cc");
  }
});
