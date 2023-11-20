const cats = document.querySelectorAll(".cat");
const description = document.querySelectorAll(".description");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentSlideId = 0;

next.addEventListener("click", () => {
  description[currentSlideId].classList.remove("activeDescription");
  cats[currentSlideId].classList.remove("active");

  currentSlideId = (currentSlideId + 1) % cats.length;

  description[currentSlideId].classList.add("activeDescription");
  cats[currentSlideId].classList.add("active");
});

prev.addEventListener("click", () => {
  description[currentSlideId].classList.remove("activeDescription");
  cats[currentSlideId].classList.remove("active");

  currentSlideId = (currentSlideId - 1 + cats.length) % cats.length;

  description[currentSlideId].classList.add("activeDescription");
  cats[currentSlideId].classList.add("active");
});

for (let i = 0; i < description.length; i++) {
  let desc = description[i];
  let currentPic = i;

  desc.addEventListener("click", () => {
    for (let el of description) {
      el.classList.remove("activeDescription");
    }

    for (let el of cats) {
      el.classList.remove("active");
    }

    description[currentPic].classList.add("activeDescription");
    cats[currentPic].classList.add("active");
  });