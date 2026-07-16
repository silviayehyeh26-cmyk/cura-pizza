function addSelection(pizzaId){


const pizza =
pizzaData.find(
item => item.id === pizzaId
);



if(!selectionList.includes(pizza)){


selectionList.push(pizza);


}


renderSelection();


}



function renderSelection(){


const container =
document.getElementById(
"selectionList"
);


container.innerHTML="";


selectionList.forEach(pizza=>{


container.innerHTML += `

<div class="selection-item">

🍕 ${pizza.name}

<br>

<span>
已加入探索清單
</span>

</div>

`;

});


}

const selectionList = [];