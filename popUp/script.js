const container = document.getElementById("popup-container");

btn=document.getElementById("btn");

btn.addEventListener("click",() => {
    show();
});

function show(){
    const popup=document.createElement('div');
    popup.classList.add('toast');
    popup.innerText="This is a popup";

    container.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },2000);
}