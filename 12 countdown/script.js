const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const giveawayDate = new Date("June 2, 2024 11:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = giveawayDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.innerHTML = days < 10 ? `0${days}` : days;
  hoursElement.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    daysElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
