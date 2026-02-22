document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Basic mock validation (accepts anything as long as it's not empty)
    if (user.trim() !== "" && pass.trim() !== "") {
        // Redirect to the home page
        window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Please fill in all fields.";
        errorMsg.style.display = "block";
    }
});
