const loginForm = document.getElementById("login-form");

  function login() {
    // event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Checking  if the user exists in local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    alert("Namastey 👋" + user.username);
    // console.log("jinda hainn")
    window.location.href = 'quiz.html'
    
  } else {
    alert("Invalid username or password");
    
  }

}
