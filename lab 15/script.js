document.getElementById('registration-form').addEventListener('submit', function (e) {
    let isValid = true;

    // 1. Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // 2. Validate Age
    const age = document.getElementById('age').value;
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('age-error').textContent = 'Please enter a valid age between 1 and 120.';
        isValid = false;
    } else {
        document.getElementById('age-error').textContent = '';
    }

    // 3. Confirm Password and Password Match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').textContent = '';
    }

    // 4. Validate ZIP Code
    const zip = document.getElementById('zip').value;
    const zipPattern = /^\d{5}(-\d{4})?$/;
    if (!zipPattern.test(zip)) {
        document.getElementById('zip-error').textContent = 'Please enter a valid ZIP code.';
        isValid = false;
    } else {
        document.getElementById('zip-error').textContent = '';
    }

    // 5. Checkbox Terms & Conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    } else {
        document.getElementById('terms-error').textContent = '';
    }

    // 6. Validate URL
    const url = document.getElementById('url').value;
    const urlPattern = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;
    if (!urlPattern.test(url)) {
        document.getElementById('url-error').textContent = 'Please enter a valid URL.';
        isValid = false;
    } else {
        document.getElementById('url-error').textContent = '';
    }

    // 7. Validate Date (must not be in the future)
    const date = new Date(document.getElementById('date').value);
    if (date > new Date()) {
        document.getElementById('date-error').textContent = 'Please select a date that is not in the future.';
        isValid = false;
    } else {
        document.getElementById('date-error').textContent = '';
    }

    // 8. Validate File Size (max 2MB)
    const file = document.getElementById('file').files[0];
    if (file && file.size > 2 * 1024 * 1024) {
        document.getElementById('file-error').textContent = 'File size should not exceed 2MB.';
        isValid = false;
    } else {
        document.getElementById('file-error').textContent = '';
    }

    // 9. Validate Country Selection
    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('country-error').textContent = 'Please select a country.';
        isValid = false;
    } else {
        document.getElementById('country-error').textContent = '';
    }

    // 10. Password Strength Validation
    const passwordStrengthPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordStrength = document.getElementById('password-strength').value;
    if (!passwordStrengthPattern.test(passwordStrength)) {
        document.getElementById('password-strength-error').textContent = 'Password must be at least 8 characters long, include a letter, a number, and a special character.';
        isValid = false;
    } else {
        document.getElementById('password-strength-error').textContent = '';
    }

    if (!isValid) {
        e.preventDefault();
    }
});
