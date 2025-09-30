document.getElementById("edit-button").onclick = function () {
  document.getElementById("edit-modal").style.display = "block";
};

document.getElementById("close-button").onclick = function () {
  document.getElementById("edit-modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("edit-modal")) {
    document.getElementById("edit-modal").style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", async function () {
  await fetchProfileData();
});

async function fetchProfileData() {
  try {
    const response = await fetch("profile.php");
    const data = await response.json();

    if (data.error) {
      console.error(data.error);
    } else {
      document.getElementById("name").innerText = data.name || "N/A";
      document.getElementById("email").innerText = data.email || "N/A";
      document.getElementById("phone").innerText = data.phone || "N/A";
      document.getElementById("dob").innerText = data.dob || "N/A";
      document.getElementById("gender").innerText = data.gender || "N/A";
      document.getElementById("country").innerText = data.country || "N/A";
    }
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
}

document.getElementById("edit-form").onsubmit = async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  try {
    const response = await fetch("profile.php", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      alert(result.success);
      document.getElementById("edit-modal").style.display = "none";
      await fetchProfileData(); // Refresh profile details
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('close-btn');


  document.addEventListener('DOMContentLoaded', () => {
      const dropdownToggles = document.querySelectorAll('#dropdown-toggle');
    
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = toggle.nextElementSibling;
    
          // Close other dropdowns if any
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu) {
              menu.style.display = 'none';
            }
          });
    
          // Toggle current dropdown
          if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
          } else {
            dropdownMenu.style.display = 'block';
          }
        });
      });
    
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
          });
        }
      });
  });
    

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

function uploadedImg() {
  const fileInput = document.getElementById('uploaded');
  const profilePicture = document.getElementById('the-picture');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}