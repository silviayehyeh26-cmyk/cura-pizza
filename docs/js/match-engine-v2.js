/*
====================================
CURA Recommendation Engine V2

Model:

Taste Match
+
Ingredient Match
+
Context Match
+
Dietary Match

Based on:
- Sensory Evaluation
- Food Choice Theory
- Consumer Behavior Theory

====================================
*/



function calculateTasteMatch(
userProfile,
pizzaId
){


const expertProfile =
getExpertProfile(pizzaId);



if(!expertProfile){

return 0;

}



const dimensions=[

"freshness",
"complexity",
"texture",
"aroma",
"exploration"

];


let difference=0;



dimensions.forEach(dim=>{


difference += Math.abs(

userProfile.tasteProfile[dim]

-

expertProfile[dim]/10

);


});



let score =
100 -
(
difference / 50 * 100
);



return Math.max(
0,
Math.round(score)
);


}







function calculateIngredientPreferenceMatch(
userProfile,
pizza
){



if(
!userProfile.ingredientPreference ||
!pizza.ingredientProfile
){

return 0;

}



let total=0;

let count=0;



Object.keys(
userProfile.ingredientPreference
)
.forEach(item=>{


if(
pizza.ingredientProfile[item]
){


total +=

userProfile.ingredientPreference[item]

*

pizza.ingredientProfile[item]


count++;


}


});



if(count===0){

return 0;

}



return Math.round(

total /
count /
10

);


}







function calculateContextMatch(
userProfile,
pizzaId
){


/*
第一版：

建立框架

之後加入：
- celebration pizza
- family pizza
- first visit recommendation

*/


return 50;


}







function calculateFinalRecommendation(
userProfile,
pizza
){



const tasteScore =
calculateTasteMatch(
userProfile,
pizza.id
);



const ingredientScore =
calculateIngredientPreferenceMatch(
userProfile,
pizza
);



const contextScore =
calculateContextMatch(
userProfile,
pizza.id
);



const finalScore = Math.round(

tasteScore * 0.5

+

ingredientScore * 0.3

+

contextScore * 0.2

);



return {


score:finalScore,


breakdown:{


taste:tasteScore,

ingredient:ingredientScore,

context:contextScore


}


};



}