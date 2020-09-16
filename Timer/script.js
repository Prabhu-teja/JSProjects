
let start=prompt("Enter time to start the counter in minutes");
let time=start*60;

function btn(){
    
    var btn =document.getElementById("btn");
    btn.addEventListener("click",()=>{
        document.getElementById("message").style.display="none";
    });

}

btn();

const countdown=document.getElementById("countdown");
start = start<10 ? "0"+start : start;
countdown.innerHTML=start+":00";
var timer = setInterval(update,1000);

function update(){
    if(time<0){
        document.getElementById("message").style.display="";
        clearInterval(timer);
        return;
    }
    let minutes=Math.floor(time/60);
    console.log(minutes);
    let seconds=time%60;
    seconds=seconds<10 ? "0"+seconds :seconds;
    minutes=minutes<10 ? "0"+minutes : minutes;
    countdown.innerHTML=minutes+":"+seconds;
    time--;
}