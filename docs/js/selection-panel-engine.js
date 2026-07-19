/*
====================================
CURA Selection Engine

Purpose:
Manage customer's selected pizzas

Concept:
Selection ≠ Cart

====================================
*/


function addToSelection(pizza){



const exists =
selectionData.items.find(
item=>item.id===pizza.id
);



if(exists){

return;

}



selectionData.items.push({

id:pizza.id,

name:pizza.name,

addedAt:new Date()

});



renderSelectionMessage(pizza);


}





function renderSelectionMessage(pizza){



const button =
document.querySelector(
".add-selection-btn"
);



if(button){


button.innerHTML =
"✓ 已加入選擇";


button.disabled=true;


}



}