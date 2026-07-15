const burger = document.getElementById("burgerBtn");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
});

document.querySelectorAll(".header__link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        burger.classList.remove("active");

    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

const numbers = document.querySelectorAll(".stat__number");

numbers.forEach(number=>{

const target = parseInt(number.innerText.replace(/\D/g,""));

let count = 0;

const update = ()=>{

count += target/100;

if(count<target){

number.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

number.innerText=target+"+";

}

}

update();

});

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.append(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"flex":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".header__link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const cards=document.querySelectorAll(".case-card,.program-card,.step");

const reveal=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.25
});

cards.forEach(card=>{

reveal.observe(card);

});

document.querySelectorAll(".hero__cta,.header__cta,.btn-submit")
.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

hero.style.backgroundPositionY=window.scrollY*0.5+"px";

});


const progress=document.createElement("div");

progress.className="progress";

document.body.append(progress);

window.addEventListener("scroll",()=>{

const height=document.documentElement.scrollHeight-window.innerHeight;

const percent=window.scrollY/height*100;

progress.style.width=percent+"%";

});

window.addEventListener("load",()=>{

document.querySelector(".preloader").classList.add("hide");

});