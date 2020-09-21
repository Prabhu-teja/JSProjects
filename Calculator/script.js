var clear=document.getElementById("clear");
var input_output=document.getElementById("input_output");
clear.addEventListener("click",()=>{
    console.log(document.getElementById("input_output").value);
    input_output.value="";
})

var equal=document.getElementById("equal");
equal.addEventListener("click",()=>{
    document.execCommand("2+3");
    if(isNaN(eval(input_output.value))){
        input_output.value="Not a Number";
    }
    else{
        input_output.value=eval(input_output.value);
    }
})