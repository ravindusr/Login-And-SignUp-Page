const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const showSignupBtn = document.getElementById('show-signup');
        const showLoginBtn = document.getElementById('show-login');

        showSignupBtn.addEventListener('click', () => {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
        });

        showLoginBtn.addEventListener('click', () => {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

    

function togglePasswordVisibility(passwordInputId, toggleButtonId, iconId) {
        const passwordInput = document.getElementById(passwordInputId);
        const toggleButton = document.getElementById(toggleButtonId);
        const icon = document.getElementById(iconId);

        toggleButton.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        });
    }

    togglePasswordVisibility('login-password', 'login-password-toggle', 'login-password-icon');

    togglePasswordVisibility('signup-password', 'signup-password-toggle', 'signup-password-icon');

