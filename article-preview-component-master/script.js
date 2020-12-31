const button = document.querySelector(".share");
const popup = document.querySelector(".pop_up");

button.addEventListener("click", function () {
    button.classList.toggle("active");
    popup.classList.toggle("show");
});