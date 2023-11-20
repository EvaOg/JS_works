function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const btn = document.querySelector(".btn");
btn.style.left = "50%";
btn.style.top = "50%";

btn.addEventListener("mouseenter", () => {
  btn.style.left = `${getRandomInteger(10, 90)}%`;
  btn.style.top = `${getRandomInteger(5, 95)}%`;
});
