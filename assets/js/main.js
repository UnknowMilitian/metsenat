const buttons = document.querySelectorAll("button");
const dataButtons = document.querySelectorAll("[data-target]");
const contentSections = document.querySelectorAll('[id^="content"]');
const contentSectionsTab = document.querySelectorAll('[id^="tab-content"]');
const inputs = document.querySelectorAll('input[type="text"]');
const radios = document.querySelectorAll('input[type="radio"]');

const navbarBar = document.querySelector(".bar");
const mobileContent = document.querySelector(".mobile_content");

navbarBar.addEventListener("click", () => {
  mobileContent.classList.toggle("active");
});

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

// ! Js Code For Application Form
dataButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");

    dataButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    contentSections.forEach((section) => {
      section.classList.toggle("hidden", section.id !== targetId);
    });

    contentSectionsTab.forEach((section) => {
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
  if (
    button.getAttribute("data-target") === "content1" ||
    button.getAttribute("data-target") === "tab-content-1"
  ) {
    button.classList.add("active");
  }
});
// ! Js Code For Application Form
