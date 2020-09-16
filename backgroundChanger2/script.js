var btn=document.getElementById("btn");

btn.addEventListener("click",() => {
    setInterval(change,500);
});

function random(){
    var color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)
    +','+Math.floor(Math.random()*255)+')';
    var a='linear-gradient('+Math.floor(Math.random()*90)+'deg,'+color+',';
    var color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)
    +','+Math.floor(Math.random()*255)+')';
    a+=(color+')');
    document.body.style.background=a;
}

function change(){
    document.body.style.background=random();
}