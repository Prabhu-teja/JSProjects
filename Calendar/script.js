const month=document.querySelector(".month");
const day=document.querySelector(".day");
const date=document.querySelector(".date");
const year=document.querySelector(".year");

const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

setInterval(()=>{
    let date2=new Date();
    month.innerText=months[date2.getMonth()];
    day.innerText=days[date2.getDay()-1];
    date.innerText=date2.getDate();
    year.innerText=date2.getFullYear();
})