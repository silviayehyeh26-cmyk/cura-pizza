/*
====================================
CURA Radar Comparison UI

Render:

Customer Radar

VS

Pizza Expert Radar

====================================
*/


let userRadarChart = null;

let pizzaRadarChart = null;




function renderRadarComparison(pizzaId){


const data =
getRadarComparisonData(pizzaId);



if(!data){

return;

}



if(userRadarChart){

userRadarChart.destroy();

}


if(pizzaRadarChart){

pizzaRadarChart.destroy();

}




const labels=[

"Freshness",

"Complexity",

"Texture",

"Aroma",

"Exploration"

];





userRadarChart =
new Chart(

document.getElementById(
"userTasteRadar"
),

{

type:"radar",

data:{


labels:labels,


datasets:[{

label:"Your Taste",

data:[

data.user.freshness,

data.user.complexity,

data.user.texture,

data.user.aroma,

data.user.exploration

]

}]

}

}

);






pizzaRadarChart =
new Chart(

document.getElementById(
"pizzaTasteRadar"
),

{

type:"radar",

data:{


labels:labels,


datasets:[{

label:"Pizza Profile",

data:[

data.pizza.freshness,

data.pizza.complexity,

data.pizza.texture,

data.pizza.aroma,

data.pizza.exploration

]

}]

}

}

);





renderRadarDifference(
data.difference
);


}






function renderRadarDifference(diff){


const box =
document.getElementById(
"radarDifference"
);



if(!box){

return;

}



let text="";



if(diff.aroma < 0){

text +=
"這款披薩的香氣比你的偏好更明顯。<br>";

}

else{

text +=
"香氣方向與你的期待接近。<br>";

}



if(diff.texture < 0){

text +=
"口感比你的偏好更豐富。<br>";

}



if(diff.freshness > 0){

text +=
"風味清爽程度低於你的偏好。<br>";

}



box.innerHTML=text;


}