// Accessing form and fields
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  // Name check
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  }

  // Email check
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email.");
    isValid = false;
  }
  // Subject check
  const subjectInput = document.getElementById("subject");

  // Inside the form.addEventListener block:
  if (subjectInput.value.trim() === "") {
    showError(subjectInput, "Subject is required.");
    isValid = false;
  }

  // Message check
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty.");
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    document.getElementById("SuccessMsg").style.display = "block";
    form.reset();
    setTimeout(() => {
      document.getElementById("SuccessMsg").style.display = "none";
    }, 4000); //hide after 4 seconds
  }
});

// Show error below input
function showError(input, message) {
  const error = document.createElement("small");
  error.classList.add("error-message");
  error.innerText = message;
  input.parentElement.appendChild(error);
  input.style.borderColor = "red";
}

function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach((el) => el.remove());

  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => (input.style.borderColor = "#ccc"));
}

// Email format check
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
