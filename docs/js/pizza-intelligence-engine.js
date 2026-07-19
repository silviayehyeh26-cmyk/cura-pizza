function getPizzaIntelligence(pizzaId){


if(
typeof pizzaIntelligenceData === "undefined"
){

console.error(
"Pizza Intelligence Data Missing"
);

return null;

}


return pizzaIntelligenceData[pizzaId];


}




function getPizzaFullProfile(pizza){


const intelligence =
getPizzaIntelligence(
pizza.id
);



if(!intelligence){

return pizza;

}



return {


...pizza,


intelligence:intelligence


};


}




function getExpertProfile(pizzaId){


const intelligence =
getPizzaIntelligence(
pizzaId
);


if(!intelligence){

return null;

}


return intelligence.expertProfile;


}




function getCustomerPerception(pizzaId){


const intelligence =
getPizzaIntelligence(
pizzaId
);


if(!intelligence){

return null;

}


return intelligence.customerPerception;


}