

var timeDisplayEl = $('#time-display');
var todayEl = $('#currentDay');
//shows date and time
function displayTime() {
    var rightNow = moment().format(' MMM DD, YYYY [  ] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};
//show the day
function dayDisplay() {
    var todayNow = moment().format('dddd');
    todayEl.text(todayNow);

};
//calling the two function to operate
setInterval(displayTime, 1000);
setInterval(dayDisplay, 1000);

$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();///// gets it from the textarea
    var time = $(this).parent().attr("id");////parent div of the hour

    // Save text from textarea in local storage
    localStorage.setItem(time, text);
})
 /////you got to pull this back 
//////changing color
function watchTower() {

}