const navbarBar = document.querySelector(".bar");
const mobileContent = document.querySelector(".mobile_content");
const mobileContentLi = document.querySelectorAll(".mobile_content ul li");

navbarBar.addEventListener("click", () =>
  mobileContent.classList.toggle("active")
);
mobileContentLi.forEach((li) =>
  li.addEventListener("click", () => mobileContent.classList.remove("active"))
);

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => e.preventDefault());
  btn.addEventListener("focus", (e) => {
    document
      .querySelectorAll(".checked-img")
      .forEach((img) => (img.style.display = "none"));
    const checkedImg = btn.querySelector(".checked-img");
    if (checkedImg) checkedImg.style.display = "block";
  });
});

const dataButtons = document.querySelectorAll(".pill-btn[data-target]");
const contentSections = document.querySelectorAll('[id^="content"]');
const contentSectionsTab = document.querySelectorAll(
  '.pill-content[id^="tab-content"]'
);
const inputs = document.querySelectorAll('input[type="text"]');
const radios = document.querySelectorAll('input[type="radio"]');

dataButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    dataButtons.forEach((btn) =>
      btn.classList.toggle("active", btn === button)
    );
    contentSections.forEach((section) =>
      section.classList.toggle("hidden", section.id !== targetId)
    );
    contentSectionsTab.forEach((section) =>
      section.classList.toggle("hidden", section.id !== targetId)
    );
    inputs.forEach((input) => (input.value = ""));
    radios.forEach((radio) => (radio.checked = false));
  });

  if (
    ["content1", "tab-content-2", "sponsor-detail_content1"].includes(
      button.getAttribute("data-target")
    )
  ) {
    button.classList.add("active");
  }
});

const popupButtons = document.querySelectorAll(".popup-btn");
popupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const popup = document.getElementById(targetId);
    popup.classList.toggle("hidden");
  });
});

const labels = ["January", "February" /* ... */, , "December"];
const data1 = [
  10000, 30000, 25000, 40000, 30000, 20000, 10000, 42000, 34000, 65000, 50000,
  50000,
];
const data2 = [
  20000, 40000, 20000, 45000, 35000, 35000, 10000, 46000, 20000, 55000, 46000,
  50000,
];

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Homiylar",
        data: data1,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        pointRadius: 0,
      },
      {
        label: "Talabalar",
        data: data2,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      x: { ticks: { borderRadius: 10 } },
      y: { beginAtZero: true, ticks: { borderRadius: 10 } },
    },
  },
});
