var menu = document.querySelector(".menu")
var bar = document.querySelector(".fa-bars")


bar.addEventListener("click", () => {
    bar.classList.toggle("active")
    menu.classList.toggle("active")
})