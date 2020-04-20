var events = {
    // time:["event at 7","event at 8"]
};
var container = $(".row").each(function(index) {})
console.log(container[2])
console.log(events)
 var saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
}

var createEvent = function(eventText, eventTime, timeBlock) {
    // clicking on event field in time block
    $(".container").on("click", "#event", function() {
        //event text feild
        var eventField = $(this)
            .text()
            .trim();
            console.log(eventField)
        var eventInput = $("<textarea>")
            .addClass("col")
            .val(eventField);
        $(this).replaceWith(eventInput);
        eventInput.trigger("focus");
    
        //when click save button <textarea> goes back to <p>
        console.log(this)
        eventInput.closest("div").on("click", "#save-button", function() {
            console.log("save buttton was clicked")
            console.log(eventInput.val())
            var eventText = eventInput.val()
            console.log(eventText)
            var eventP = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(eventText)
            var index = $(this).closest("div")
                .index()
                console.log(events.time[index])
            events.time[index] = eventP.text()
            console.log(events.time[index])
            saveEvents();
        })
        
    });
}

createEvent();

var loadEvents = function () {
    events = JSON.parse(localStorage.getItem("events"));

    // if nothing is in local storage, create a new object to track all time blocks
    if (!events) {
        events = {
            time: []
        };
    }

    // loop over object properties
    $.each(events, function(list, arr) {
        console.log(list, arr);
        // then loop over sub array
        console.log(events.time[0])

        arr.forEach(function(event) {
            var event0 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[0])
            $("#seven #event").replaceWith(event0)

            var event1 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[1])
            $("#eight #event").replaceWith(event1)

            var event2 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[2])
            $("#nine #event").replaceWith(event2)

            var event3 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[3])
            $("#ten #event").replaceWith(event3)
            
            var event4 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[4])
            $("#eleven #event").replaceWith(event4)

            var event5 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[5])
            $("#twelve #event").replaceWith(event5)

            var event6 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[6])
            $("#one #event").replaceWith(event6)

            var event7 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[7])
            $("#two #event").replaceWith(event7)

            var event8 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[8])
            $("#three #event").replaceWith(event8)

            var event9 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[9])
            $("#four #event").replaceWith(event9)

            var event10 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[10])
            $("#five #event").replaceWith(event10)

            var event11 = $("<p>")
                .addClass("col")
                .attr("id", "event")
                .text(arr[11])
            $("#six #event").replaceWith(event11)

            
        
        })
    })
    saveEvents();
};
console.log(events.length)

loadEvents();


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

// check to see if its the current hour
var timeColor = function () {
    var currentHour = moment().format("MM DD YY HH") 
    // 7 am
    var seven = moment().format("MM DD YY 07")
    if (currentHour > seven) {
        $("#seven").addClass("bg-secondary")
    } 
    else if (currentHour === seven){
        $("#seven").addClass("bg-warning")
    }
    else if (currentHour < seven) {
        $("#seven").addClass("bg-success")
    }

    // 8 am
    var eight = moment().format("MM DD YY 08")
    if (currentHour > eight) {
        $("#eight").addClass("bg-secondary")
    } 
    else if (currentHour === eight){
        $("#eight").addClass("bg-warning")
    }
    else if (currentHour < eight) {
        $("#eight").addClass("bg-success")
    }

    // 9 am
    var nine = moment().format("MM DD YY 09")
    if (currentHour > nine) {
        $("#nine").addClass("bg-secondary")
    } 
    else if (currentHour === nine){
        $("#nine").addClass("bg-warning")
    }
    else if (currentHour < nine) {
        $("#nine").addClass("bg-success")
    }

    //10 am
    var ten = moment().format("MM DD YY 10")
    if (currentHour > ten) {
        $("#ten").addClass("bg-secondary")
    } 
    else if (currentHour === ten){
        $("#ten").addClass("bg-warning")
    }
    else if (currentHour < ten) {
        $("#ten").addClass("bg-success")
    }

    // 11 am
    var eleven = moment().format("MM DD YY 11")
    if (currentHour > eleven) {
        $("#eleven").addClass("bg-secondary")
    } 
    else if (currentHour === eleven){
        $("#eleven").addClass("bg-warning")
    }
    else if (currentHour < eleven) {
        $("#eleven").addClass("bg-success")
    }

    // 12 pm
    var twelve = moment().format("MM DD YY 12")
    if (currentHour > twelve) {
        $("#twelve").addClass("bg-secondary")
    } 
    else if (currentHour === twelve){
        $("#twelve").addClass("bg-warning")
    }
    else if (currentHour < twelve) {
        $("#twelve").addClass("bg-success")
    }

    // 1 pm
    var one = moment().format("MM DD YY 13")
    if (currentHour > one) {
        $("#one").addClass("bg-secondary")
    } 
    else if (currentHour === one){
        $("#one").addClass("bg-warning")
    }
    else if (currentHour < one) {
        $("#one").addClass("bg-success")
    }

    // 2 pm
    var two = moment().format("MM DD YY 14")
    if (currentHour > two) {
        $("#two").addClass("bg-secondary")
    } 
    else if (currentHour === two){
        $("#two").addClass("bg-warning")
    }
    else if (currentHour < two) {
        $("#two").addClass("bg-success")
    }

    // 3 pm
    var three = moment().format("MM DD YY 15")
    if (currentHour > three) {
        $("#three").addClass("bg-secondary")
    } 
    else if (currentHour === three){
        $("#three").addClass("bg-warning")
    }
    else if (currentHour < three) {
        $("#three").addClass("bg-success")
    }

    // 4 pm
    var four = moment().format("MM DD YY 16")
    if (currentHour > four) {
        $("#four").addClass("bg-secondary")
    } 
    else if (currentHour === four){
        $("#four").addClass("bg-warning")
    }
    else if (currentHour < four) {
        $("#four").addClass("bg-success")
    } 

    // 5 pm
    var five = moment().format("MM DD YY 17")
    if (currentHour > five) {
        $("#five").addClass("bg-secondary")
    } 
    else if (currentHour === five){
        $("#five").addClass("bg-warning")
    }
    else if (currentHour < five) {
        $("#five").addClass("bg-success")
    }

    // 6 pm
    var six = moment().format("MM DD YY 18")
    if (currentHour > six) {
        $("#six").addClass("bg-secondary")
    } 
    else if (currentHour === six){
        $("#six").addClass("bg-warning")
    }
    else if (currentHour < six) {
        $("#six").addClass("bg-success")
    }
};
timeColor();
setInterval(() => {
    timeColor();
}, 1000);

