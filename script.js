
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
    /////pull this back line 61


    function watchTower() {
        var currentHour = parseInt(moment().format("HH")); //hour track
        console.log(currentHour);

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);//find the time/check for claas change
            console.log(blockHour, currentHour, $(this))
            ///////////below determiness background colors/sets class 
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }

            // recalls storage info for text area
            console.log(parent)
            $(this).val(storageInfo)
            var parent = $(this).attr("id");
            var storageInfo = localStorage.getItem(parent)
            console.log(storageInfo)
            $(this).children(".description").val(storageInfo)
        })

    }
    watchTower();
});
// military time id and storage value 
//tic tac toe exercise relevant remember to go back to that one #8 dom traversal for future referance