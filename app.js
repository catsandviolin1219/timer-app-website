var hours = 1
var minutes = 1
var seconds = 1

function disableButtons() {
    if (hours == 0) {
        document.getElementById("hourDown").disabled = true;
        document.getElementById("hourDown").style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else {
        document.getElementById("hourDown").disabled = false;
        document.getElementById("hourDown").style.backgroundColor = 'rgb(65, 65, 65)';
    }
    if (minutes == 0) {
        document.getElementById("minuteDown").disabled = true;
        document.getElementById("minuteDown").style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else {
        document.getElementById("minuteDown").disabled = false;
        document.getElementById("minuteDown").style.backgroundColor = 'rgb(65, 65, 65)';
    }
    if (minutes == 59) {
        document.getElementById("minuteUp").disabled = true;
        document.getElementById("minuteUp").style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else {
        document.getElementById("minuteUp").disabled = false;
        document.getElementById("minuteUp").style.backgroundColor = 'rgb(65, 65, 65)';
    }
    if (seconds == 0) {
        document.getElementById("secondDown").disabled = true;
        document.getElementById("secondDown").style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else {
        document.getElementById("secondDown").disabled = false;
        document.getElementById("secondDown").style.backgroundColor = 'rgb(65, 65, 65)';
    }
    if (seconds == 59) {
        document.getElementById("secondUp").disabled = true;
        document.getElementById("secondUp").style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else {
        document.getElementById("secondUp").disabled = false;
        document.getElementById("secibdUp").style.backgroundColor = 'rgb(65, 65, 65)';
    }
}

function hourUp() {
    hours++;
    document.getElementById("hour").innerHTML = hours.toString();
    disableButtons();
}
function hourDown() {
    hours--;
    document.getElementById("hour").innerHTML = hours.toString();
    disableButtons();
}
function minuteUp() {
    minutes++;
    document.getElementById("minute").innerHTML = minutes.toString();
    disableButtons();
}
function minuteDown() {
    minutes--;
    document.getElementById("minute").innerHTML = minutes.toString();
    disableButtons();
}
function secondUp() {
    seconds++;
    document.getElementById("second").innerHTML = seconds.toString();
    disableButtons();
}
function secondDown() {
    seconds--;
    document.getElementById("second").innerHTML = seconds.toString();
    disableButtons();
}

function countdown() {
    if (seconds == 0) {
        if (minutes == 0) {
            if (hours == 0) {
                // end code
            }
            else {
                hours--;
                minutes = 59;
                seconds = 59
            }
        }
        else {
            minutes--;
            seconds = 59;
        }
    }
    else {
        seconds--;
    }
    document.getElementById("second").innerHTML = seconds.toString();
    document.getElementById("minute").innerHTML = minutes.toString();
    document.getElementById("hour").innerHTML = hours.toString();
}

function startTimer() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }

    setInterval(countdown, 1000);
}