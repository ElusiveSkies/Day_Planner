var currentDayEl = $('#currentDay');


var currentTime = parseInt(moment().format('HH'));
// var planTimes = document.querySelector('.timeBlock').getAttribute('value');

var workDay = [
    {
        id: "0",
        hour: "8 am",
        time: 08,
        reminder: ""
    },
    {
        id: "1",
        hour: "9 am",
        time: 09,
        reminder: ""
    },
    {
        id: "2",
        hour: "10 am",
        time: 10,
        reminder: ""
    },
    {
        id: "3",
        hour: "11 am",
        time: 11,
        reminder: ""
    },
    {
        id: "4",
        hour: "12 pm",
        time: 12,
        reminder: ""
    },
    {
        id: "5",
        hour: "1 pm",
        time: 13,
        reminder: ""
    },
    {
        id: "6",
        hour: "2 pm",
        time: 14,
        reminder: ""
    },
    {
        id: "7",
        hour: "3 pm",
        time: 15,
        reminder: ""
    },
    {
        id: "8",
        hour: "4 pm",
        time: 16,
        reminder: ""
    },
    {
        id: "9",
        hour: "5 pm",
        time: 17,
        reminder: ""
    },
]

workDay.forEach(function (everyHour) {
    // creates timeblocks row
    var timeRow = $("<div>")
        .attr({
            "class": "row"
        });
    $(".container").append(timeRow);

    // creates time area
    var hourField = $("<div>")
        .text(`${everyHour.hour}`)
        .attr({
            "class": "col-sm time-block"
        });
    timeRow.append(hourField);
    // creates data area
    var hourEntry = $("<div>")
        .attr({
            "class": "col-sm-8 input description"
        });
    var reminderEntry = $("<textarea>")
    hourEntry.append(reminderEntry);
    reminderEntry.attr("id", everyHour.id);
    if (everyHour.time < moment().format("HH")) {
        reminderEntry.attr({
            "class": "past",
        })
    } else if (everyHour.time == moment().format("HH")) {
        reminderEntry.attr({
            "class": "present"
        })
    } else if (everyHour.time > moment().format("HH")) {
        reminderEntry.attr({
            "class": "future"
        })
    }
    timeRow.append(hourEntry);
    // created area for save button
    var saveField = $("<div>")
        .attr({
            "class": "col-sm saveBtn"
        });

    // creates save button
    var saveEntry = $("<button>")
        .attr({
            "class": "saveEvent"
        });
    var saveButton = $("<i class='far fa-save'></i>")

    saveEntry.append(saveButton);
    saveField.append(saveEntry);

    timeRow.append(saveField);
})

// displays the current day
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do, YYYY');
    currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// saves data to localStorage
function saveReminders() {
    localStorage.setItem("workDay", JSON.stringify(workDay));
}

// gets entered value for the clicked button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveReminder = $(this).siblings(".description").children("").attr("id");
    workDay[saveReminder].reminder = $(this).siblings(".description").children("").val();

    saveReminders();
})

function getValues() {
    // check for values in local storage & change to array
    var storedWorkDay = JSON.parse(localStorage.getItem("workDay"))
    for (var i = 0; i < storedWorkDay.length; i++) {
        if (storedWorkDay[i].reminder) {
            // creates variable for corresponding text area
            var reminderBox = document.getElementById(i)
            // grab the value of reminder value from the object and place it inside the box
            reminderBox.innerText = storedWorkDay[i].reminder
        }
    }
}

getValues();
