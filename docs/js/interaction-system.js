/*
================================

CURA Interaction System

v0.5

Mouse Click Gallery Entrance

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


import {

galleryData

}

from "./gallery-data.js";


import {

openGalleryUI

}

from "./gallery-ui.js";


// =====================
// Core
// =====================


const raycaster =
new THREE.Raycaster();


const mouse =
new THREE.Vector2(
0,
0
);



let scene = null;

let camera = null;







// =====================
// Init
// =====================


export function initInteraction(

_scene,

_camera

){


scene = _scene;

camera = _camera;



window.addEventListener(

"click",

handleClick

);



console.log(

"Mouse Interaction Ready"

);



}







// =====================
// Click Event
// =====================



function handleClick(event){


const galleryOpen =
document
.querySelector("#gallery-overlay")
?.classList.contains("show");


const pageOpen =
document
.querySelector("#gallery-page")
?.classList.contains("show");



if(
galleryOpen ||
pageOpen
){

return;

}


if(
!scene ||
!camera
){

return;

}



mouse.x =
(event.clientX / window.innerWidth) * 2 - 1;


mouse.y =
-(event.clientY / window.innerHeight) * 2 + 1;



raycaster.setFromCamera(

mouse,

camera

);



const intersects =

raycaster.intersectObjects(

scene.children,

true

);





for(
const hit of intersects
){


const target =
findInteractable(
hit.object
);



if(!target){

continue;

}





handleInteraction(
target
);



return;



}



}









// =====================
// Find Interactable Parent
// =====================


function findInteractable(

object

){



let current =
object;



while(current){



if(

current.userData &&

current.userData.interactable

){


return current;


}



current =
current.parent;



}



return null;



}








// =====================
// Interaction Router
// =====================


function handleInteraction(

object

){



const data =
object.userData;




// Gallery Entrance

if(

data.type === "gallery-door"

){



openGallery(

data.galleryID

);



return;


}




console.log(

"Non gallery object:",

object

);



}








// =====================
// Gallery
// =====================


function openGallery(id){


const gallery =
galleryData[id];


if(!gallery){

console.warn(
"Gallery Not Found:",
id
);

return;

}



console.log(
"================================"
);


console.log(
"Enter Gallery:",
gallery.title
);


console.log(
"ID:",
id
);


console.log(
"================================"
);



openGalleryUI(
gallery
);


}








// =====================
// Debug
// =====================


window.CURA_INTERACTION = {


test(){


console.log(

"Interaction System v0.5"

);


}



};