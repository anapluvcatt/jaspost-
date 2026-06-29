const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");

let current = 0;

function updateSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[current].classList.add("active");

counter.innerHTML =
`${current+1} / ${slides.length}`;

bar.style.width =
(current/(slides.length-1))*100 + "%";

}

function nextSlide(){

if(current < slides.length-1){

current++;

updateSlide();

}

}

function prevSlide(){

if(current > 0){

current--;

updateSlide();

}

}

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextSlide();

}

if(e.key==="ArrowLeft"){

prevSlide();

}

});

updateSlide();
