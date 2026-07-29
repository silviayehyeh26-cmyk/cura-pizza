/* =================================================
   CURA ALIVE STORY
   Memory Space v4
================================================= */



// =========================
// Room Database
// =========================


const roomData = {


    "old-pharmacy": {

        name:
        "Old Pharmacy",

        path:
        "room.html?world=old-pharmacy"

    },


    "napoli": {

        name:
        "Napoli",

        path:
        "room.html?world=napoli"

    },


    "future": {

        name:
        "CURA Future",

        path:
        "room.html?world=future"

    }


};






// =========================
// Memory State
// Future AR System
// =========================


const memoryState = {


    unlockedObjects: [],


    currentRoom:null


};







// =========================
// Door Interaction
// =========================


const doors =
document.querySelectorAll(".memory-door");



const transition =
document.querySelector(".door-transition");





doors.forEach(door=>{


    door.addEventListener(
    "click",
    ()=>{


        const room =
        door.dataset.room;



        enterRoom(room,door);



    });



});







// =========================
// Enter Room
// =========================


function enterRoom(roomId,door){



    const room =
    roomData[roomId];



    if(!room){

        console.error(
        "Room not found"
        );

        return;

    }





    // save state

    memoryState.currentRoom =
    roomId;



    localStorage.setItem(
        "curaMemoryState",
        JSON.stringify(memoryState)
    );







    // disable click

    doors.forEach(item=>{

        item.style.pointerEvents=
        "none";

    });






    // door opening effect


    door.classList.add(
    "opening"
    );






    setTimeout(()=>{


        transition.classList.add(
        "active"
        );


    },500);








    setTimeout(()=>{


        window.location.href =
        room.path;


    },1500);



}








// =========================
// Load Previous Memory
// =========================


function loadMemoryState(){



    const saved =
    localStorage.getItem(
    "curaMemoryState"
    );



    if(saved){


        Object.assign(
            memoryState,
            JSON.parse(saved)
        );


    }


}





loadMemoryState();








// =========================
// Future AR API
// =========================



function unlockObject(object){



    if(
        !memoryState.unlockedObjects
        .includes(object.id)
    ){


        memoryState
        .unlockedObjects
        .push(object.id);



        localStorage.setItem(
            "curaMemoryState",
            JSON.stringify(memoryState)
        );



        console.log(
        "Memory unlocked:",
        object.name
        );


    }



}






window.CURA_MEMORY = {


    state:
    memoryState,


    unlock:
    unlockObject


};