import KahootSpam from 'node: kahoot.js-updated'
document.getElementById('spamForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const gamePin = document.getElementById('gamePin').value;
    const name = document.getElementById('name').value;
    const times = document.getElementById('times').value;
    const status = document.getElementById('status');

    status.textContent = 'Starting spam process...';

    try {
        let api = KahootSpam;
        api.spam(gamePin, name, times);
        status.textContent = `Spammed Kahoot game ${gamePin} ${times} times with the name "${name}".`;
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
    }
});
