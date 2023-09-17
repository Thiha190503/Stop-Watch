const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const pauseButtonTag = document.getElementById("pauseButton");
const continueButtonTag = document.getElementById("continueButton");
const restartButtonTag = document.getElementById("restartButton");
// let seconds = 00,
//   minutes = 00,
//   hours = 0;

const startStopWatch = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }

  let hourText = hours < 10 ? "0" + hours.toString() : hours.toString();
  let minuteText = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
  let secondText = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
  stopWatchTag.innerText = hourText + ":" + minuteText + ":" + secondText;
};

let interval = setInterval(startStopWatch, 1000);
pauseButtonTag.addEventListener("click", () => {
  clearInterval(interval);
});

continueButtonTag.addEventListener("click", () => {
  interval = setInterval(startStopWatch, 1000);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  interval = setInterval(startStopWatch, 1000);
});
