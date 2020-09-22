const search_box=document.getElementById("search-box");

search_box.addEventListener("keyup",()=>{
    search();
});
function search(){
    const projects=document.getElementsByClassName("projects")[0];
    var a=projects.getElementsByClassName("project");
    const input=search_box.value;
    for(var i=0;i<a.length;i++){
        if(a[i].innerText.toLowerCase().indexOf(input.toLowerCase())>=0){
            a[i].style.display="";
        }
        else{
            a[i].style.display="none";
        }
    }
}