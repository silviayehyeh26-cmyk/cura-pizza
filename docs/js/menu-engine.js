function renderMenu(){


const container =
document.getElementById(
"pizzaMenu"
);



pizzaData.forEach(pizza=>{


const card =
document.createElement(
"div"
);


card.className =
"pizza-card";



card.innerHTML = `


<h2>
${pizza.name}
</h2>


<p>
${pizza.story}
</p>


<p>
${pizza.ingredients.join(" / ")}
</p>



<button 
class="explore-btn"
data-id="${pizza.id}">

探索風味

</button>


`;



container.appendChild(card);



});



document
.querySelectorAll(".explore-btn")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const pizza =
pizzaData.find(
p=>p.id===button.dataset.id
);



openPizzaDetail(pizza);




});


});


}



document.addEventListener(
"DOMContentLoaded",
renderMenu
);