function humanDateToEpoch(enteredHumanDate){
    let enteredHumanDateString = `${enteredHumanDate.year}/${enteredHumanDate.month}/${enteredHumanDate.date} ${enteredHumanDate.hours}:${enteredHumanDate.minutes}:${enteredHumanDate.seconds}`;
    console.log(enteredHumanDateString);
    return Date.parse(new Date(enteredHumanDateString));
  }
  

function showTime(){
    const test=document.querySelector(".digital-clock");
    const test2=document.querySelector(".epoch-time");
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let year = dateTime.getFullYear();
    let date = dateTime.getDate();
    let month = dateTime.getMonth();

    let humanDate={
        year,
        month,
        date,
        hours,
        minutes,
        seconds
      };
    let epochDateTime = humanDateToEpoch(humanDate);
    console.log(epochDateTime);

    hours = hours<10? "0"+hours:hours;
    minutes = minutes<10?"0"+minutes:minutes;
    seconds = seconds<10? "0"+seconds:seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds;
    test.innerHTML=currentTime;
    test2.innerHTML=""+epochDateTime;
    setInterval(showTime,1000);
}

window.addEventListener('load',showTime);