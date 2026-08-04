/*
================================

CURA Scanner

v0.4

Camera + Studio Memory + AI NPC

================================
*/


import {

loadMemory

}

from "./storage/memory-storage.js";


import {

loadNPCs

}

from "./storage/npc-storage.js";


import {

generateResponse

}

from "./ai/npc-ai-engine.js";




// =====================
// DOM
// =====================


const video =

document.getElementById(
"camera"
);



const chatButton =

document.getElementById(
"chat-button"
);



const chatBox =

document.getElementById(
"chat-box"
);



const sendChat =

document.getElementById(
"send-chat"
);




// =====================
// State
// =====================


let currentObject = null;


let currentNPC = null;





// =====================
// Camera
// =====================


async function startCamera(){


try{


const stream =

await navigator.mediaDevices.getUserMedia({


video:{


facingMode:"environment"


}


});



if(video){


video.srcObject = stream;


}



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






// =====================
// Memory System
// =====================


function getMemoryObjects(){


return (

loadMemory()

||

{}

);


}





// =====================
// NPC System
// =====================


function getGuideNPC(){


const npcs =

loadNPCs()

||

{};



const list =

Object.values(
npcs
);




if(list.length === 0){


return {


id:"default-ari",


name:"Ari",


role:"AI Guide",


personality:

"溫暖、細膩、熟悉 CURA 品牌故事",


prompt:

"你是 CURA 的品牌導覽 AI。",


knowledge:{


memory:true,


menu:true,


experience:true


}



};



}



return list[0];



}








// =====================
// Scan Object
// =====================


window.CURA_SCAN = {


scan(id){



const memoryObjects =

getMemoryObjects();




const object =

memoryObjects[id];





if(!object){


console.warn(

"Object Not Found:",

id

);


return;


}






currentObject = object;



currentNPC = getGuideNPC();






console.log(

"Found Object:",

object.name

);




console.log(

"Using NPC:",

currentNPC.name

);





showObject(
object
);



}



};









// =====================
// Display Memory
// =====================


function showObject(object){



const guide =

document.querySelector(
".guide"
);




const message =

document.querySelector(
".message"
);






if(guide){


guide.innerHTML =


`

${

currentNPC?.name || "Ari"

}

· Memory Guide


`;



}







if(message){


message.innerHTML =


`

<h2>

${object.name}

</h2>


<p>

${

object.story ||

"尚未建立故事"

}

</p>

`;



}



}








// =====================
// Chat Open
// =====================


if(chatButton){


chatButton.onclick = ()=>{


if(chatBox){


chatBox.style.display="block";


}


};



}








// =====================
// Chat Send
// =====================


if(sendChat){


sendChat.onclick = ()=>{



const input =

document.getElementById(
"chat-input"
);




const output =

document.getElementById(
"chat-response"
);





if(!input)

return;






const question =

input.value;





if(!question)

return;





if(!currentObject){


alert(

"請先掃描記憶物件"

);



return;


}





const response =


generateResponse(


currentNPC,


currentObject,


question,


null,


null


);





if(output){


output.innerHTML = response;


}





input.value="";



};



}






// =====================
// Debug
// =====================


console.log(

"CURA Scanner v0.4 Loaded"

);