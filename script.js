const hamburger = document.getElementById("hamburger");
const mobNav = document.getElementById("mobile-nav");
const cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
    mobNav.classList.toggle("show");
});

cross.addEventListener("click", () => {
    mobNav.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolling-active", window.scrollY > 0);
});
