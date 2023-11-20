let w;
let h;

const btn = document.querySelector(".btn");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const resultDiv = document.getElementsByClassName("result")[0];

btn.addEventListener("click", onButtonClick);

async function onButtonClick() {
  await addImg();
}

async function addImg() {
  w = width.value;
  h = height.value;

  if (isNaN(w) || isNaN(h) || w < 100 || w > 300 || h < 100 || h > 300) {
    alert("Please enter a correct size");
    return;
  } else {
    let response = await fetch(`https://picsum.photos/${w}/${h}`);
    if (response.url) {
      const newPic = document.createElement("img");
      newPic.src = response.url;
      newPic.width = w;
      newPic.height = h;
      newPic.classList.add("card-image");
      resultDiv.appendChild(newPic);
    }
  }
}
