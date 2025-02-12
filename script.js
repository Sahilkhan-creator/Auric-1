document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful!");
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account Created Successfully!");
});

document.getElementById("apply-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your request has been submitted!");
});
