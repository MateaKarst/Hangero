const logInBtn = document.querySelector("#logIn");
const logInPopUp = document.querySelector(".logIn");
const registerPopUp = document.querySelector(".register");
const logInToggler = document.querySelector(".logInToggle");
const registerToggler = document.querySelector(".registerToggle");
let isLogged = localStorage.getItem("isLogged");

// click to make login appear
if(!isLogged){
  if (logInBtn) {
    logInBtn.addEventListener("click", () => {
      logInPopUp.style.display = "flex";
    });
  }
}

// click to switch to register
if (registerToggler) {
  registerToggler.addEventListener("click", () => {
    logInPopUp.style.display = "none";
    registerPopUp.style.display = "flex";
  });
}

// click to switch to login
if (logInToggler) {
  logInToggler.addEventListener("click", () => {
    registerPopUp.style.display = "none";
    logInPopUp.style.display = "flex";
  });
}

// form handle
const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("user already exist");
  });
}

const loginForm = document.querySelector("#logInForm");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("logged In  succesfull!");
    localStorage.setItem("isLogged", true);
    logInPopUp.style.display = "none";
  });
}

addEventListener("DOMContentLoaded", () => {
  if (isLogged) {
    const images = document.querySelectorAll(".pfpIcon");
    images.forEach(
      (img) =>
        (img.src =
          "https://images.pexels.com/photos/4775198/pexels-photo-4775198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    );
  }
});

addEventListener("change", () => {
  if (isLogged) {
    const images = document.querySelectorAll(".pfpIcon");
    images.forEach(
      (img) =>
        (img.src =
          "https://images.pexels.com/photos/4775198/pexels-photo-4775198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    );
  }
});

