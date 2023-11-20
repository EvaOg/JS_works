let btn = document.querySelector(".btn");
let page;
let limit;
let resultDiv = document.querySelector(".resultDiv");

btn.addEventListener("click", getPic);

async function getPic() {
  let urlPic = await getImg();
  createPic(urlPic);
}

async function getImg() {
  page = parseInt(document.querySelector("#pageNumberID").value);
  limit = parseInt(document.querySelector("#limitID").value);
  if (page < 1 || page > 10 || limit < 1 || limit > 10) {
    alert("Please enter a correct number");
    return;
  }

  let promisResult = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  let json = await promisResult.json();
  return json;
}

function createPic(url) {
  url.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("polaroid");

    const img = document.createElement("img");
    img.src = `${el.download_url}`;

    let caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = `Author: ${el.author}`;

    card.appendChild(img);
    card.appendChild(caption);

    resultDiv.appendChild(card);
  });
}
