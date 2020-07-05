window.addEventListener("load",()=>{
const sounds=document.querySelectorAll(".ad");
const pads=document.querySelectorAll(".sounds div");
console.log(pads);
pads.forEach((pad,index)=>{
pad.addEventListener("click",()=>{
sounds[index].currentTime=0;
sounds[index].play();

});
});

});