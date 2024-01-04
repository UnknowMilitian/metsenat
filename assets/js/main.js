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

// Chart JSON
// Sample data for two lines
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data1 = [
  10000, 30000, 25000, 40000, 30000, 20000, 10000, 42000, 34000, 65000, 50000,
  50000,
];
const data2 = [
  20000, 40000, 20000, 45000, 35000, 35000, 10000, 46000, 20000, 55000, 46000,
  50000,
];

// Creating the chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Homiylar",
        data: data1,
        borderColor: "rgba(255, 99, 132, 1)", // color for line 1
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        pointRadius: 0,
        pointStyle: "circle",
      },
      {
        label: "Talabalar",
        data: data2,
        borderColor: "rgba(54, 162, 235, 1)", // color for line 2
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        pointRadius: 0,
        pointStyle: "circle",
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          borderRadius: 10, // Adjust the label border radius for x-axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          borderRadius: 10, // Adjust the label border radius for y-axis
        },
      },
    },
  },
});
