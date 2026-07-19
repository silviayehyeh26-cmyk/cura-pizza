function renderSelection(){


const container =
document.getElementById(
"selectionList"
);



if(!container){

console.warn(
"Selection container not found"
);

return;

}



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

window.selectionList = [];