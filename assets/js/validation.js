document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                showSuccessMessage();
                contactForm.reset();
            }
        });
    }

    // Form validation function
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Reset previous errors
        clearErrors();

        // Name validation
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Email validation
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Subject validation
        if (!subject.value.trim()) {
            showError(subject, 'Subject is required');
            isValid = false;
        }

        // Message validation
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        return isValid;
    }

    // Helper functions
    function showError(input, message) {
        const errorDiv = document.getElementById(`${input.id}-error`);
        if (errorDiv) {
            errorDiv.textContent = message;
            input.classList.add('error-input');
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(error => error.textContent = '');
        document.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error-input'));
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Thank you! Your message has been sent successfully.';
        
        const form = document.getElementById('contact-form');
        form.insertBefore(successDiv, form.firstChild);

        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
});