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






addToSelection(id);



}



});