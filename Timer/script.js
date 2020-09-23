var submit=document.getElementById("start");
var enter=document.getElementById("counter");

function btn(){
    var btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
        document.getElementById("message").style.display="none";
    });
}
btn();
submit.addEventListener("click",timer);
enter.addEventListener("keyup",()=>{
    if(event.keyCode===13){
        timer();
    }
});
function timer(){
    var start=document.getElementById("counter").value;
    //console.log("STARTED");
    var time=start*60;
    var countdown=document.getElementById("countdown");
    var func=setInterval(()=>{
        
        enter.readOnly=true;
        submit.style.pointerEvents="none";
        enter.style.cursor="not-allowed";
        var minutes=Math.floor(time/60);
        var seconds=time%60;
        seconds=seconds<10?"0"+seconds:seconds;
        minutes=minutes<10?"0"+minutes:minutes;
        countdown.innerHTML=minutes+":"+seconds;
        time--;
        if(time<0){
            //console.log("ENDED");
            document.getElementById("message").style.display="";
            enter.readOnly=false;
            submit.style.pointerEvents="";
            enter.style.cursor="text";

            clearInterval(func);
        }

    },1000);
}