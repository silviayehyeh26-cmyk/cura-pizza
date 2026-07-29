/*
================================
CURA Player Controller

Version 2.1

FPS Movement System

Based on Three.js PointerLockControls

Features:
- Mouse Look
- WASD Movement
- Collision Restore
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
// Keyboard State
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






    // ==========================
    // Pointer Lock
    // ==========================


    renderer.domElement.addEventListener(

        "click",

        ()=>{

            controls.lock();

        }

    );







    // ==========================
    // Keyboard
    // ==========================


    window.addEventListener(

        "keydown",

        (event)=>{


            if(
                keys[event.code] !== undefined
            ){

                keys[event.code]=true;

            }


        }

    );





    window.addEventListener(

        "keyup",

        (event)=>{


            if(
                keys[event.code] !== undefined
            ){

                keys[event.code]=false;

            }


        }

    );








    // ==========================
    // Movement
    // ==========================


    const speed =
    0.08;



    function update(){



        if(
            !controls.isLocked
        ){

            return;

        }





        const oldPosition =
        camera.position.clone();






        let moved = false;





        if(keys.KeyW){

            controls.moveForward(

                speed

            );

            moved = true;

        }





        if(keys.KeyS){

            controls.moveForward(

                -speed

            );

            moved = true;

        }







        if(keys.KeyA){

            controls.moveRight(

                -speed

            );

            moved = true;

        }







        if(keys.KeyD){

            controls.moveRight(

                speed

            );

            moved = true;

        }








        if(!moved){

            return;

        }






        // ======================
        // Collision Check
        // ======================


        if(

            checkPositionCollision(

                camera.position

            )

        ){


            camera.position.copy(

                oldPosition

            );


        }





    }







    return {

        controls,

        update

    };


}