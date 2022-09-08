let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelectorAll("a");
let inshkak = document.querySelector("nav");
let icon = document.querySelectorAll(".icon");
let ul = document.querySelectorAll("ul");
let i = document.querySelectorAll("i");
let search =document.getElementById("button");
let inputs = document.querySelector(".search")
let sea = document.querySelector(".sea");
let esc= document.querySelector(".fa-times-circle");
let im = document.querySelector(".im");
let heart=document.querySelectorAll("#heart");
let numer_heart=document.querySelectorAll("#numer_heart");
let video =document.querySelectorAll("video");
let input_search = document.querySelector("#input_search");
let skills=document.querySelectorAll("#skillings");
let con = document.querySelector("#content");
let shady = document.querySelector(".content1");
let about= document.querySelector(".content");
let about_img= document.querySelector(".imageer");
let about_pho= document.querySelector(".pho");
let box_stetus=document.querySelectorAll(".box_status");
let baby=document.querySelector(".baby");
let loading=document.querySelector(".loading");
console.log(loading);













window.onload=function(){
        
      setTimeout(function(){
         loading.style.display="none";
      },2000)
}
window.onscroll=function(){
       if(window.scrollY >= con.offsetTop-250){
         
        skills.forEach((skills)=>{
                skills.style.width = skills.dataset.width;
               
        })
       }


       if(window.scrollY >= about.offsetTop-250){
        box_stetus[0].classList.add("animate__animated"); 
        box_stetus[0].classList.add("animate__fadeInLeft");
       }

}
search.addEventListener("click",function(){



        window.open("https://www.google.com/search?q="+input_search.value);  
        

       if(input_search.value==""){
        sea.classList.toggle("sra");         
        sea.classList.toggle("sea");  
       }
})
esc.addEventListener("click",function() { 
        sea.classList.toggle("sea");
        sea.classList.toggle("sra");  
})
nav[6].onclick=function(){
       inshkak.classList.toggle("active");
       i[0].classList.toggle("fa-x");
}
inshkak.addEventListener("blur",function(){
        this.classList.remove("active");
})
icon[7].addEventListener("click",function(){
        body.classList.toggle("dark");
        i[9].classList.toggle("fa-sun");
})
im.children[0].onmouseenter=function(){
        im.children[1].classList.toggle("im_p1");
        im.children[1].lastElementChild.innerHTML="I don't know what I write in my website";
}
im.children[0].onmouseleave=function(){
        im.children[1].classList.toggle("im_p1");
        im.children[1].lastElementChild.innerHTML="";
}
let hearts=[];
let numer_heart_ss=[];
for (let i=0;i<heart.length;i++){
        hearts[i]=heart[i];
        numer_heart_ss[i]=numer_heart[i];
        hearts[i].addEventListener('click',function(){
                heart[i].classList.toggle("redss"); 
                if(numer_heart_ss[i].innerHTML==1){
                        numer_heart_ss[i].innerHTML= +numer_heart_ss[i].innerHTML-1;
                }
                else if(numer_heart.innerHTML!=1){
                        numer_heart_ss[i].innerHTML= +numer_heart_ss[i].innerHTML+1;
                }
        })
      
}
video[0].onplay=function(){
        video[1].pause();
        video[2].pause();
        video[3].pause();
}
video[1].onplay=function(){
        video[0].pause();
        video[2].pause();
        video[3].pause();
}
video[2].onplay=function(){
        video[0].pause();
        video[1].pause();
        video[3].pause();
        
}
video[3].onplay=function(){
        video[0].pause();
        video[1].pause();
        video[2].pause();
}


