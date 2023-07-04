
function validateForm(event) {
    event.preventDefault();
  
    const clearErrors = () => {
      document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
      document.querySelectorAll("input").forEach((el) => el.classList.remove("error"));
    };
  
    const showError = (input, errorMessage) => {
      input.classList.add("error");
      input.focus();
      const errorElement = document.getElementById(`${input.id}Error`);
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    };
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const dateInput = document.getElementById("date");
    const colorInput = document.getElementById("color");
  
    clearErrors();
  
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      showError(emailInput, "Invalid email address");
      return;
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      showError(phoneInput, "Invalid phone number");
      return;
    }
  
    if (passwordInput.value.trim() === "") {
      showError(passwordInput, "Password is required");
      return;
    }
  
    if (isNaN(ageInput.value) || ageInput.value < 1) {
      showError(ageInput, "Invalid age");
      return;
    }
  
    if (genderInput.value === "") {
      showError(genderInput, "Gender is required");
      return;
    }
  
    if (dateInput.value === "") {
      showError(dateInput, "Date is required");
      return;
    }
  
    if (colorInput.value === "") {
      showError(colorInput, "Color is required");
      return;
    }
  
    alert("Submission Successful👍");
  }
 