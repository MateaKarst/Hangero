const form = document.querySelector('.addressForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform validation or any other logic here
  // ...
  // If validation passes, redirect to another page
  window.location.href = './payment.html';
  // or use window.location.replace('./payment.html')
});
