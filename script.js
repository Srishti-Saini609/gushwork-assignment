const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");

let index = 0;

// set active center card
function updateCarousel() {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });

  const itemWidth = items[0].offsetWidth + 20;
  const offset = (index * itemWidth) - (itemWidth * 1.5);

  track.style.transform = `translateX(-${offset}px)`;
}

// buttons
document.querySelector(".next").onclick = () => {
  index = (index + 1) % items.length;
  updateCarousel();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
};

// auto slide
setInterval(() => {
  index = (index + 1) % items.length;
  updateCarousel();
}, 4000);

// DRAG SUPPORT (🔥 PREMIUM UX)
let isDragging = false;
let startX = 0;

track.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
});

track.addEventListener("mouseup", (e) => {
  if (!isDragging) return;

  let diff = e.pageX - startX;

  if (diff > 50) {
    index = (index - 1 + items.length) % items.length;
  } else if (diff < -50) {
    index = (index + 1) % items.length;
  }

  updateCarousel();
  isDragging = false;
});

// init
updateCarousel();
// ================= NAVBAR SCROLL EFFECT =================
// ================= SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ================= HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// ================= ACTIVE LINK =================
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// ================= SECTION REVEAL =================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});


// ================= MAGNETIC BUTTON =================
document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});


// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  blur.style.left = e.clientX - 20 + "px";
  blur.style.top = e.clientY - 20 + "px";
});