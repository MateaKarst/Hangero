const form = document.querySelector('.addressForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform validation or any other logic here
  let username = document.querySelector("#username");
  let city = document.querySelector("#city");
  let country = document.querySelector("#country");
  let pattern = /^[a-zA-Z]+$/; // pattern for valid text
  // If validation passes, redirect to another page
  if (!username.value.match(pattern) || !city.value.match(pattern) || !country.value.match(pattern)) {
    alert("Name, City and Country should contain only alphabets");
  } else {
    // code to submit the form
    window.location.href = './payment.html';
    // or use window.location.replace('./payment.html')
  }
});
