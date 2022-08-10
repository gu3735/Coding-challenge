import "./styles.css";

let year = 2022
let eve = new Date(`${year}-12-24`);
let eveMS = eve.getTime()
const h2 = document.querySelector("h2")


const calculator = {
    MSToDay : function(MS){
        return Math.floor((MS/(1000*60*60*24)))
    },
    MSToHour : function(MS){
        return String(Math.floor((MS/(1000*60*60)) % 24)).padStart(2, "0")
    },
    MSToMinute : function(MS){
        return String(Math.floor((MS/(1000*60)) % 60)).padStart(2, "0")
    },
    MSToSecond : function(MS){
        return String(Math.floor((MS/(1000)) % 60)).padStart(2, "0")
    },
}


function isPlural(number, word){
    if(number==1){
        return word;
    } else{
        return word + 's';
    }
}


function getTime() {
    if(eveMS<Date.now()){
    year += 1;
    eve = new Date(`${year}-12-24`);
    eveMS = eve.getTime();
    }
    
    const now = Date.now();
    const timeMS = eveMS - now;
    const days = calculator.MSToDay(timeMS)
    const hours = calculator.MSToHour(timeMS)
    const minute = calculator.MSToMinute(timeMS)
    const second = calculator.MSToSecond(timeMS)
    h2.innerText = `${days}${isPlural(days, "day")} ${hours}${isPlural(hours, "hour")} ${minute}${isPlural(minute, "minute")} ${second}${isPlural(second,"second")}`;
}


setInterval(getTime, 100)
