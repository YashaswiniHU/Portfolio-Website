// script.js

// Toggle sidebar
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebar = document.querySelector(".sidebar");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  const span = sidebarBtn.querySelector("span");
  const icon = sidebarBtn.querySelector("ion-icon");
  if (sidebar.classList.contains("active")) {
    span.textContent = "Hide Contacts";
    icon.name = "chevron-up";
  } else {
    span.textContent = "Show Contacts";
    icon.name = "chevron-down";
  }
});

// Navbar link navigation
const navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove active class from all sections
    document.querySelectorAll(".main-content > article").forEach(section => {
      section.classList.remove("active");
    });

    // Add active class to the target section
    targetSection.classList.add("active");

    // Remove active class from all navbar links
    navbarLinks.forEach(navLink => {
      navLink.classList.remove("active");
    });

    // Add active class to the clicked navbar link
    link.classList.add("active");
  });
});

// Form validation
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = contactForm.querySelector("input[name='name']");
  const emailInput = contactForm.querySelector("input[name='email']");
  const messageTextarea = contactForm.querySelector("textarea[name='message']");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully!");
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
