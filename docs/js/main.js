

const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");


if(menuBtn && menuPanel){

menuBtn.addEventListener("click",()=>{

menuPanel.classList.toggle("active");

menuBtn.classList.toggle("close");

});

}

