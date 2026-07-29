/*
================================
CURA Collision System
Version 1.1

Features:
- Collider Register
- Box3 Collision Detection
- Debug Helper
- Player Collision Check
================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";




// ==============================
// Storage
// ==============================


const colliders = [];

const helpers = [];

let scene = null;




// ==============================
// Initialize
// ==============================


export function initCollisionSystem(
targetScene
){

    scene = targetScene;

}





// ==============================
// Add Collider
// ==============================


export function addCollider(
object
){


    const box =
    new THREE.Box3();


    box.setFromObject(
        object
    );




    const helper =
    new THREE.Box3Helper(

        box,

        0xff3333

    );


    // 預設隱藏

    helper.visible = false;



    if(scene){

        scene.add(
            helper
        );

    }



    colliders.push({

        object,

        box

    });



    helpers.push(
        helper
    );



}







// ==============================
// Update Collider Position
// ==============================


export function updateColliders(){


    for(
        let i = 0;
        i < colliders.length;
        i++
    ){


        const collider =
        colliders[i];



        collider.box.setFromObject(

            collider.object

        );



        helpers[i].box.copy(

            collider.box

        );


    }


}







// ==============================
// Player Collision Check
// ==============================


export function checkPositionCollision(

position,

size = new THREE.Vector3(
0.5,
1.6,
0.5
)

){


    const playerBox =
    new THREE.Box3();



    playerBox.setFromCenterAndSize(

        position,

        size

    );





    for(
        const collider of colliders
    ){



        if(
            playerBox.intersectsBox(
                collider.box
            )
        ){

            return true;

        }


    }



    return false;


}







// ==============================
// Debug Collider
// ==============================


export function toggleColliders(

visible

){


    helpers.forEach(

        helper=>{


            helper.visible =
            visible;


        }

    );


}







export function getColliders(){


    return colliders;


}







// ==============================
// Developer Console Hook
// ==============================


window.__CURA_COLLIDER__ =

function(
visible
){


    toggleColliders(

        visible

    );


};
