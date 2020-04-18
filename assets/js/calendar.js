

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

// add event to time blocks
 
//on click edit time block
$(".container").on("click", "#event", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("col")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
 });

// on blue textarea goes back to <p>
$(".container").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();
    console.log(text)
    var eventP = $("<p>")
        .addClass("col")
        .attr("id", "event")
        .text(text)
    $(this).replaceWith(eventP);
});