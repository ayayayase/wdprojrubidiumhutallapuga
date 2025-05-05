document.addEventListener("DOMContentLoaded", () => {
  // Check if user is authenticated
  fetch('/check-auth')
    .then(res => res.json())
    .then(data => {
      if (data.loggedIn) {
        // Show profile, hide login/register
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('username').innerText = data.username;
      } else {
        // Show login form
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none';
      }
    });

  const registerlink = document.getElementById("registerlink");
  registerlink.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  });
});

function logout() {
  fetch('/logout')
    .then(() => location.reload());
}
