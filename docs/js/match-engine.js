function calculateIngredientMatch(
    userIngredients,
    pizzaIngredients
){

if(
    !userIngredients ||
    !pizzaIngredients
){

    return 0;

}


let score = 0;

let count = 0;


Object.keys(userIngredients)
.forEach(item=>{


if(
pizzaIngredients[item]
){

score += 
(userIngredients[item]
*
pizzaIngredients[item])
/100;


count++;

}


});


if(count===0){

return 0;

}


return Math.round(
score / count
);


}

function calculateMatch(
    userTaste,
    pizza
){



const dimensions = [

"freshness",
"complexity",
"texture",
"aroma",
"exploration"

];


let totalDifference = 0;


let closest = [];



dimensions.forEach(dim=>{


let diff = Math.abs(
    userTaste[dim]
    -
    pizza.taste[dim]
);


totalDifference += diff;



if(diff <= 1){

    closest.push(dim);

}


});



let tasteScore =
Math.round(
100 -
(totalDifference / 50 * 100)
);



let ingredientScore =
calculateIngredientMatch(
userTaste.ingredients,
pizza.ingredientProfile
);



let finalScore;


if(ingredientScore){

finalScore =
Math.round(
tasteScore*0.7
+
ingredientScore*0.3
);

}

else{

finalScore=tasteScore;

}



return {

score:finalScore,

tasteScore:tasteScore,

ingredientScore:ingredientScore,

closest:closest

};


}

function generateInsight(result,pizza){


let text="";


// Match part

if(result.closest.includes("freshness")){

text +=
"你的味覺偏好與它的食材鮮明度接近。";

}


if(result.closest.includes("texture")){

text +=
"口感方向與你的期待相符。";

}


if(result.closest.includes("aroma")){

text +=
"香氣層次與你的探索方向產生共鳴。";

}



// Personality part

if(
pizza.taste.complexity >=8 &&
pizza.taste.exploration >=8
){

text +=
" 這款披薩擁有更豐富的層次，適合探索新的風味可能。";

}



else if(
pizza.taste.freshness >=8
){

text +=
" 它以簡潔與新鮮食材展現經典風味。";

}



return text;


}



function createBreakdown(userTaste,pizza){


const names={

freshness:"Freshness",

complexity:"Complexity",

texture:"Texture",

aroma:"Aroma",

exploration:"Exploration"

};


let html="";


Object.keys(names).forEach(key=>{


let value=pizza.taste[key];


html += `

<div class="taste-bar">

<span>
${names[key]}
</span>

<div class="bar">

<div class="fill"
style="width:${value*10}%">
</div>

</div>

<span>
${value}/10
</span>

</div>

`;

});


return html;


}

function runCuraTasteMatching(){

    if(typeof CURA_STATE === "undefined"){
        console.error(
            "CURA_STATE missing"
        );
        return;
    }


    let userTaste =
    CURA_STATE.tasteProfile;


    let results =
    pizzaData.map(pizza=>{


        let result =
        calculateMatch(
            userTaste,
            pizza
        );


        return {

            ...pizza,

            match:result,

            insight:
            generateInsight(
                result,
                pizza
            )

        };


    });


    results.sort(
        (a,b)=>
        b.match.score -
        a.match.score
    );


    CURA_STATE.matchResults =
    results;


    console.log(
        "CURA OS Match Result",
        results
    );


    return results;

}