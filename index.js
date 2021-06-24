const colors=["green","red","yellow","blue","white","grey","pink"];
const btn=document.getElementById("btn");
const nam=document.querySelector("h4");
const color=document.querySelector("span.color");
btn.addEventListener("click",function(){
    var randomNumber=Math.floor((Math.random() * colors.length) + 0);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});
nam.addEventListener("click",function(){
    nam.textContent="clicked !";

});
document.addEventListener("click",function(){
    console.log("you clicked here");

});
