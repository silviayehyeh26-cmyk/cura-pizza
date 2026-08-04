/*
================================

CURA Studio

NPC Storage

AI Character Database

================================
*/


const STORAGE_KEY =
"CURA_NPCS";



export function loadNPCs(){


const data =
localStorage.getItem(
STORAGE_KEY
);


return data
?
JSON.parse(data)
:
{};


}





export function saveNPCs(npcs){


localStorage.setItem(

STORAGE_KEY,

JSON.stringify(
npcs,
null,
2
)

);


}





export function createNPC(name){


const npc = {

id:
"npc-" + Date.now(),


name:name,


englishName:"",


role:"AI Guide",


gender:"",


personality:"",


prompt:"",


knowledge:{


memory:true,


menu:true,


experience:true


}


};



const npcs =
loadNPCs();


npcs[npc.id]=npc;


saveNPCs(
npcs
);


return npc;


}