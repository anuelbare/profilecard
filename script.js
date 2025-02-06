function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    setInterval(() => {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }, 1000);
}
updateUTCTime()