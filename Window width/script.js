let bodyWidth = document.body.clientWidth;
let body = document.getElementsByTagName("body");
let btn = document.querySelector(".btn");
btn.innerHTML = `This window width is ${bodyWidth} px`;

window.addEventListener("resize", onResize);

function onResize() {
  bodyWidth = document.body.clientWidth;
  let text = `This window width is ${bodyWidth} px`;
  btn.innerHTML = text;
  return text;
}

module.exports = onResize;
