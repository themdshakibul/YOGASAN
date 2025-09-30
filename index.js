const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');
  
    // Open sidebar
    hamburger.addEventListener('click', () => {
      navLinks.classList.add('active');
      hamburger.style.display = "none"; 
    });
  
    // Close sidebar
    closeBtn.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.style.display = "block";
    });
  
    // Optional: Close sidebar when clicking a link
    navLinks.querySelectorAll('.link a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
});

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
});

// why container
ScrollReveal().reveal(".why__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".why__container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".why__container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".why__container img", {
    ...scrollRevealOption,
    origin: "left",
});

// hero container
ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
});

// classes container
ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
});

// membership container
ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOption,
    interval: 500,
});

// ScrollToTop Button
// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
    });
};

// Go To Login
const loginButtons = document.querySelectorAll('.gologin-btn'); // Select all buttons
if (loginButtons.length > 0) {
    loginButtons.forEach((button) => {
        button.addEventListener('click', () => {
            document.location.href = "../YOGASAN/Access/access.html";
        });
    });
} else {
    console.error("No Button elements found.");
}