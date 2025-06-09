// Step 1: Start with DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 2: Form Selection
    const form = document.getElementById('registration-form');
    
    // Step 3: Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Step 4: Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to server
        event.preventDefault();
        
        // Step 5: Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Step 6: Validation Logic - Initialize validation variables
        let isValid = true;
        const messages = [];
        
        // Username Validation - must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email Validation - must contain both @ and .
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        
        // Password Validation - must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Step 7: Displaying Feedback
        // Make feedback div visible
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            // Error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
    });
});