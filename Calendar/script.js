const month=document.querySelector(".month");
const day=document.querySelector(".day");
const date=document.querySelector(".date");
const year=document.querySelector(".year");

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

setInterval(()=>{
    const present=new Date();
    month.innerText=months[present.getMonth()];
    day.innerText=days[present.getDay()];
    date.innerText=present.getDate();
    year.innerText=present.getFullYear();
})