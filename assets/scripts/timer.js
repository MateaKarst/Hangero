// Set the date we're counting down to
let countDownDate = new Date().getTime() + 10 * 60 * 1000; //10 minutes after user opens the page

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let timerContentElements = document.getElementsByClassName("timerContent");
  for (let i = 0; i < timerContentElements.length; i++) {
    timerContentElements[i].innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    for (let i = 0; i < timerContentElements.length; i++) {
      timerContentElements[i].innerHTML = "EXPIRED";
    }
  }
}, 1000);
