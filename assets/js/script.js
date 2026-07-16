const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

const links = document.querySelectorAll("#nav-menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});