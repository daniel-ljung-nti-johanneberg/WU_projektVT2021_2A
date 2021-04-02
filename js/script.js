const burger = document.querySelector(".meny-toggle")
const nav = document.querySelector(".nav-links")



function toggleMeny() {
    burger.classList.toggle("toggle")
    nav.classList.toggle("nav-active")
}


burger.addEventListener("click", toggleMeny)