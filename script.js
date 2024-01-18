const body=document.body;
const slides=document.querySelectorAll(".card-img");
const left=document.getElementById("left");
const right=document.getElementById("right");

let activeSlides=0;

function setbg(){
    body.style.backgroundImage=slides[activeSlides].style.backgroundImage;
}
function setActive(){
    slides.forEach((a)=>a.classList.remove("active"));
    slides[activeSlides].classList.add("active");
}
right.addEventListener("click",()=>{
    activeSlides++;
    if(activeSlides > slides.length-1){
        activeSlides=0;
    }
    setbg();
    setActive();
})
left.addEventListener("click",()=>{
    activeSlides--;
    if(activeSlides<0){
       activeSlides= slides.length-1;
    }
    setbg();
    setActive();
})