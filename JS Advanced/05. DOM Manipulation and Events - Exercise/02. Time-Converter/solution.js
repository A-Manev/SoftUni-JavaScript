function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn').addEventListener('click', converFromDays);
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click', converFromHours);
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', converFromMinutes);
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', converFromSeconds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function converFromDays() {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    }

    function converFromHours() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    }

    function converFromMinutes() {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }

    function converFromSeconds() {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    }
}