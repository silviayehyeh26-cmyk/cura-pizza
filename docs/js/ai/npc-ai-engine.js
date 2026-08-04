/*
================================

CURA NPC AI Engine

v0.2

Knowledge Based Response

================================
*/


export function generateResponse(

npc,

memory,

question,

menuData = {},

experienceData = {}

){



let knowledgeText = "";




// =====================
// Memory Knowledge
// =====================


if(

npc.knowledge?.memory

){


knowledgeText += `

品牌記憶：

${memory.story || ""}

`;



}




// =====================
// Menu Knowledge
// =====================


if(

npc.knowledge?.menu

){


knowledgeText += `

菜單資訊：

${menuData.name || ""}

${menuData.description || ""}

`;



}




// =====================
// Experience Knowledge
// =====================


if(

npc.knowledge?.experience

){


knowledgeText += `

體驗內容：

${experienceData.story || ""}

`;



}







return `


<p>

我是 ${npc.name || "Ari"}

</p>



<p>

${npc.personality || ""}

</p>



<p>

${knowledgeText}

</p>



<p>

你的問題：

${question}

</p>



<p>

我會根據 CURA 的資料為你解答。

</p>


`;



}