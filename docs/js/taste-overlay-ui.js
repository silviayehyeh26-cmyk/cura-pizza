document.addEventListener(
"click",
function(e){


if(
e.target.classList.contains(
"taste-overlay-btn"
)
){


const id =
e.target.dataset.id;



const pizza =
pizzaData.find(
p=>p.id===id
);



showTasteOverlay(pizza);


}


});