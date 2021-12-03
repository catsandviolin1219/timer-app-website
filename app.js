var hours = 1
var minutes = 1;
var seconds = 1;
var intervalId = 1;
var changing = "none";

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
function hourChange() {
    document.getElementById("timevaluebox").style.display = "block";
    document.getElementById("timevalue").value = hours;
    document.getElementById("timevalue").min = 0;
    changing = "hours";
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
function minuteChange() {
    document.getElementById("timevaluebox").style.display = "block";
    document.getElementById("timevalue").value = minutes;
    document.getElementById("timevalue").min = 0;
    document.getElementById("timevalue").max = 59;
    changing = "minutes";
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
function secondChange() {
    document.getElementById("timevaluebox").style.display = "block";
    document.getElementById("timevalue").value = seconds;
    document.getElementById("timevalue").min = 0;
    document.getElementById("timevalue").max = 59;
    changing = "seconds";
}

function change() {
    if (changing == "seconds") {
        seconds = +document.getElementById("timevalue").value;
        document.getElementById("second").innerHTML = seconds.toString();
    }
    if (changing == "hours") {
        hours = +document.getElementById("timevalue").value;
        document.getElementById("hour").innerHTML = hours.toString();
    }
    if (changing == "minutes") {
        minutes = +document.getElementById("timevalue").value;
        document.getElementById("minute").innerHTML = minutes.toString();
    }
    document.getElementById("timevaluebox").style.display = "none";
}



function countdown() {
    if (seconds == 0) {
        if (minutes == 0) {
            if (hours == 0) {
                document.getElementById("timeupbox").style.display = "block";
                var buttons = document.getElementsByTagName('button');
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.display = "inline";
                }

                playAlarm();

                clearInterval(intervalId);
                disableButtons();
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

    intervalId = setInterval(countdown, 1000);
}

function closeModal() {
    document.getElementById("timeupbox").style.display = "none";
}

function playAlarm() {
    var audio = new Audio('alarm.wav');
    audio.play();
}