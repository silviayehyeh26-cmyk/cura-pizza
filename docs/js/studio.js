/*
================================

CURA Studio

Engine v1.2

Memory Operating System

================================
*/


import {

loadCollections,
createCollection,
saveCollections,
removeObjectFromCollections

}

from "./collection-storage.js";


import {

loadMemory,
saveMemory

}

from "./storage/memory-storage.js";

import {

loadNPCs,
saveNPCs,
createNPC

}

from "./storage/npc-storage.js";

import {

generateResponse

}

from "./ai/npc-ai-engine.js";

import {

loadMenus,

saveMenus,

createMenu

}

from "./storage/menu-storage.js";

// =====================
// State
// =====================


let memoryObjects = {};

let currentObject = null;



// =====================
// DOM
// =====================


const editor =
document.querySelector(".editor");


const preview =
document.querySelector(".preview");


const collectionContainer =
document.getElementById(
"collection-container"
);


const newObjectButton =
document.getElementById(
"new-object"
);



// =====================
// Init
// =====================


function init(){


loadData();


renderObjectList();


renderCollections();


initButtons();


initNavigation();


}




function loadData(){


memoryObjects =
loadMemory()
|| {};


console.log(
"Loaded Memory:",
memoryObjects
);


}



// =====================
// Navigation
// =====================


function initNavigation(){


const buttons =
document.querySelectorAll(
".nav-item"
);



buttons.forEach(button=>{


button.onclick=()=>{


const page =
button.dataset.page;



buttons.forEach(item=>{

item.classList.remove(
"active"
);

});



button.classList.add(
"active"
);



switch(page){


case "objects":

showObjects();

break;



case "collections":

showCollectionsPage();

break;



case "tags":

showTags();

break;



case "experiences":

showExperiences();

break;


case "npcs":

showNPCs();

break;

case "menus":

showMenus();

break;


case "assets":

showAssets();

break;



case "settings":

showSettings();

break;



}



};


});


}



function showObjects(){


renderObjectList();


editor.innerHTML=`

<div class="panel-title">

Object Editor

</div>


<div class="empty-editor">

<h2>

Select an object

</h2>


</div>

`;



}




// =====================
// Object List
// =====================


function renderObjectList(){


const container =
document.getElementById(
"object-container"
);



if(!container)
return;



container.innerHTML="";



Object.values(memoryObjects)

.forEach(object=>{


const card =
document.createElement(
"div"
);



card.className =
"object-card";



card.innerHTML=`

${object.name || "未命名物件"}

<br>

<small>

${object.type || "未分類"}

</small>

`;



card.onclick=()=>{


selectObject(
object
);


};



container.appendChild(
card
);


});


}




// =====================
// Create Object
// =====================


function initButtons(){


if(newObjectButton){


newObjectButton.onclick=()=>{


const id =
"memory-" + Date.now();



const object={

id,

name:"未命名物件",

type:"家具",

story:"",

guide:"Ari",

style:"溫暖陪伴",

collection:"",

image:""

};


memoryObjects[id]=object;



saveMemory(
memoryObjects
);



renderObjectList();



selectObject(
object
);



};


}




const collectionButton =
document.getElementById(
"new-collection"
);



if(collectionButton){


collectionButton.onclick=()=>{


const name =
prompt(
"輸入 Collection 名稱"
);



if(!name)
return;



createCollection(
name
);



renderCollections();



};


}


}



// =====================
// Select Object
// =====================


function selectObject(object){


currentObject =
object;



renderEditor(
object
);



renderPreview(
object
);


}



// =====================
// Object Editor
// =====================


function renderEditor(object){


editor.innerHTML=`

<div class="panel-title">

Object Editor

</div>


<div class="editor-form">


<label>
Name
</label>


<input

id="edit-name"

value="${object.name || ""}"

>



<label>
Type
</label>


<input

id="edit-type"

value="${object.type || ""}"

>



<label>
Image

</label>


<input

type="file"

id="edit-image"

accept="image/*"

capture="environment"

>



${
object.image

?

`

<img

src="${object.image}"

style="
width:100%;
border-radius:12px;
margin:10px 0;
"

>

`

:

""

}



<label>

Collection

</label>


<select

id="edit-collection"

>


<option value="">

未分類

</option>


${

renderCollectionOptions(
object
)

}


</select>



<label>

Story

</label>


<textarea

id="edit-story"

>

${object.story || ""}

</textarea>



<label>

Guide

</label>


<input

id="edit-guide"

value="${object.guide || "Ari"}"

>



<label>

Style

</label>


<input

id="edit-style"

value="${object.style || "溫暖陪伴"}"

>




<button

id="save-object"

class="new-button"

>

Save

</button>



<button

id="delete-object"

class="delete-button"

>

Delete

</button>



</div>


`;





document

.getElementById(
"save-object"
)

.onclick=()=>{


object.name =

document.getElementById(
"edit-name"
).value;



object.type =

document.getElementById(
"edit-type"
).value;



object.story =

document.getElementById(
"edit-story"
).value;



object.guide =

document.getElementById(
"edit-guide"
).value;



object.style =

document.getElementById(
"edit-style"
).value;



object.collection =

document.getElementById(
"edit-collection"
).value;



// =====================
// Image Upload
// =====================


const imageInput =

document.getElementById(
"edit-image"
);



if(imageInput.files.length > 0){


const reader =

new FileReader();



reader.onload = ()=>{


object.image = reader.result;



saveMemory(
memoryObjects
);



renderPreview(
object
);


};



reader.readAsDataURL(
imageInput.files[0]
);


}



syncObjectCollection(
object
);



saveMemory(
memoryObjects
);



renderObjectList();



renderPreview(
object
);



alert(
"Saved"
);


};





document

.getElementById(
"delete-object"
)

.onclick=()=>{


if(
!confirm(
"刪除此物件?"
)

)
return;



delete memoryObjects[
object.id
];



removeObjectFromCollections(
object.id
);



saveMemory(
memoryObjects
);



renderObjectList();



editor.innerHTML="";

preview.innerHTML="";


};


}



// =====================
// Collection Options
// =====================


function renderCollectionOptions(object){


const collections =
loadCollections()
|| {};



let html="";



Object.values(collections)

.forEach(collection=>{


const selected =
object.collection === collection.id
?
"selected"
:
"";



html +=`

<option

value="${collection.id}"

${selected}

>

${collection.name}

</option>

`;



});



return html;


}



// =====================
// Sync Object Collection
// =====================


function syncObjectCollection(object){


const collections =
loadCollections()
|| {};



Object.values(collections)

.forEach(collection=>{


collection.objects =
collection.objects
||
[];



collection.objects =
collection.objects.filter(

id=>id !== object.id

);



});



if(object.collection){


const target =
collections[
object.collection
];



if(target){


target.objects =
target.objects
||
[];



if(
!target.objects.includes(
object.id
)

){


target.objects.push(
object.id
);


}


}


}



saveCollections(
collections
);



}



// =====================
// Preview
// =====================


function renderPreview(object){


preview.innerHTML=`

<div class="panel-title">

Preview

</div>



<div class="preview-card">


${
object.image

?

`

<img

src="${object.image}"

style="
width:100%;
border-radius:16px;
"

>

`

:

`

<div class="preview-image">

📷

</div>

`

}



<h2>

${object.name}

</h2>



<div class="guide">

${object.guide || "Ari"}

</div>



<p>

${

object.story ||

"這件物品保存著 CURA 的記憶。"

}

</p>


</div>


`;


}


// =====================
// Collections
// =====================


function renderCollections(){


if(!collectionContainer)
return;



const collections =
loadCollections()
|| {};



collectionContainer.innerHTML="";



Object.values(collections)

.forEach(collection=>{


const card =
document.createElement(
"div"
);



card.className =
"collection-card";



card.innerHTML=`

${collection.name}


<br>


<small>

${collection.objects?.length || 0}

個物件

</small>

`;



card.onclick=()=>{


openCollection(
collection
);


};



collectionContainer.appendChild(
card
);



});


}




function openCollection(collection){


editor.innerHTML=`


<div class="panel-title">

Collection Editor

</div>


<div class="editor-form">


<label>

Name

</label>


<input

id="collection-name"

value="${collection.name}"

>


<label>

Objects

</label>


<div id="binding-list">

</div>



<button

id="save-binding"

class="new-button"

>

Save Binding

</button>


<button

id="delete-collection"

class="delete-button"

>

Delete

</button>



</div>


`;



renderBindingList(
collection
);




document
.getElementById(
"save-binding"
)
.onclick=()=>{


const collections =
loadCollections();



collection.name =
document.getElementById(
"collection-name"
).value;



collections[
collection.id
]=collection;



saveCollections(
collections
);



renderCollections();



alert(
"Collection Saved"
);



};

const storyButton =

document.getElementById(
"open-story"
);



if(storyButton){


storyButton.onclick=()=>{


window.open(

`scan.html?id=${object.id}`,

"_blank"

);


};


}


document
.getElementById(
"delete-collection"
)

.onclick=()=>{


if(
!confirm(
"刪除 Collection?"
)

)
return;



const collections =
loadCollections();



delete collections[
collection.id
];



saveCollections(
collections
);



renderCollections();



};




}




function renderBindingList(collection){


const container =
document.getElementById(
"binding-list"
);



container.innerHTML="";



Object.values(memoryObjects)

.forEach(object=>{


const active =
collection.objects.includes(
object.id
)
?
"active"
:
"";



const button =
document.createElement(
"button"
);



button.className =
"object-card " + active;



button.innerHTML =
object.name;



button.onclick=()=>{


if(
collection.objects.includes(
object.id
)

){


collection.objects =
collection.objects.filter(

id=>id!==object.id

);


}

else{


collection.objects.push(
object.id
);


}



button.classList.toggle(
"active"
);



};



container.appendChild(
button
);



});



}





// =====================
// Tags
// =====================


function showTags(){


editor.innerHTML=`


<div class="panel-title">

Tags

</div>



<button class="new-button">

＋ New Tag

</button>



<div class="object-card">

歷史

</div>



<div class="object-card">

家具

</div>



<div class="object-card">

西藥房

</div>



`;



}



// =====================
// Experiences
// =====================


function showExperiences(){


editor.innerHTML=`


<div class="panel-title">

Experiences

</div>



<button class="new-button">

＋ New Experience

</button>



<div class="object-card">

西藥房探索劇本

</div>



<div class="object-card">

節慶限定劇本

</div>



`;



}



// =====================
// AI NPCs
// =====================


function showNPCs(){


editor.innerHTML = `


<div class="panel-title">

AI NPCs

</div>


<button
id="new-npc"
class="new-button"
>

＋ Create NPC

</button>



<div id="npc-container">

</div>


`;



renderNPCList();



document
.getElementById(
"new-npc"
)
.onclick = ()=>{


const npc =
createNPC(
"New NPC"
);



renderNPCList();


openNPCEditor(
npc
);


};


}





function renderNPCList(){


const container =
document.getElementById(
"npc-container"
);



if(!container)
return;



const npcs =
loadNPCs()
||
{};



container.innerHTML="";



Object.values(npcs)

.forEach(npc=>{


const card =
document.createElement(
"div"
);



card.className =
"object-card";



card.innerHTML = `


<h3>

${npc.name}

</h3>


<small>

${npc.role || "AI NPC"}

</small>


`;



card.onclick=()=>{


openNPCEditor(
npc
);



};



container.appendChild(
card
);



});


}






function openNPCEditor(npc){



npc.knowledge =
npc.knowledge ||
{


memory:true,

menu:true,

experience:true,

customer:false


};




editor.innerHTML = `


<div class="panel-title">

NPC Editor

</div>



<div class="editor-form">



<label>

Name

</label>


<input

id="npc-name"

value="${npc.name || ""}"

>



<label>

Role

</label>


<input

id="npc-role"

value="${npc.role || ""}"

>



<label>

Personality

</label>


<textarea

id="npc-personality"

>

${npc.personality || ""}

</textarea>



<label>

System Prompt

</label>


<textarea

id="npc-prompt"

>

${npc.prompt || ""}

</textarea>





<div class="connection-panel">


<h3>

Knowledge Connection

</h3>



<button
class="connection-button"
id="connect-memory"
>

📚 Memory System

<br>

<span>
Connected
</span>

</button>



<button
class="connection-button"
id="connect-menu"
>

🍕 Menu System

<br>

<span>
Connected
</span>

</button>



<button
class="connection-button"
>

🎭 Experience System

<br>

<span>
Connected
</span>

</button>



</div>





<button

id="save-npc"

class="new-button"

>

Save

</button>



<button

id="delete-npc"

class="delete-button"

>

Delete

</button>



<button

id="test-npc"

class="new-button"

>

Test Chat

</button>



</div>


`;





document
.getElementById(
"save-npc"
)
.onclick=()=>{


npc.name =
document.getElementById(
"npc-name"
).value;



npc.role =
document.getElementById(
"npc-role"
).value;



npc.personality =
document.getElementById(
"npc-personality"
).value;



npc.prompt =
document.getElementById(
"npc-prompt"
).value;




const npcs =
loadNPCs();



npcs[npc.id]=npc;



saveNPCs(
npcs
);



renderNPCList();



alert(
"NPC Saved"
);



};






document
.getElementById(
"delete-npc"
)
.onclick=()=>{


if(
!confirm(
"Delete NPC?"
)

)

return;



const npcs =
loadNPCs();



delete npcs[npc.id];



saveNPCs(
npcs
);



renderNPCList();



editor.innerHTML="";



};





document
.getElementById(
"test-npc"
)
.onclick=()=>{


const message =
prompt(
"輸入訊息"
);



if(!message)
return;



const response =
generateResponse(
npc,
message
);



alert(
response
);



};



}

// =====================
// Menus
// =====================


function showMenus(){


editor.innerHTML=`


<div class="panel-title">

Menu System

</div>



<button

id="new-menu"

class="new-button"

>

＋ New Menu Item

</button>



<div id="menu-container">

</div>


`;



renderMenuList();



document

.getElementById(
"new-menu"
)

.onclick=()=>{


const name =
prompt(
"Menu Name"
);



if(!name)
return;



const menu =
createMenu(
name
);



renderMenuList();



openMenuEditor(
menu
);



};



}

function renderMenuList(){


const container =
document.getElementById(
"menu-container"
);



if(!container)
return;



const menus =
loadMenus();



container.innerHTML="";



Object.values(menus)

.forEach(menu=>{


const card =
document.createElement(
"div"
);



card.className =
"object-card";



card.innerHTML=`

<h3>

${menu.name}

</h3>


<small>

${menu.category}

</small>


<br>


<small>

$${menu.price}

|

${menu.available ? "販售中":"停售"}

</small>

`;


card.onclick=()=>{


openMenuEditor(
menu
);


};



container.appendChild(
card
);



});


}

// =====================
// Menu Editor
// =====================


function openMenuEditor(menu){


editor.innerHTML=`


<div class="panel-title">

Menu Editor

</div>



<div class="editor-form">


<label>
Name
</label>


<input
id="menu-name"
value="${menu.name}"
>



<label>
Category
</label>


<input
id="menu-category"
value="${menu.category}"
>



<label>
Price
</label>


<input
id="menu-price"
type="number"
value="${menu.price}"
>



<label>
Description
</label>


<textarea
id="menu-description"
>

${menu.description || ""}

</textarea>


<label>
Image
</label>

<input
type="file"
id="edit-image"
accept="image/*"
capture="environment"
>

<label>

Alive Story Link

</label>


<input

readonly

value="scan.html?id=${object.id}"

>


<button

id="open-story"

class="new-button"

>

Open Alive Story

</button>

<label>
Story
</label>


<textarea
id="menu-story"
>

${menu.story || ""}

</textarea>





<label>
Ingredients
</label>

<label>

Image URL

</label>


<input

id="menu-image"

value="${menu.image || ""}"

>

<label>

Status

</label>


<select id="menu-status">


<option
value="Available"
${menu.status==="Available"?"selected":""}
>

Available

</option>


<option
value="Sold Out"
${menu.status==="Sold Out"?"selected":""}
>

Sold Out

</option>


</select>

<textarea
id="menu-ingredients"
>

${menu.ingredients || ""}

</textarea>





<h3>

Taste Profile

</h3>



<label>
Freshness
</label>

<input
id="taste-freshness"
type="number"
min="0"
max="10"
value="${menu.taste.freshness}"
>



<label>
Complexity
</label>

<input
id="taste-complexity"
type="number"
min="0"
max="10"
value="${menu.taste.complexity}"
>



<label>
Texture
</label>

<input
id="taste-texture"
type="number"
min="0"
max="10"
value="${menu.taste.texture}"
>



<label>
Aroma
</label>

<input
id="taste-aroma"
type="number"
min="0"
max="10"
value="${menu.taste.aroma}"
>



<label>
Exploration
</label>

<input
id="taste-exploration"
type="number"
min="0"
max="10"
value="${menu.taste.exploration}"
>




<button
id="save-menu"
class="new-button"
>

Save

</button>



<button
id="delete-menu"
class="delete-button"
>

Delete

</button>



</div>


`;




document

.getElementById(
"save-menu"
)

.onclick=()=>{


menu.name =
document.getElementById(
"menu-name"
).value;



menu.category =
document.getElementById(
"menu-category"
).value;



menu.price =
Number(
document.getElementById(
"menu-price"
).value
);



menu.description =
document.getElementById(
"menu-description"
).value;



menu.story =
document.getElementById(
"menu-story"
).value;



menu.ingredients =
document.getElementById(
"menu-ingredients"
).value;

menu.image =
document.getElementById(
"menu-image"
).value;



menu.status =
document.getElementById(
"menu-status"
).value;



menu.available =
menu.status==="Available";

menu.taste={


freshness:
Number(
document.getElementById(
"taste-freshness"
).value
),


complexity:
Number(
document.getElementById(
"taste-complexity"
).value
),


texture:
Number(
document.getElementById(
"taste-texture"
).value
),


aroma:
Number(
document.getElementById(
"taste-aroma"
).value
),


exploration:
Number(
document.getElementById(
"taste-exploration"
).value
)


};



const menus =
loadMenus();



menus[menu.id]=menu;



saveMenus(
menus
);



renderMenuList();



alert(
"Menu Saved"
);



};

document

.getElementById(
"delete-menu"
)

.onclick=()=>{


if(
!confirm(
"Delete this menu?"
)

)
return;



const menus =
loadMenus();



delete menus[menu.id];



saveMenus(
menus
);



renderMenuList();



editor.innerHTML="";



};


}

// =====================
// Assets
// =====================


function showAssets(){


editor.innerHTML=`


<div class="panel-title">

Assets

</div>



<button class="new-button">

＋ Upload Asset

</button>



<div class="object-card">

Images

</div>



<div class="object-card">

3D Models

</div>



<div class="object-card">

Videos

</div>



`;



}





// =====================
// Settings
// =====================


function showSettings(){


editor.innerHTML=`


<div class="panel-title">

Settings

</div>



<div class="object-card">

Restaurant Profile

</div>



<div class="object-card">

AR Settings

</div>



<div class="object-card">

AI Settings

</div>



`;



}




// =====================
// Start
// =====================


init();