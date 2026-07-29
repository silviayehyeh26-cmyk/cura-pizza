/* =================================================
   CURA ALIVE STORY
   Room Camera Controller v1
================================================= */


const room3D =
document.querySelector(".room-3d");



if(room3D){


let targetX = 0;

let targetY = 0;


let currentX = 0;

let currentY = 0;





document.addEventListener(
"mousemove",
(e)=>{


    const x =
    e.clientX /
    window.innerWidth;


    const y =
    e.clientY /
    window.innerHeight;




    targetY =
    (x - 0.5) * 8;


    targetX =
    (0.5 - y) * 5;



});






function animate(){


    currentX +=
    (targetX-currentX)*0.05;


    currentY +=
    (targetY-currentY)*0.05;





    room3D.style.transform =

    `
    translate(-50%,-50%)

    rotateX(${currentX}deg)

    rotateY(${currentY}deg)
    `;




    requestAnimationFrame(
    animate
    );

}



animate();



}