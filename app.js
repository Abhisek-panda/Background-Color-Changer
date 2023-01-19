var btn = document.querySelector("#btn");
var bgSpan = document.querySelector("#bg-span");

var colors = ["red", "green", "yellow", "blue"];

btn.addEventListener("click", ()=>{
    var newColor = colors[getNewColor()];
    document.body.style.backgroundColor= newColor;
    bgSpan.textContent= newColor;
})

function getNewColor(){
    return Math.floor(Math.random() * colors.length);
}