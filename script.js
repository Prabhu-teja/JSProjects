function tog(){
    var toggle=document.getElementById("toggle");

    if(toggle.checked){
        document.body.style.background="skyblue";
        document.body.style.color="white";
    }
    else{
        document.body.style.background="#f3f3f3";
        document.body.style.color="black";
    }
}
setInterval(tog,10);