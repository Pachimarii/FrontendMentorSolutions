const lbtn = document.querySelector(".left-btn");
const rbtn = document.querySelector(".right-btn");
const text = document.querySelectorAll(".text-container");
const card = document.querySelectorAll(".flipcard-side");

function toggleSlide() {
    for (t of text) {
        t.classList.toggle("visible");
        t.classList.toggle("hidden");
    }
    for (c of card) {
        c.classList.toggle("visible");
        c.classList.toggle("hidden");
    }
}

lbtn.addEventListener("click", toggleSlide);
rbtn.addEventListener("click", toggleSlide);
