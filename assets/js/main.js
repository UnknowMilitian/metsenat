const buttons = document.querySelectorAll("button");
const dataButtons = document.querySelectorAll("[data-target]");
const contentSections = document.querySelectorAll('[id^="content"]');

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
  });

  // Adding initial active class to the first button
  if (button.getAttribute("data-target") === "content1") {
    button.classList.add("active");
  }
});

navbarBar.addEventListener("click", () => {
  mobileContent.classList.toggle("active");
});
