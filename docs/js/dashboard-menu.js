const dashboardMenuBtn =
document.getElementById("dashboardMenuBtn");


const sidebar =
document.querySelector(".sidebar");


if(dashboardMenuBtn && sidebar){


dashboardMenuBtn.addEventListener(
"click",
()=>{


sidebar.classList.toggle("active");

dashboardMenuBtn.classList.toggle("close");


});


}