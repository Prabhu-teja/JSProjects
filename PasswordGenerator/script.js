var copy=document.getElementById("copy");
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(document.getElementById("password").value);
    document.getElementById("popup").classList.toggle("active");
    setTimeout(()=>{
        document.getElementById("popup").classList="popup";
    },2000)
});

var generate=document.getElementById("generate");
generate.addEventListener("click",()=>{
    document.getElementById("password").value=password();
})

function password(){
    var pass="";
    var temp="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()`-=~_+\|}{[]:;'?><,./"
    for(var i=0;i<Math.floor(Math.random()*(15-10+1)+10);i++){
        pass+=temp.charAt(Math.floor(Math.random()*temp.length));
    }
    return pass;
}