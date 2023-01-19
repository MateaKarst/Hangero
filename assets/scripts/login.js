const logInBtn = document.querySelector("#logIn");
//login wrapper
const logInPopUp = document.querySelector(".logIn");
//register wrapper
const registerPopUp = document.querySelector(".register");
const logInToggler = document.querySelector(".logInToggle");
const registerToggler = document.querySelector(".registerToggle");
const closeLogin = document.querySelectorAll(".closeLogin");

let isLogged = localStorage.getItem("isLogged");
// click to make login appear
if (!isLogged && logInBtn) {
  logInBtn.addEventListener("click", () => {
    logInPopUp.style.display = "flex";
  });
}

// click to switch to register
if (registerToggler) {
  registerToggler.addEventListener("click", () => {
    logInPopUp.style.display = "none"; // login pop disappear
    registerPopUp.style.display = "flex"; // register pop up will appear
  });
}

// click to switch to login
if (logInToggler) {
  logInToggler.addEventListener("click", () => {
    registerPopUp.style.display = "none"; // register pop disappear
    logInPopUp.style.display = "flex"; // login appear
  });
}

// register form handle
const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default action on submit
    alert("user already exist");
  });
}

// login form handle
const loginForm = document.querySelector("#logInForm");
if (loginForm) {
  const images = document.querySelectorAll(".pfpIcon");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    images.forEach(
      (img) =>
        (img.src =
          "https://images.pexels.com/photos/4775198/pexels-photo-4775198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    );
    alert("logged In  succesfull!");
    localStorage.setItem("isLogged", true); // storing the var isLogged in the loc strg with value true
    logInPopUp.style.display = "none";
  });
}

// if the user is logged in, the pfp will be changed automatically
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
// [login, register]
//close login/register popUp
closeLogin.forEach((element) => {
  element.addEventListener("click", () => {
    logInPopUp.style.display =  "none"
    registerPopUp.style.display =  "none"
  })
})

