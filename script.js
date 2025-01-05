// Toggle Menu for Mobile Navigation
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Check if the form is already being submitted
  const submitButton = document.querySelector('button[type="submit"]');
  if (submitButton.disabled) return; // Prevent duplicate submissions

  // Disable submit button to prevent multiple clicks
  submitButton.disabled = true;

  // Initialize EmailJS
  emailjs.init('C95PEOsPHaPT-g4VX'); // Replace with your EmailJS User ID

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // EmailJS parameters
  const params = {
      name: name,
      email: email,
      message: message,
  };

  // Send email using EmailJS
  emailjs.send('service_ekn93ml', 'template_2v382cl', params)
      .then((response) => {
          alert('Message sent successfully!');
          console.log('Email sent:', response.status, response.text);
          // Optionally clear the form fields
          document.getElementById('contactForm').reset();
      })
      .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('Error:', error);
      })
      .finally(() => {
          // Re-enable the submit button after the email is sent or failed
          submitButton.disabled = false;
      });
});


