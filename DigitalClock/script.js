const hr=document.querySelector(".hr");
const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const meridian=document.querySelector(".meridian");

setInterval(()=>{    
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    if(hh>=12){
        meridian.innerText="PM";
    }
    else{
        meridian.innerText="AM";
    }
    hh=hh%24;
    hh=hh<10?"0"+hh:hh;
    mm=mm<10?"0"+mm:mm;
    ss=ss<10?"0"+ss:ss;
    hr.innerText=hh;
    min.innerText=mm;
    sec.innerText=ss;
});