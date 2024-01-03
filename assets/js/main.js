const buttons = document.querySelectorAll("button");
const dataButtons = document.querySelectorAll("[data-target]");
const contentSections = document.querySelectorAll('[id^="content"]');
const inputs = document.querySelectorAll('input[type="text"]');
const radios = document.querySelectorAll('input[type="radio"]');

const navbarBar = document.querySelector(".bar");
const mobileContent = document.querySelector(".mobile_content");

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

dataButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");

    dataButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    contentSections.forEach((section) => {
      section.classList.toggle("hidden", section.id !== targetId);
    });

    inputs.forEach((input) => {
      input.value = "";
    });

    radios.forEach((radio) => {
      radio.checked = false;
    });
  });

  // Adding initial active class to the first button
  if (button.getAttribute("data-target") === "content1") {
    button.classList.add("active");
  }
});

navbarBar.addEventListener("click", () => {
  mobileContent.classList.toggle("active");
});
