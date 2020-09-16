const time=document.getElementById("time");

setInterval(setTime,1000);

function setTime(){
    let hours=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();
    let meridian="AM";

    if(hours>=12){
        meridian="PM";
    }
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    hours=hours%12;
    if(meridian=="PM" && hours==0){
        hours=12;
    }
    if(hours<10){
        hours="0"+hours;
    }
    time.innerText=hours+":"+minutes+":"+seconds+" "+meridian;
    

}