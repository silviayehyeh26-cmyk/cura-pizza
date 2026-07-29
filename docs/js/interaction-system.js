/*
================================

CURA Interaction System

Version 0.2

FPS Raycast + E Interaction

Features:
- Center Raycast
- Looking Detection
- Keyboard Interaction
- Memory Hook

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";




// =============================
// Raycaster
// =============================


const raycaster =
new THREE.Raycaster();


const center =
new THREE.Vector2(
0,
0
);





// =============================
// State
// =============================


let camera = null;

let scene = null;


let currentTarget = null;





// =============================
// Init
// =============================


export function initInteraction(

_scene,

_camera

){


scene = _scene;

camera = _camera;



window.addEventListener(

"keydown",

(event)=>{


    if(event.code === "KeyE"){


        interact();


    }


});



}







// =============================
// Update
// =============================


export function updateInteraction(){



if(
!camera ||
!scene
){

    return;

}






raycaster.setFromCamera(

center,

camera

);







const intersects =

raycaster.intersectObjects(

scene.children,

true

);





if(
intersects.length === 0
){

    clearTarget();

    return;

}






const target =

findInteractable(

intersects[0].object

);





if(target){


    setTarget(

        target

    );


}

else{


    clearTarget();


}



}







// =============================
// Find Parent
// =============================


function findInteractable(

object

){



let current =
object;



while(current){



    if(

        current.userData

        &&

        current.userData.interactable

    ){

        return current;

    }



    current =
    current.parent;


}



return null;


}






// =============================
// Target
// =============================


function setTarget(

object

){



if(
currentTarget === object
){

    return;

}




currentTarget = object;



console.log(

"Looking at:",

object.userData.name

);



}







function clearTarget(){



if(currentTarget){


    console.log(

    "Looking at: none"

    );


}



currentTarget = null;


}







// =============================
// Interaction
// =============================


function interact(){



if(
!currentTarget
){

    return;

}




console.log(

"Interaction:",

currentTarget.userData.name

);



console.log(

"Memory:",

currentTarget.userData.memory

);





// Future:
// openMemoryUI(currentTarget)



}






// =============================
// Global Debug
// =============================


window.CURA_INTERACTION = {


getTarget(){

    return currentTarget;

},


update:

updateInteraction


};