const redBtn = document.querySelector(".red-btn");
const greenBtn = document.querySelector(".green-btn");
const blueBtn = document.querySelector(".blue-btn");
const headline = document.querySelector("#headline");

redBtn.addEventListener("click", function () {
  headline.style.color = "red";
});

greenBtn.addEventListener("click", function () {
  headline.style.color = "green";
});

blueBtn.addEventListener("click", function () {
  headline.style.color = "blue";
});

const profile = document.querySelector(".profile-card");
const toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click", function () {
  if (profile.classList.contains("hidden")) {
    profile.classList.remove("hidden");
    toggleBtn.textContent = "Close Profile";
  } else {
    profile.classList.add("hidden");
    toggleBtn.textContent = "Open Profile";
  }
});

const textarea = document.getElementById("text-area");
const counter = document.getElementById("counter");

textarea.addEventListener("input", function () {
  const textLength = textarea.value.length;
  counter.textContent = `სიმბოლოების რაოდენობა ${textLength}`;
});

const mainPhoto = document.querySelector("#mainImage");

btn1.addEventListener("click", function () {
  mainPhoto.src = "img/img.jpg";
});

btn2.addEventListener("click", function () {
  mainPhoto.src = "img/img2.jpg";
});

btn3.addEventListener("click", function () {
  mainPhoto.src = "img/pic1.jpg";
});
