/*
================================

CURA Memory Room

Engine v1.1
First Person Movement

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";



// =============================
// Developer Console
// =============================

import "./developer-console.js";




// =============================
// Player
// =============================

import {

createPlayer

}

from "./player-controller.js";




// =============================
// Collision
// =============================

import {

initCollisionSystem,

addCollider,

updateColliders

}

from "./collision-system.js";




// =============================
// Objects
// =============================

import {

createOldPharmacyObjects

}

from "./room-objects.js";

import {

createGalleryEntrances

}

from "./gallery-entrance.js";

import {
initInteraction
}
from "./interaction-system.js";



import "./gallery-menu.js";


// =============================
// Container
// =============================


const container =
document.getElementById(
"room-container"
);






// =============================
// Scene
// =============================


const scene =
new THREE.Scene();


scene.background =
new THREE.Color(
0xc8b8a6
);





initCollisionSystem(
scene
);





// =============================
// Camera
// =============================


const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth /
window.innerHeight,

0.1,

100

);



camera.position.set(

0,

1.6,

1.5

);



window.camera =
camera;






// =============================
// Renderer
// =============================


const renderer =
new THREE.WebGLRenderer({

antialias:true

});



renderer.setSize(

window.innerWidth,

window.innerHeight

);



renderer.shadowMap.enabled =
true;



container.appendChild(

renderer.domElement

);






// =============================
// Light
// =============================


const ambient =
new THREE.AmbientLight(

0xffe8c7,

1.8

);

scene.add(
ambient
);






const lamp =
new THREE.DirectionalLight(

0xffc982,

3

);



lamp.position.set(

-3,

5,

3

);



lamp.castShadow =
true;



scene.add(
lamp
);







// =============================
// Room
// =============================


function createRoom(){



const wallMaterial =
new THREE.MeshStandardMaterial({

color:0xc7ad91,

roughness:0.9,

side:
THREE.DoubleSide

});




// Floor

const floor =
new THREE.Mesh(

new THREE.BoxGeometry(

8,

0.1,

6

),

wallMaterial

);



floor.position.y =
0;



scene.add(
floor
);



// Floor 不阻擋水平移動
// 不加入 collider





// Back Wall

const backWall =
new THREE.Mesh(

new THREE.BoxGeometry(

8,

3,

0.1

),

wallMaterial

);



backWall.position.set(

0,

1.5,

-3

);



scene.add(
backWall
);



addCollider(
backWall
);






// Front Wall

const frontWall =
new THREE.Mesh(

new THREE.BoxGeometry(

8,

3,

0.1

),

wallMaterial

);



frontWall.position.set(

0,

1.5,

3

);



scene.add(
frontWall
);



addCollider(
frontWall
);







// Left Wall

const leftWall =
new THREE.Mesh(

new THREE.BoxGeometry(

0.1,

3,

6

),

wallMaterial

);



leftWall.position.set(

-4,

1.5,

0

);



scene.add(
leftWall
);



addCollider(
leftWall
);







// Right Wall

const rightWall =
new THREE.Mesh(

new THREE.BoxGeometry(

0.1,

3,

6

),

wallMaterial

);



rightWall.position.set(

4,

1.5,

0

);



scene.add(
rightWall
);



addCollider(
rightWall
);





}



createRoom();






// =============================
// Furniture
// =============================


createOldPharmacyObjects(

scene,

addCollider

);

// createGalleryEntrances(
// scene
// );




// =============================
// Player
// =============================


const player =
createPlayer(

camera,

renderer

);

initInteraction(

scene,

camera,

renderer

);




// =============================
// Resize
// =============================


window.addEventListener(

"resize",

()=>{


camera.aspect =

window.innerWidth /
window.innerHeight;



camera.updateProjectionMatrix();




renderer.setSize(

window.innerWidth,

window.innerHeight

);



}

);







// =============================
// Loop
// =============================


function animate(){


requestAnimationFrame(
animate
);



player.update();







renderer.render(

scene,

camera

);



}


animate();
