const popUp = document.querySelector(".Newsletter");
const closePopUp = document.querySelector("#closeNewsletter");
const form = document.querySelector(".popUpForm");
const input = document.querySelector(".formInput");

// Check if the pop-up has been displayed before
let popUpDisplayed = localStorage.getItem("popUpDisplayed");
if (!popUpDisplayed) {
  setTimeout(function () {
    // code to display the pop-up here
    popUp.style.display = "flex";
  }, 3000); // 5000 milliseconds = 5 seconds
  // change the flag in the local storage so it won't get displayed anymore
  localStorage.setItem("popUpDisplayed", true);
}


// newsletter submition
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the default action on form submit

  if (!input.value) {
    // if input is empty, show an error message
    alert("Please fill in the email field");
    return;
  }
  const email = input.value;
  popUp.style.display = "none";
  alert("The email submitted is: " + email);
  isDisplayed = true;
});

// closing the popUp
closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
  isDisplayed = true;
})

// delivery popUp
const deliverWrapper = document.querySelector(".deliveryWrapper")
const delivery = document.querySelector(".delivery");
const deliveryTag = document.querySelector(".tag");
const tagArrow = document.querySelector(".tagArrow")
let isClicked = false;

deliveryTag.addEventListener("click", () => {
  if (isClicked === true) {
    delivery.style.transform = "translateX(100%)";
    tagArrow.style.transform = "rotate(180deg)";
    isClicked = false;
  } else {
    delivery.style.transform = "translateX(0%)";
    tagArrow.style.transform = "rotate(0deg)";
    isClicked = true;
  }
});

