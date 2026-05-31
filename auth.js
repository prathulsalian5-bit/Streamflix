// ======== INITIALIZE DEMO ACCOUNTS ========
function initializeDemoAccounts() {
    const demoAccounts = [
        {
            fullname: 'Demo User',
            email: 'demo@streamflix.com',
            phone: '9876543210',
            password: 'Demo@123',
            registeredAt: 'Pre-registered',
            profilePicture: 'https://ui-avatars.com/api/?name=DU&background=e50914&color=fff'
        },
        {
            fullname: 'Test User',
            email: 'test@streamflix.com',
            phone: '9876543211',
            password: 'Test@123',
            registeredAt: 'Pre-registered',
            profilePicture: 'https://ui-avatars.com/api/?name=TU&background=e50914&color=fff'
        }
    ];

    demoAccounts.forEach(account => {
        const userKey = 'streamflix_user_' + account.email;
        if (!localStorage.getItem(userKey)) {
            localStorage.setItem(userKey, JSON.stringify(account));
            console.log('✓ Demo account initialized: ' + account.email);
        }
    });
}

// Initialize demo accounts
initializeDemoAccounts();

// ======== LOGIN FUNCTIONALITY ========
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('rememberMe');
    const messageDiv = document.getElementById('loginMessage');
    const submitBtn = loginForm.querySelector('button[type="submit"]');

    // Clear previous message
    messageDiv.textContent = '';
    messageDiv.className = 'message';

    // Validation
    if (!email || !password) {
        showError(messageDiv, '❌ Please fill all fields');
        return;
    }

    // Change button to loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Signing in...';
    submitBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
        const userKey = 'streamflix_user_' + email;
        const userData = localStorage.getItem(userKey);

        if (!userData) {
            showError(messageDiv, '❌ User not found! Try: demo@streamflix.com');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        const user = JSON.parse(userData);

        if (user.password !== password) {
            showError(messageDiv, '❌ Wrong password!');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        // Success
        localStorage.setItem('streamflix_logged_in', email);
        localStorage.setItem('streamflix_user_data', JSON.stringify(user));

        if (rememberMe.checked) {
            localStorage.setItem('streamflix_remembered_email', email);
        }

        showSuccess(messageDiv, '✅ Login Successful! Redirecting...');
        submitBtn.textContent = originalText;

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);

    }, 1000);
}

// ======== SIGNUP FUNCTIONALITY ========
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', handleSignup);
}

function handleSignup(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const messageDiv = document.getElementById('signupMessage');
    const submitBtn = signupForm.querySelector('button[type="submit"]');

    // Clear previous message
    messageDiv.textContent = '';
    messageDiv.className = 'message';

    // Validation
    if (!fullname || !email || !password || !confirmPassword) {
        showError(messageDiv, '❌ Please fill all required fields');
        return;
    }

    if (fullname.length < 3) {
        showError(messageDiv, '❌ Name must be at least 3 characters');
        return;
    }

    if (!email.includes('@')) {
        showError(messageDiv, '❌ Invalid email address');
        return;
    }

    if (password.length < 6) {
        showError(messageDiv, '❌ Password must be at least 6 characters');
        return;
    }

    // Check password strength (must have uppercase, lowercase, number)
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        showError(messageDiv, '❌ Password must have uppercase, lowercase, and numbers (e.g., Pass123)');
        return;
    }

    if (password !== confirmPassword) {
        showError(messageDiv, '❌ Passwords do not match');
        return;
    }

    if (!terms) {
        showError(messageDiv, '❌ Please agree to Terms & Privacy');
        return;
    }

    // Check if account exists
    const userKey = 'streamflix_user_' + email;
    if (localStorage.getItem(userKey)) {
        showError(messageDiv, '❌ Account already exists with this email');
        return;
    }

    // Change button to loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Creating Account...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Create new account
        const userData = {
            fullname: fullname,
            email: email,
            phone: phone || 'Not provided',
            password: password,
            registeredAt: new Date().toLocaleString(),
            profilePicture: `https://ui-avatars.com/api/?name=${fullname.split(' ').map(n => n[0]).join('')}&background=e50914&color=fff`
        };

        localStorage.setItem(userKey, JSON.stringify(userData));

        showSuccess(messageDiv, '✅ Account Created! Redirecting to login...');
        console.log('✓ New account created:', email);
        console.log('Account Details:', userData);

        signupForm.reset();
        submitBtn.textContent = originalText;

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);

    }, 1500);
}

// ======== UTILITY FUNCTIONS ========
function showError(element, message) {
    element.textContent = message;
    element.className = 'message show error';
}

function showSuccess(element, message) {
    element.textContent = message;
    element.className = 'message show success';
}

// ======== RESTORE REMEMBERED EMAIL ========
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('login-email');
    if (emailInput) {
        const savedEmail = localStorage.getItem('streamflix_remembered_email');
        if (savedEmail) {
            emailInput.value = savedEmail;
            document.getElementById('rememberMe').checked = true;
        }
    }

    // Log info to console
    console.log('🎬 StreamFlix - Demo Credentials:');
    console.log('Email: demo@streamflix.com | Password: Demo@123');
    console.log('Email: test@streamflix.com | Password: Test@123');
});

// ======== CHECK LOGIN STATUS ========
function isUserLoggedIn() {
    return localStorage.getItem('streamflix_logged_in') !== null;
}

function getCurrentUser() {
    const dataStr = localStorage.getItem('streamflix_user_data');
    return dataStr ? JSON.parse(dataStr) : null;
}

function logout() {
    localStorage.removeItem('streamflix_logged_in');
    localStorage.removeItem('streamflix_user_data');
    window.location.href = '../pages/login.html';
}

// ======== UPDATE NAVBAR WITH USER INFO ========
document.addEventListener('DOMContentLoaded', function() {
    const user = getCurrentUser();
    const navAuth = document.querySelector('.nav-auth');

    if (user && navAuth) {
        const firstName = user.fullname.split(' ')[0];
        navAuth.innerHTML = `
            <span style="color: #fff; margin-right: 1rem;">👤 ${firstName}</span>
            <button onclick="logout()" class="btn-logout" style="cursor: pointer;">Logout</button>
        `;
    }
});