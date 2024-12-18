// Handle Sign Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Sign Up failed');
        }

        const message = await response.text();
        document.getElementById('signupMessage').textContent = message;
        document.getElementById('signupMessage').style.color = 'green';

    } catch (error) {
        document.getElementById('signupMessage').textContent = 'Sign Up failed!';
        document.getElementById('signupMessage').style.color = 'red';
        console.error(error);
    }
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        console.log('Token:', data.token);  // Use this token for authentication

    } catch (error) {
        document.getElementById('loginMessage').textContent = 'Login failed!';
        document.getElementById('loginMessage').style.color = 'red';
        console.error(error);
    }
});

