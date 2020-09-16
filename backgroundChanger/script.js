var btn=document.getElementById("btn");

btn.addEventListener("click",() => {
    setInterval(change,500);
});

function random(){
    return `hsl(`+Math.floor(Math.random()*360)+`,100%,50%)`;
}

function change(){
    document.body.style.background=random();
}