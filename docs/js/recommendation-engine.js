function generateRecommendations(
    customer,
    pizzas
){


if(
!customer ||
!pizzas
){

return [];

}



let results = pizzas.map(
pizza=>{


let match =

calculateCuraMatch(
customer,
pizza
);



return {


pizzaId:pizza.id,


name:pizza.name,


pizza:pizza,


match:match,


insight:

generateCuraMatchInsight(
match
)


};


}

);



results.sort(

(a,b)=>

b.match.finalScore -
a.match.finalScore

);



return results;


}







function getTopRecommendations(
results,
limit=3
){


return results.slice(
0,
limit
);


}






function displayRecommendations(
results
){


console.log(
"CURA Recommendations",
results
);


}