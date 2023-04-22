document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".bar .progress");

  bars.forEach((bar) => {
    const percentage = bar.dataset.percent;
    const percentEl = bar.parentNode.querySelector(".percent");
    let progress = 0;
    const interval = setInterval(frame, 10);

    function frame() {
      if (progress >= percentage) {
        clearInterval(interval);
      } else {
        progress++;
        bar.style.width = `${progress}%`;
        percentEl.textContent = `${progress}%`;
      }

      if (progress === 100) {
        bar.style.backgroundColor = "#ff4037";
        percentEl.style.color = "#FF4037";
      }
    }
  });

  window.addEventListener("load", function () {
    const elements = document.querySelectorAll(".fade-in");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-in-active");
    }
  });
});

var swiper = new Swiper("#projects-carousel", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
