const text="Hello.This is Jarvis, your personal Assistant.";
let index =1;
function writeText(){
    document.getElementById("message").innerText = text.slice(0,index);
    index++;
    if(index > text.length-1){
        index=1;
    }
}

setInterval(writeText,200);