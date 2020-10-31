import css from "./css/style.css";

import timerRefs from "./refs/timerRefs.js";
console.log(timerRefs);

const newYearTime = new Date("Jan 1 2021");
console.log(+newYearTime);

const startTime = Date.now();
console.log(startTime);

let currentTime = 0;
let timeBetween = 0;

function getTimeBetween() {
  currentTime = Date.now();
  timeBetween = +newYearTime - currentTime;
  let daysBefore = Math.floor(timeBetween / 1000 / 60 / 60 / 24);
  let hoursBefore = Math.floor(
    (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minutesBefore = Math.floor(
    (timeBetween % (1000 * 60 * 60)) / (1000 * 60),
  );
  let secondsBefore = Math.floor((timeBetween % (1000 * 60)) / 1000);

  console.log("timeBetween", timeBetween);

  timerRefs.daysContent.textContent = daysBefore;
  timerRefs.hoursContent.textContent = hoursBefore;
  timerRefs.minsContent.textContent = minutesBefore;
  timerRefs.secondsContent.textContent = secondsBefore;
}

let interval = setInterval(getTimeBetween, 1000);

// import css from "./css/style.css";
// import timerRefs from './refs/timerRefs.js'

// let myDate = Jan 1 2021

// function getTimeBetween(date){
//   let newYearTime = new Date(date)
//   let timeBetween = +newYearTime - Date.now()
//   //       ms = ms          /  s    / min / hours /
//   let daysBefore = Math.floor(timeBetween / 1000 / 60 / 60 / 24)
//   let hoursBefore = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
//   let minutesBefore = Math.floor(timeBetween % (1000 * 60 * 60) / (1000 * 60  ))
//   let secondsBefore = Math.floor(timeBetween % (1000 * 60) / 1000  )

//   timerRefs.daysContent.textContent = daysBefore
//   timerRefs.hoursContent.textContent = hoursBefore
//   timerRefs.minsContent.textContent = minutesBefore
//   timerRefs.secondsContent.textContent = secondsBefore
// }

// let interval = setInterval(()=>{
//   getTimeBetween(myDate)
// }, 1000)
