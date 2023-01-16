const btn = document.querySelector('.submitBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');

btn.addEventListener('click', function(e) {
    if(email.value && password.value) {
        alert("You just gave me your credentials, so yes.");
    } else {
        alert("Please enter your email and password.")
    }
})