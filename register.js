const form = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");

// Field references
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const addressError = document.getElementById("addressError");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateField(field, errorElement, validatorFn, message) {
  if (!validatorFn(field.value)) {
    errorElement.textContent = message;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

function validateForm() {
  const isNameValid = validateField(fullName, nameError, v => v.trim().length >= 3, "Name must be at least 3 characters.");
  const isEmailValid = validateField(email, emailError, v => /^\S+@\S+\.\S+$/.test(v), "Invalid email format.");
  const isMobileValid = validateField(mobile, mobileError, v => /^\d{10}$/.test(v), "Enter 10-digit number.");
  const isUsernameValid = validateField(username, usernameError, v => v.trim().length >= 4, "Username must be at least 4 characters.");
  const isPasswordValid = validateField(password, passwordError, v => v.length >= 6, "Password must be at least 6 characters.");
  const isConfirmPasswordValid = validateField(confirmPassword, confirmPasswordError, v => v === password.value, "Passwords do not match.");

  return isNameValid && isEmailValid && isMobileValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid;
}

form.addEventListener("input", () => {
  registerBtn.disabled = !validateForm();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    // Store tenant info in localStorage
    localStorage.setItem("tenantName", fullName.value.trim());
    localStorage.setItem("tenantEmail", email.value.trim());

    // Redirect to success page
    window.location.href = "regSuccess.html";
  }
});

