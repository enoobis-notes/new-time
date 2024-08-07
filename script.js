function updateTime() {
    const now = new Date();
    const utcNow = new Date(now.toUTCString().slice(0, -4)); //UTC time from local time

    // country time
    utcNow.setHours(utcNow.getHours() + 6);

    // calc
    const totalSeconds = (utcNow.getHours() * 3600) + (utcNow.getMinutes() * 60) + utcNow.getSeconds();
    const decimalHour = Math.floor(totalSeconds / 8640 * 10);
    const decimalMinute = Math.floor((totalSeconds % 8640) / 86.4);
    const decimalSecond = Math.floor(((totalSeconds % 8640) % 86.4) / 0.864);

    // update - time display
    document.getElementById('hour').textContent = String(decimalHour).padStart(2, '0');
    document.getElementById('minute').textContent = String(decimalMinute).padStart(2, '0');
    document.getElementById('second').textContent = String(decimalSecond).padStart(2, '0');
}

// update - time every second
setInterval(updateTime, 1000);
updateTime();
