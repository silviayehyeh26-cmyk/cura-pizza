/*
================================

CURA Scanner

v0.1

Camera + Object Ready

================================
*/


import {

memoryObjects

}

from "./memory-object-data.js";





const video =
document.getElementById(
"camera"
);





async function startCamera(){


try{


const stream =

await navigator.mediaDevices.getUserMedia({

video:{

facingMode:"environment"

}


});



video.srcObject =
stream;



console.log(
"CURA Camera Ready"
);



}

catch(error){


console.error(

"Camera Error",

error

);


}


}



startCamera();




// Demo Object Trigger


window.CURA_SCAN = {


scan(id){



const object =
memoryObjects[id];



if(!object){


console.warn(
"Object Not Found"
);


return;


}



console.log(

"Found:",

object.name

);



console.log(

"Ari:",

object.guide.name

);



console.log(

"Story:",

object.story.title

);



}



};