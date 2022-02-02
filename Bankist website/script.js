"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// console.log(document.querySelector(".btn--scroll-to"));
const section1 = document.querySelector("#section--1");
document
  .querySelector(".btn--scroll-to")
  .addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
  });

// Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// Refactored for better performance
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(this);
  // console.log(e.target);

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Testing code
// const h1 = document.querySelector("h1");
// const alert1 = function (e) {
//   alert("addEventListeny: greysh!");
// };

// h1.addEventListener("mouseenter", alert1);

// setTimeout(() => h1.removeEventListener("mouseenter", alert1), 5000);

// h1.onmouseenter = function (e) {
//   alert("addEventListeny: greysh!");
// };

// // calc random number
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColour = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColour(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   // this.style.backgroundColor = randomColour();
//   console.log(`nav LINK`);
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   // this.style.backgroundColor = randomColour();
//   console.log(`nav linx`);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   // this.style.backgroundColor = randomColour();
//   console.log(`main nav`);
// });
