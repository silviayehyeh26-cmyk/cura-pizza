function addToSelection(pizzaId){


const pizza =
pizzaData.find(
item => item.id === pizzaId
);



if(!selectionList.includes(pizza)){


selectionList.push(pizza);


}



renderSelection();

updateSelectionFloat();

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