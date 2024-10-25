document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const parentName = document.getElementById('parentName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Basic validation
    if (fullName && age && grade && parentName && contactEmail && phoneNumber) {
        document.getElementById('responseMessage').innerText = 'Application submitted successfully! We will get back to you soon!';
        document.getElementById('admissionForm').reset(); // This is going to reset the form
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill in all fields.';
    }
});
