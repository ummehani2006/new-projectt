document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle-form');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = loginForm.style.display === 'none' ? 'flex' : 'none';
            signupForm.style.display = signupForm.style.display === 'none' ? 'flex' : 'none';
        });
    });
});