const startButton = document.getElementById("startAR");

startButton.addEventListener("click", () => {

 alert("準備開始探索！");
 window.location.href = "npc.html";
});


const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");


menuBtn.addEventListener("click",()=>{

menuPanel.classList.toggle("active");

menuBtn.classList.toggle("close");

});