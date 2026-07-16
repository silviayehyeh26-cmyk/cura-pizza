function addSelection(pizzaId){

    const pizza =
    pizzaData.find(
        item => item.id === pizzaId
    );


    if(pizza){

        selectionList.push(pizza);

        renderSelection();

    }

}



function renderSelection(){

    const container =
    document.getElementById(
        "selectionList"
    );


    container.innerHTML="";


    selectionList.forEach(pizza=>{

      const memories =
      generateTasteMemory(pizza);

        container.innerHTML += `

<div class="selection-item">


<h3>
🍕 ${pizza.name}
</h3>


<p>
已加入探索清單
</p>



<div class="taste-memory">


<h4>
Your Taste Connection
</h4>


${

memories.map(item=>

`
<div>
✓ ${item}
</div>
`

).join("")

}


</div>


</div>

`;



    });

    renderJourney();

    renderTasteIdentity();

}