function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    const resultContainer = document.getElementById('result');

    if (!originalUrl) {
        resultContainer.innerHTML = 'Please enter a URL';
        return;
    }

    // Simple short URL generator
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const shortenedUrl = window.location.href + 's/' + shortUrl;

    resultContainer.innerHTML = `Shortened URL: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
}
