const time_el = document.querySelector(".timer")
const btn = document.getElementById("btn");
const btn_stop = document.getElementById("btn__stop");
const btn_reset = document.getElementById("btn__reset");


let seconds = 0
let interval = null

// events
btn.addEventListener('click', startTimer);
btn_stop.addEventListener('click', stopTimer);
btn_reset.addEventListener('click', resetTimer);

// methods
function timer(){
     seconds++   

     // format seconds
     let hours = Math.floor(seconds / 3600)
     let mins = Math.floor((seconds - (hours * 3600)) / 60)
     let secs = seconds % 60

     if (secs < 10) secs = '0' + secs;
     if (mins < 10) mins = '0' + mins;
     if (hours < 10) hours = '0' + hours;
     
     

     time_el.innerHTML = `<span className="timer__part timer_part--hours">${hours}</span>
     <span className="timer__part">:</span>
     <span className="timer__part timer_part--minutes">${mins}</span>
     <span className="timer__part">:</span>
     <span className="timer__part timer_part--seconds">${secs}</span>`

}
timer();


function startTimer(){
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function stopTimer(){
    clearInterval(interval);
    interval = null
}


function resetTimer() {
    stopTimer();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

resetTimer();




