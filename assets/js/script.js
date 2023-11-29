document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Mock server request
    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const successMessage = `Thank you for subscribing!`;
            document.getElementById('subscription-status').innerText = successMessage;
        } else {
            const errorMessage = `Subscription failed. Please try again.`;
            document.getElementById('subscription-status').innerText = errorMessage;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const errorMessage = `An unexpected error occurred. Please try again later.`;
        document.getElementById('subscription-status').innerText = errorMessage;
    });
});
