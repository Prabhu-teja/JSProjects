var accoridion=document.getElementsByClassName("box");
for(var i=0;i<accoridion.length;i++){
    accoridion[i].addEventListener("click",function(){
        this.classList.toggle("active");
    });
}