

var timeDisplayEl = $('#time-display');
var todayEl = $('#currentDay');
//shows date and time
function displayTime() {
    var rightNow = moment().format(' MMM DD, YYYY [  ] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };
//show the day
  function dayDisplay(){
    var todayNow = moment().format('dddd');
    todayEl.text(todayNow);

  };
//calling the two function to operate
  setInterval(displayTime, 1000);
  setInterval(dayDisplay, 1000)


  function watchTower(){
      
  }