document.addEventListener(
"click",
function(e){



if(
e.target.classList.contains(
"add-selection-btn"
)

){


const id =
e.target.dataset.id;



const pizza =
pizzaData.find(
p=>p.id===id
);



addToSelection(pizza);



}



});