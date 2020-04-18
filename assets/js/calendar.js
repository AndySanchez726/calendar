

// current day and time
var currentDate = function () {
    var date = moment().format("MMMM Do YYYY hh:mm:ss");
    $("#currentDay").remove("p");
    $("header").append('<p id="currentDay" class="lead"></p>')
    $("#currentDay").append(date);
};
currentDate();
setInterval(function() {
    if ( $("#currentDay").html > moment().format("MMMM Do YYYY hh:mm:ss")) {
        currentDate();
    }
}, 1000);

