function scrollingNav() {
    const navbar = document.querySelector("#navbar");
    const top = navbar.offsetTop;
    function floating() {
        if (window.scrollY > top) {
            navbar.classList.add("floating");
        } else {
            navbar.classList.remove("floating");
        }
    }
    window.addEventListener("scroll", floating);
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#navbar");
    if (navbar) scrollingNav();
});
