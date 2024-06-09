// carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    'input[name="carousel-radio"]'
  );
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showItem(index) {
    if (carouselItems[index]) {
      // Hide all carousel items
      carouselItems.forEach((item) => item.classList.remove("active"));
      // Show the corresponding carousel item
      carouselItems[index].classList.add("active");
      // Check the corresponding radio button
      radioButtons[index].checked = true;
    } else {
    }
  }



  function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }

  // Autoplay functionality
  const interval = 3000; // Adjust interval as needed (in milliseconds)
  let autoplayTimer;

  function startAutoplay() {
    autoplayTimer = setInterval(nextItem, interval);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  // Listen for radio button changes
  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      currentIndex = index;
      showItem(currentIndex);
      stopAutoplay(); // Stop autoplay when user interacts with the carousel
    });
  });

  // Start autoplay when the page loads
  startAutoplay();
});

//draggable

document.addEventListener("DOMContentLoaded", function () {
  let isMouseDown = false;
  let offsetX = 0;
  let scrollX = 0;

  const draggableContainer = document.querySelector(".draggable-container");
  const radioButtonsContainer = document.querySelector(
    ".radio-buttons-container"
  );

  if (draggableContainer) {
    draggableContainer.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      offsetX = e.clientX - draggableContainer.getBoundingClientRect().left;
      scrollX = draggableContainer.scrollLeft;
      draggableContainer.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", () => {
      isMouseDown = false;
      draggableContainer.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      const x = e.clientX - draggableContainer.getBoundingClientRect().left;
      const dx = x - offsetX;
      draggableContainer.scrollLeft = scrollX - dx;
    });
  } else {
  }
});

//mobile menu starts
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      const expanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
      mobileMenuButton.setAttribute("aria-expanded", !expanded);
      mobileMenu.classList.toggle("hidden");
    });
  }
});


//analytics chart

const analytics = document.getElementById("analytics");

new Chart(analytics, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [2.5, 3.75, 3, 1.75, 2.5, 3.1, 2.6, 3.5, 3, 1.5, 2.5, 3.1],
        backgroundColor: [
          "#FFB1C1",
          "#FFD6A5",
          "#FDFFB6",
          "#CAFFBF",
          "#9BF6FF",
          "#BDB2FF",
        ],
        borderWidth: 0,
        borderRadius: 150,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },

      x: {},
    },
  },
});

const conversion = document.getElementById("conversion");

new Chart(conversion, {
  type: "doughnut",
  data: {
    labels: [
      "Products Viewed",
      "Products Shared",
      "Products in Wishlist",
      "Products Purchased",
    ],
    datasets: [
      {
        label: "Conversion",
        data: [300, 50, 100, 20],
        backgroundColor: ["#FF686B", "#70D6FF", "#60D394", "#FFD670"],
        hoverOffset: 4,
      },
    ],
  },
});

//filter button

document.addEventListener("DOMContentLoaded", function () {
  const filterOnBtn = document.getElementById("filterOnBtn");

  if (viewModeBtn) {
  }
});

//list view and grid view

function toggleActiveClass(id) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

//popup

function openPopup() {
  const popup = document.getElementById("popup");
  const productBackground = document.getElementById("productBackground");

  popup.classList.remove("hidden");
  popup.classList.add("flex");
  productBackground.style.backgroundColor = "#000328";
}


function closePopup() {  
  popup.classList.remove("flex");
  popup.classList.add("hidden");
  productBackground.style.backgroundColor = "transparent";
}



