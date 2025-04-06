particlesJS("particles-js", {
  particles: {
    number: {
      value: 500, 
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: ["#ffffff", "#f4f1de", "#81b4ff"], 
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: true, 
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true, 
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 120,
        line_linked: {
          opacity: 0.4, 
          color: "#ffffff", 
        },
      },
    },
  },
  retina_detect: true,
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animated");
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
