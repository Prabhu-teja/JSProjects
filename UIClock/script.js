const hrs=document.querySelector(".hr");
const mins=document.querySelector(".min");
const secs=document.querySelector(".sec");

const deg=6;
setInterval(()=>{
        
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    hrs.style.transform='rotateZ('+((hh*30)+(mm/12))+'deg)';
    mins.style.transform='rotateZ('+(mm*deg)+'deg)';
    secs.style.transform='rotateZ('+(ss*deg)+'deg)';
});
const toggler=document.querySelector(".toggle");

setInterval(()=>{
    if(toggler.checked){
        document.getElementById("mode").innerText=" Light Mode";
        document.body.style.color="white";
        document.body.style.background="black";
    }
    else{
        document.getElementById("mode").innerText=" Dark Mode";
        document.body.style.background="initial";
        document.body.style.color="black";
    }
})