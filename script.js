function signup() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
  
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
    console.log("Confirm Password:", confirmPasswordInput.value);
  

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }
