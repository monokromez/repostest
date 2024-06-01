document.getElementById('discordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const webhookURL = 'https://discord.com/api/webhooks/1236241396839616542/qzVcrQvbOFCThx6LzL5fQipqsJvQ8Z8q-xQA_h2QkNLDKoBXLy9lKberKVUcgjYZEmwh';

    const payload = {
        content: `**${username}**: ${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});