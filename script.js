
/*
- argument1 = the callback function to be run
- argument2 = the time between each callback(mili-seconds)
*/
setInterval(setClock, 1000);

/*
- '[]' is how you select data attributes from HTML elements
*/
const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');

function setClock() {
  // saves the current date/time
  const currentDate = new Date();
  /*
  - save each time interval into a variable and divide by 60 (12 for hours) to get the
    rotation ratio
  - notice how you add the seconds ratio to the minutes and the minutes ratio 
    to the hours. this makes it so that the minutes and hours hands gradually
    move around instead of jumping from one minute to the next and one hour
    to the next
  */
  const secondsRatio = currentDate.getSeconds() / 60; 
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; 
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  /*
  - call the set rotation function for each hand
  */
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

/*
- takes one of the hand elements, and one of the time ratios
*/
function setRotation(hand, rotationRatio) {
  /*
  - setProperty([property to be altered], [value])
  - example: hourHand.style.setProperty('--rotation', 45.05 * 360)
  - we multiply by 360 to convert the ratio to degrees
  */
  hand.style.setProperty('--rotation', rotationRatio * 360);
}

/*
- immediately calls the setClock function to stop the clock from
  starting at the top for one second every time the page re-loads
*/
setClock();