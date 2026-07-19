function updateSelectionFloat(){


const count =
document.getElementById(
"selectionCount"
);


if(count){

count.innerHTML =
selectionList.length;

}


const list =
document.getElementById(
"selectionItems"
);



if(!list){

return;

}



list.innerHTML="";



selectionList.forEach(pizza=>{


list.innerHTML += `

<div class="selection-card">


<h3>
🍕 ${pizza.name}
</h3>


<p>
已加入探索清單
</p>


</div>


`;


});


}




document.addEventListener(
"DOMContentLoaded",
()=>{


const btn =
document.getElementById(
"selectionFloatBtn"
);



const panel =
document.getElementById(
"selectionPanel"
);



const close =
document.getElementById(
"closeSelection"
);



if(btn){


btn.onclick=()=>{


panel.classList.add(
"active"
);


updateSelectionFloat();


};


}



if(close){


close.onclick=()=>{


panel.classList.remove(
"active"
);


};


}



});