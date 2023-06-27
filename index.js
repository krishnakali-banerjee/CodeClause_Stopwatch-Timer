const clock = setInterval(function displayTime() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var duration = document.getElementById('ampm');

    if (hours >= 12) {
        duration.innerHTML = 'PM';
        hours = hours % 12;
    } else {
        duration.innerHTML = 'AM';
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = mins;
    document.getElementById('sec').innerHTML = secs;

}, 1000);

function button_stopvisible() {
    document.getElementById("stop_visible").style.display = "block";
    document.getElementById("clock").style.display = "none";
    document.getElementById("timer_visible").style.display = "none";
}

function button_timervisible() {
    document.getElementById("timer_visible").style.display = "block";
    document.getElementById("clock").style.display = "none";
    document.getElementById("stop_visible").style.display = "none";
}

//STOPWATCH


let hr = 0;
let min = 0;
let sec = 0;
let millisec = 0;
lapno = 0;

function startfunc() {
    document.getElementById('start');
    timer = true;
    stopwatch_func();
    // document.getElementById("start").style.display = "none";
    document.getElementById("lap").style.display = "block";
}

function pausefunc() {
    document.getElementById('pause');
    timer = false;
}

const laps = document.getElementById("lap_id");

function lapfunc() {
    // lapno++;
    // let p = document.querySelector('.laps')
    const li = document.createElement("li");
    const num = document.createElement("div");
    const timestamp = document.createElement("div");

    li.setAttribute("class", "lap_item");
    num.setAttribute("class", "number");
    timestamp.setAttribute("class", "time_stamp");
    timestamp.innerHTML = `${hr}:${min}:${sec}:${millisec}`;

    li.append(num, timestamp);
    laps.append(li);

}

function resetfunc() {
    document.getElementById('reset');
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    document.getElementById('stop_hour').innerHTML = "00";
    document.getElementById('stop_min').innerHTML = "00";
    document.getElementById('stop_sec').innerHTML = "00";
    document.getElementById('stop_msec').innerHTML = "00";

    document.getElementById('lap_id').style.display = "None";
    document.getElementById("lap").style.display = "none";
    document.getElementById("back").style.display = "block";

}

function stopwatch_func() {
    document.getElementById("lap").style.display = "block";
    document.getElementById("back").style.display = "none";
    if (timer) {
        millisec++;
        if (millisec == 100) {
            sec++;
            millisec = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let msecString = millisec;

        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (millisec < 10) {
            msecString = "0" + msecString;
        }

        document.getElementById('stop_hour').innerHTML = hrString;
        document.getElementById('stop_min').innerHTML = minString;
        document.getElementById('stop_sec').innerHTML = secString;
        document.getElementById('stop_msec').innerHTML = msecString;
        setTimeout(stopwatch_func, 10);
    }
}


//TIMER

const tmhour = document.getElementById('timer_hour');
const tmmin = document.getElementById('timer_min');
const tmsec = document.getElementById('timer_sec');

var interval = null;
var total = 0;

totalValue = () => {
    total = Number(tmhour.value) * 3600 + Number(tmmin.value) * 60 + Number(tmsec.value);
}

Timer = () => {
    totalValue();
    total--;

    if (total >= 0) {
        var newhr = Math.floor(total / 3600);
        var newmin = Math.floor((total / 60) - (newhr * 60));
        var newsec = total - ((newhr * 3600) + (newmin * 60));

        tmhour.value = newhr;
        tmmin.value = newmin;
        tmsec.value = newsec;

    } else {
        var audio = new Audio('timer.mp3');
        setTimeout(function () {
            audio.play();
        },1);
        tmresetfunc();
    }
}

function tmstartfunc() {
    document.getElementById('timer_start');
    clearInterval(interval);
    interval = setInterval(Timer, 1000)
}

function tmresetfunc() {
    document.getElementById('timer_reset');
    clearInterval(interval);
    tmhour.value = "00";
    tmmin.value = "00";
    tmsec.value = "00";
}

function backfunc(){
    document.getElementById('clock').style.display="block";
    document.getElementById('stop_visible').style.display="none";
    document.getElementById('timer_visible').style.display="none";
}
