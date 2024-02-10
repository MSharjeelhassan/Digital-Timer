let hours;
let minutes;
let seconds;
let milliseconds;


// let hrs = document.getElementById('hrs');
// let mins= document.getElementById('mins')
// let secs=document.getElementById('secs')
// let mil=document.getElementById('milliseconds')

function input() {

    hours = document.getElementById('hrs').value;
    hours = parseInt(hours);
    minutes = document.getElementById('mins').value;
    minutes = parseInt(minutes);
    seconds = document.getElementById('secs').value;
    seconds = parseInt(seconds)
    milliseconds = parseInt(document.getElementById('milliseconds').value);

    console.log(hours, typeof hours);

    console.log(seconds, typeof seconds);
    console.log(milliseconds, typeof milliseconds);

// function show(){


// }
    // hrs.value = hours;
    // mins.value = minutes;
    // secs.value=seconds;
    // mil.value=milliseconds;
}



let interval;
function startTimer() {
    interval = setInterval(function () {
        milliseconds--;
        console.log(milliseconds)
        if (milliseconds == 10) {
            console.log(milliseconds)
            milliseconds = 0;
            seconds--;
            if (seconds == 60) {
                seconds = 0;
                minutes--;

                if (minutes == -60) {
                    minutes = 0;
                    hours--
                }
            }
            console.log("aa")
        }
    }, 100)
    input()
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0
    input();
}