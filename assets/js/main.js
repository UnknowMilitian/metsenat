const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  btn.addEventListener("focus", (e) => {
    document.querySelectorAll(".checked-img").forEach((img) => {
      img.style.display = "none";
    });
    const checkedImg = btn.querySelector(".checked-img");
    if (checkedImg) {
      checkedImg.style.display = "block";
    }
  });
});
