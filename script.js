function login() {
    window.location.href = "login.html";
}

function index() {
    window.location.href = "index.html";
}

function checkFields() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');

    if (email.trim() !== '' && password.trim() !== '') {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}