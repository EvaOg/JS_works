const dragContainer = document.querySelector("#dragContainer");
const square = document.querySelector(".square");
const penguinResultDiv = document.querySelector(".penguin");
const catResultDiv = document.querySelector(".cat");
const owlResultDiv = document.querySelector(".owl");
const targetContainers = document.querySelectorAll(".targetContainer");
const textPenguin = document.querySelector(".textPenguin");
const textCat = document.querySelector(".textCat");
const textOwl = document.querySelector(".textOwl");
const item = document.querySelector("#item");

square.addEventListener("dragstart", dragStart);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  item.style.opacity = "0";
}

targetContainers.forEach((target) => {
  target.addEventListener("dragenter", dragEnter);
  target.addEventListener("dragover", dragOver);
  target.addEventListener("dragleave", dragLeave);
  target.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  // e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");
  const id = e.dataTransfer.getData("text/plain");

  // add it to the drop target
  e.target.appendChild(square);
}

//////penguin//////////////////
let penguinPng = document.createElement("img");

function penguinAppear(e) {
  penguinPng.src =
    "https://github.com/EvaOg/Simple-js-works/blob/main/drag_n_drop/penguin.png?raw=true";
  penguinPng.setAttribute("id", "penguinPng");
  penguinResultDiv.appendChild(penguinPng);

  square.setAttribute("id", "stickDisappear");
  textPenguin.style.opacity = "0";
}

function penguinDisappear(e) {
  penguinPng.remove();
  textPenguin.style.opacity = "1";
  square.removeAttribute("id", "stickDisappear");
}

penguinResultDiv.addEventListener("drop", penguinAppear);
penguinResultDiv.addEventListener("dragleave", penguinDisappear);

/////////////cat/////////////////////////////
const catPng = document.createElement("img");

function catAppear(e) {
  catPng.src =
    "https://github.com/EvaOg/Simple-js-works/blob/main/drag_n_drop/cat.png?raw=true";
  catPng.setAttribute("id", "catPng");
  catResultDiv.appendChild(catPng);
  square.setAttribute("id", "stickDisappear");
  textCat.style.opacity = "0";
}

function catDisappear(e) {
  catPng.remove();
  textCat.style.opacity = "1";
  square.removeAttribute("id", "stickDisappear");
}

catResultDiv.addEventListener("drop", catAppear);
catResultDiv.addEventListener("dragleave", catDisappear);

//////owl//////////////////
const owlPng = document.createElement("img");

function owlAppear(e) {
  owlPng.src =
    "https://github.com/EvaOg/Simple-js-works/blob/main/drag_n_drop/owl.png?raw=true";
  owlPng.setAttribute("id", "owlPng");
  owlResultDiv.appendChild(owlPng);
  square.setAttribute("id", "stickDisappear");
  textOwl.style.opacity = "0";
}

function owlDisappear(e) {
  owlPng.remove();
  textOwl.style.opacity = "1";
  square.removeAttribute("id", "stickDisappear");
}

owlResultDiv.addEventListener("drop", owlAppear);
owlResultDiv.addEventListener("dragleave", owlDisappear);

/////////////stick container//////////////////////

function stickAppear(e) {
  square.removeAttribute("id", "stickDisappear");
  item.style.opacity = "1";
}
dragContainer.addEventListener("drop", stickAppear);

function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}

function init() {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
}
