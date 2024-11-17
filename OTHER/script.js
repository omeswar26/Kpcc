function openLogin() {
    alert('Login form goes here!');
  }
  
  function openRegister() {
    alert('Register form goes here!');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully.");
  });
  // Add animation to dropdown elements (optional)
const dropdownContent = document.querySelectorAll('.dropdown-content');
dropdownContent.forEach(dropdown => {
  dropdown.addEventListener('mouseover', () => {
    dropdown.style.animation = 'fadeIn 0.3s ease-in-out';
  });
  dropdown.addEventListener('mouseout', () => {
    dropdown.style.animation = 'fadeOut 0.3s ease-in-out';
  });
});

// Add animation to navigation links (optional)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.animation = 'pulse 0.5s infinite';
  });
  link.addEventListener('mouseout', () => {
    link.style.animation = '';
  });
});
function openLogin(role) {
  alert(`Opening ${role} login form...`);
  // Implement logic to open login form for staff or student
}

function openRegister(role) {
  alert(`Opening ${role} registration form...`);
  // Implement logic to open registration form for staff or student
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function moveSlides(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Initial display of the first slide
showSlide(currentSlide);

//gallery wesite code
document.querySelectorAll('.gallery-item img').forEach(image => {
  image.addEventListener('click', (e) => {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Add the clicked image to the lightbox
    const img = document.createElement('img');
    img.src = e.target.src;
    lightbox.appendChild(img);

    // Close lightbox on click
    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

// about us website code
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    button.classList.toggle('active');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

//admission website
// JavaScript for basic form validation
document.getElementById('admissionForm').addEventListener('submit', function (e) {
  // Add form validation logic here if needed.
  // For example, checking if all required fields are filled or valid.
  const name = document.getElementById('student-name').value;
  const dob = document.getElementById('dob').value;
  
  if (!name || !dob) {
      alert("Please fill in all required fields.");
      e.preventDefault();  // Prevent form submission
  }
});
