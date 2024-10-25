document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerText = 'Thank you for your message, we will get back to you soon!';
        document.getElementById('contactForm').reset(); //This is going to reset the form
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill in all fields.';
    }
});
