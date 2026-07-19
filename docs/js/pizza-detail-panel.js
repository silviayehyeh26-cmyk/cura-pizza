function openPizzaDetail(pizza){


ExperiencePanel.open(`


<div class="pizza-detail">


<h1>
${pizza.name}
</h1>


<p class="pizza-story">
${pizza.story}
</p>



<h3>
Pizza Profile
</h3>


<canvas id="pizzaDetailRadar"></canvas>



<h3>
食材故事
</h3>


<div class="ingredient-list">


${pizza.ingredients.map(item=>{


return `


<div class="ingredient-item">


<h4>

${item.name}

</h4>


<p>

${item.profile}

</p>


<div class="sensory-tags">


${item.sensoryEffect.map(effect=>`

<span>
${effect}
</span>

`).join("")}


</div>


</div>


`;


}).join("")}


</div>



<h3>
Sustainability
</h3>


<div class="carbon-info">


<p>
${pizza.carbon.description}
</p>


</div>



<button

class="taste-overlay-btn"

data-id="${pizza.id}">

查看我的風味匹配

</button>

<button

class="add-selection-btn"

data-id="${pizza.id}">

＋ 加入選擇

</button>

</div>


`);



renderPizzaDetailRadar(pizza);



}

