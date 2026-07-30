(function () {
  emailjs.init({
    publicKey: "wvojyQ6MBVoljP_lT",
  });
})();


const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

console.log(menuBtn);
console.log(navMenu);

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

const links = document.querySelectorAll("#nav-menu a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        emailjs.sendForm(
            "service_0tkdj4o",
            "template_0cm617l",
            this
        )
        .then(() => {

            alert("Enquiry sent successfully!");
            this.reset();

        })
        .catch((error) => {

            console.error(error);
            alert("Failed to send enquiry.");

        });

    });

}