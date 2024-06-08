document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Logged in successfully!');
    window.location.href = 'index.html';
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registered successfully!');
    window.location.href = 'index.html';
});