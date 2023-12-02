/*const form = document.querySelector('form');

// Add an event listener to the form's submit 
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting normally
  e.preventDefault();

  

  // Get the form data as a string
  const formData = new FormData(form);
  

  // Log the form data to the console
  console.log(formData);

  // Display an alert message
  alert('Thank you! The form information has been received.');
});
*/

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    // Serialize the form data
    const formData = $(this).serialize();

    // Log the form data to the console
    console.log(formData);

    // Display an alert message
    alert('Thank you! The form information has been received.');
  });
});
