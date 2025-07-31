let navFunction = () => {
    let navBtn = document.getElementById("mobile-nav-button");
    let mobileNav = document.getElementById("mobile-nav");

    let toggleNav = () => {
        document.querySelector('body').classList.toggle("overflow-hidden")
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("flex");
    };

    navBtn.addEventListener("click",toggleNav);
    mobileNav.addEventListener("click",toggleNav);
};

document.addEventListener("DOMContentLoaded", navFunction);
