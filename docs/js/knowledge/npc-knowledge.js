/*
================================

NPC Knowledge Layer

CURA Studio

================================
*/


import {

loadMemory

}

from "../storage/memory-storage.js";





export function getNPCKnowledge(npc){


const knowledge={



npc:{


name:npc.name,


role:npc.role,


personality:npc.personality,


prompt:npc.prompt


},




memory:


loadMemory()



};




return knowledge;


}