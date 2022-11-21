let message = document.querySelector(".message");
let santa = document.querySelector(".santaimg");

santa.addEventListener("click", function () {
   message.classList.toggle("active");
})