const signupForm = document.getElementById("signup-form");


function signup() {
    // event.preventDefault();
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
  
    // Check if the username already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      alert("Username already exists");
      return;
    }
  
    // Add the new user to local storage
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    // Signup successful
    alert("Signup successful. Please login.");
    // showLoginForm();
  }
 