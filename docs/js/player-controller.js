/*
================================
CURA Player Controller

Version 3.0

Stable FPS Movement

Features:
- Mouse Look
- WASD Movement
- Stable Collision
- Debug Friendly

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


import {

PointerLockControls

}

from
"https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/controls/PointerLockControls.js";


import {

checkPositionCollision

}

from "./collision-system.js";





// ==============================
// Keyboard
// ==============================


const keys = {

KeyW:false,

KeyA:false,

KeyS:false,

KeyD:false

};





// ==============================
// Create Player
// ==============================


export function createPlayer(

camera,

renderer

){



const controls =
new PointerLockControls(

camera,

renderer.domElement

);





// ==============================
// Start Position
// ==============================


camera.position.set(

0,

1.6,

2.5

);






// ==============================
// Pointer Lock
// ==============================


renderer.domElement.addEventListener(

"click",

()=>{


controls.lock();


}

);





controls.addEventListener(

"lock",

()=>{


console.log(
"CURA FPS Locked"
);


}

);




controls.addEventListener(

"unlock",

()=>{


console.log(
"CURA FPS Unlocked"
);


}

);








// ==============================
// Keyboard
// ==============================


window.addEventListener(

"keydown",

(e)=>{


if(keys[e.code] !== undefined){


keys[e.code]=true;


}


}

);





window.addEventListener(

"keyup",

(e)=>{


if(keys[e.code] !== undefined){


keys[e.code]=false;


}


}

);









// ==============================
// Movement
// ==============================


const speed = 0.12;



function update(){



if(!controls.isLocked){

return;

}



const direction =
new THREE.Vector3();




if(keys.KeyW){

direction.z -= 1;

}


if(keys.KeyS){

direction.z += 1;

}


if(keys.KeyA){

direction.x -= 1;

}


if(keys.KeyD){

direction.x += 1;

}




if(
direction.length()===0
){

return;

}



direction.normalize();





const move =
direction.multiplyScalar(
speed
);





const old =
camera.position.clone();






// Horizontal Move


controls.moveRight(

move.x

);



controls.moveForward(

-move.z

);







// Collision


if(

checkPositionCollision(

camera.position

)

){


camera.position.copy(

old

);


}



}







return {


controls,


update


};



}