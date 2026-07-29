(function () {
  emailjs.init({
    publicKey: "wvojyQ6MBVoljP_lT",
  });
})();

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

const links = document.querySelectorAll("#nav-menu a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_0tkdj4o", "template_0cm617l", this)
      .then(() => {
        alert("Enquiry sent successfully!");
        this.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send enquiry.");
      });
  });
