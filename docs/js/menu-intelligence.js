function renderMenuIntelligence(){


const container =
document.getElementById(
"menuIntelligence"
);


container.innerHTML = "";


pizzaData.forEach((pizza)=>{


container.innerHTML += `

<div class="pizza-card">


<div class="pizza-header">

<h2>
🍕 ${pizza.name}
</h2>


<p>
${pizza.ingredients.join(" · ")}
</p>

</div>



<div class="radar-box">

<canvas 
id="pizzaRadar-${pizza.id}">
</canvas>

</div>



<div class="match-preview">

<h3>
Taste Match
</h3>


<div id="score-${pizza.id}">

</div>


<p id="insight-${pizza.id}">

</p>

<div 
class="match-detail"
id="detail-${pizza.id}">

</div>

<div 
class="carbon-detail"
id="carbon-${pizza.id}">

</div>

<div
class="choice-insight"
id="choice-${pizza.id}">

</div>

</div>



<button 
class="select-pizza"
data-id="${pizza.id}">

加入選餐

</button>


</div>

`;

});



// 等 Card 建立完成後畫 Radar

setTimeout(()=>{


pizzaData.forEach((pizza)=>{


createCompareRadar(
`pizzaRadar-${pizza.id}`,
userTasteProfile,
pizza
);


const result =
calculateMatch(
userTasteProfile,
pizza
);

const details =
generateMatchDetail(
userTasteProfile,
pizza
);

const carbon =
generateCarbonInsight(
pizza
);

const choice =
generateChoiceInsight(
userTasteProfile,
pizza
);

document
.getElementById(
`score-${pizza.id}`
)
.innerHTML =
`
${result.score}% Match
`;


document
.getElementById(
`insight-${pizza.id}`
)
.innerHTML =
generateInsight(
result,
pizza
);






document
.getElementById(
`detail-${pizza.id}`
)
.innerHTML =

`
<h4>
Why it fits you?
</h4>

${
details.map(item=>`

<div class="detail-row">

<strong>
${item.name}
</strong>

<p>
你的 ${item.user} / 餐點 ${item.pizza}
</p>

</div>

`).join("")
}

`;






document
.getElementById(
`carbon-${pizza.id}`
)
.innerHTML =

`

<h4>
Sustainability Insight
</h4>

<h3>
${carbon.title}
</h3>

<p>
Carbon Score:
${carbon.score}/10
</p>

<p>
${carbon.description}
</p>

`;






document
.getElementById(
`choice-${pizza.id}`
)
.innerHTML =


`

<h4>
CURA Choice Insight
</h4>


<p>
${choice}
</p>

`;


});


},100);


const details =
generateMatchDetail(
userTasteProfile,
pizza
);

const carbon =
generateCarbonInsight(
pizza
);



document
.getElementById(
`carbon-${pizza.id}`
)
.innerHTML =


`

<h4>
Sustainability Insight
</h4>


<h3>
${carbon.title}
</h3>


<p>
Carbon Score:
${carbon.score}/10
</p>


<p>
${carbon.description}
</p>

`;


document
.getElementById(
`choice-${pizza.id}`
)
.innerHTML =


`

<h4>
CURA Choice Insight
</h4>


<p>
${choice}
</p>

`;




}



// 加入選餐事件

document
.getElementById("menuIntelligence")
.addEventListener(
"click",
function(e){


if(
e.target.classList.contains(
"select-pizza"
)
){


console.log(
"clicked:",
e.target.dataset.id
);


addSelection(
e.target.dataset.id
);


}


});
