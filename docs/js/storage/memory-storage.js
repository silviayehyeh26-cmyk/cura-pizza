/*
================================

CURA Memory Storage

Memory Object Database

================================
*/


const MEMORY_KEY =
"CURA_MEMORY_OBJECTS";




// =====================
// Load
// =====================

export function loadMemory(){


const data =
localStorage.getItem(
MEMORY_KEY
);



if(!data){

return {};

}



return JSON.parse(data);


}



// =====================
// Save
// =====================

export function saveMemory(data){


localStorage.setItem(

MEMORY_KEY,

JSON.stringify(data)

);


}




// =====================
// Add
// =====================

export function createMemory(object){


const memories =
loadMemory();



memories[object.id] =
object;



saveMemory(
memories
);



return object;


}




// =====================
// Delete
// =====================

export function deleteMemory(id){


const memories =
loadMemory();



delete memories[id];



saveMemory(
memories
);


}