function generateIngredientIdentity(){


if(
!userTasteProfile ||
!userTasteProfile.ingredients
)
return "";


const ingredients =
userTasteProfile.ingredients;


let selected =
Object.keys(ingredients);


if(selected.length===0)
return "";



const map={

tomato:"🍅 Fresh Ingredient Seeker",

basil:"🌿 Herbal Lover",

cheese:"🧀 Comfort Flavor Explorer",

mushroom:"🍄 Earthy Flavor Explorer",

olive:"🫒 Mediterranean Soul",

seafood:"🌊 Ocean Taste Explorer"

};



let result =
selected
.map(item=>map[item])
.filter(Boolean);



return result
.map(x=>`

<div class="identity-tag">
${x}
</div>

`)
.join("");

}

function renderTasteIdentity(){


const container =
document.getElementById(
"tasteIdentity"
);


if(!container)
return;



const summary =
generateJourneySummary();


const level =
getJourneyLevel();



const favorites =
selectionList
.map(pizza=>

`
<div class="identity-pizza">
🍕 ${pizza.name}
</div>

`

)
.join("");



container.innerHTML =

`

<div class="identity-card">


<h2>
Taste Explorer
</h2>


<div class="identity-level">

${level.name}

</div>



<h3>
Your Taste Style
</h3>


<h2>
${summary.style.name}
</h2>

<div class="ingredient-identity">


<h3>
Your Ingredient Soul
</h3>


<div class="identity-tags">

${generateIngredientIdentity()}

</div>


</div>

<p>
${summary.style.description}
</p>



<h3>
Favorite Discoveries
</h3>


<div class="identity-favorites">

${favorites}

</div>



<div class="taste-philosophy">

<p>
Simple ingredients.<br>
Meaningful stories.
</p>

</div>


</div>

`;

}

renderTasteIdentity();