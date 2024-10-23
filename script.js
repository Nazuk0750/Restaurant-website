const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//pendulum image
const image = document.getElementById("pendulumImage");
let angle = 0;
let direction = 1;

function pendulumEffect() {
  angle += direction * 5;
  if (angle > 45 || angle < -45) {
    direction *= -1;
  }
  image.style.transform = `rotate(${angle}deg)`;
}

setInterval(pendulumEffect, 100);

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

// Add event listener for form submission to redirect to another website
document
  .querySelector('.btn[type="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const people = document.querySelector('input[type="number"]').value;

    // You can process the form data or send it to a server here

    // Redirect to another" website
    window.location.href = "file:///D:/frontend.html/html/table.html"; // Replace with your desired URL
  });