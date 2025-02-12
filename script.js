document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const applyForm = document.getElementById("apply-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            localStorage.setItem("user", email);
            window.location.href = "homepage.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            localStorage.setItem("user", email);
            window.location.href = "index.html";
        });
    }

    if (applyForm) {
        applyForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your request has been submitted!");
            window.location.href = "success.html";
        });
    }
});
