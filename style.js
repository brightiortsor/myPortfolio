const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const hambug = document.querySelectorAll("#hambug");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

hambug.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });
});

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "password",
    To : 'iortsor@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body: ""
}).then(
  message => alert("Successfully submitted! We will get back to you shortly.")
);
}