
$(document).ready(function () {


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
    //if current hour is equal to the time hour then css needs to be current
    //if current hour is not equal to current hour css should reflect past or present 
    //
    function watchTower() {
        var currentHour = moment().hour; //hour track
        console.log(currentHour);

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            if (blockHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })


    }
    watchTower();
})