function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
  
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
  }  
  
  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = slides[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlider();
  });

  window.addEventListener('resize', updateSlider); // Adjust slider on window resize
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


