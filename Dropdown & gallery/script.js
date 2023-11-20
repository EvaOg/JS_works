const header = document.querySelectorAll(".header");
let i;

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let text = this.nextElementSibling;

    // if (text.style.display === "block") {
    //   text.style.display = "none";
    // } else {
    //   text.style.display = "block";
    // }
    ///or////

    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }
  });
}
