let pizzaDetailChart;



function renderPizzaDetailRadar(pizza){


const ctx =
document
.getElementById(
"pizzaDetailRadar"
);



if(!ctx) return;



if(pizzaDetailChart){

pizzaDetailChart.destroy();

}



pizzaDetailChart =
new Chart(ctx, {


type:"radar",


data:{


labels:[

"Freshness",
"Complexity",
"Texture",
"Aroma",
"Exploration"

],


datasets:[{

label:
pizza.name,


data:[

pizza.taste.freshness,

pizza.taste.complexity,

pizza.taste.texture,

pizza.taste.aroma,

pizza.taste.exploration

]

}]


},


options:{


responsive:true,


scales:{


r:{

min:0,

max:10

}


}


}


});


}