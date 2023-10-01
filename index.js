

/* Navigation Code */
// Function to toggle navbar open/close animation on menu button click
const navbarTrigger = document.querySelector(".w-nav-button");
const navbar = document.querySelector(".navbar_component");  // Ensure you have the correct selector

function toggleNavbarTriggerAnimation() {
  const navOverlay = document.querySelector('.w-nav-overlay');
  const isNavOverlayHidden = window.getComputedStyle(navOverlay).display === 'none';

  if (isNavOverlayHidden) {
    navbar.classList.add("is-open");
    navbar.classList.add("background-color-black");  // Add background-color-black class
  } else {
    navbar.classList.remove("is-open");
    navbar.classList.remove("background-color-black");  // Remove background-color-black class
  }
}

// Assuming you want this function to run when the navbarTrigger is clicked
navbarTrigger.addEventListener('click', toggleNavbarTriggerAnimation);


let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar_component");
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // Scroll Down
    if (navbar.style.top !== "-4.5rem") {
      gsap.to(navbar, { top: "-4.5rem", duration: 0.5 });
    }
  } else {
    // Scroll Up
    if (navbar.style.top !== "0") {
      gsap.to(navbar, { top: "0", duration: 0.5 });
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar_component");

  // Check if page is scrolled
  if (window.scrollY > 0) {
    // Add class if not present
    if (!navbar.classList.contains("background-color-black")) {
      navbar.classList.add("background-color-black");

      // Optional: Add a GSAP animation when class is added
      gsap.fromTo(navbar, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  } else {
    // Remove class if present
    if (navbar.classList.contains("background-color-black")) {
      navbar.classList.remove("background-color-black");

      // Optional: Add a GSAP animation when class is removed
      gsap.fromTo(navbar, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  }
});

gsap.registerPlugin(ScrollTrigger);

/* START: Swiper 2 - Swiper Simple Starter 2 */
document.querySelectorAll('[swiper="2"]').forEach((sliderComponent) => {
  const sliderEl = sliderComponent.querySelector('[swiper="slider"]');
  const buttonNextEl = sliderComponent.querySelector('[swiper="next-button"]');
  const buttonPrevEl = sliderComponent.querySelector('[swiper="prev-button"]');
  const paginationEl = sliderComponent.querySelector('[swiper="pagination"]');

  new Swiper(sliderEl, {
    slidesPerView: 2.5,
    spaceBetween: 16,
    direction: 'horizontal',
    rewind: true,
    pagination: {
      el: paginationEl,
    },
    navigation: {
      nextEl: buttonNextEl,
      prevEl: buttonPrevEl,
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
    },
  });
});
/* END: Swiper 2 - Swiper Simple Starter 2 */


// On page load animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.to('[animation="load"]', {
    opacity: 1,
    translateY: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  });
});

// Scroll into view animations
gsap.utils.toArray('[animation="scroll"]').forEach((element) => {
  gsap.fromTo(element,
    { opacity: 0, translateY: 20 },
    {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
      },
      opacity: 1,
      translateY: 0,
      duration: 1,
      ease: 'power2.out',
    }
  );
});

// Shows the current year in footer
window.onload = function () {
  const year = new Date().getFullYear();
  document.querySelector('span[show="year"]').textContent = year;
}

