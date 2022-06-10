const hamburger = document.getElementById("hamburger");
const mobNav = document.getElementById("mobile-nav");
const cross = document.getElementById("cross");
function scrollEvent() {
    window.scrollTo(0, 0);
}
hamburger.addEventListener("click", () => {
    mobNav.classList.toggle("show");
    window.scrollTo(0, 0);
});

cross.addEventListener("click", () => {
    mobNav.classList.toggle("show");
    // window.removeEventListener("scroll", scrollEvent);
});

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolling-active", window.scrollY > 0);
});
