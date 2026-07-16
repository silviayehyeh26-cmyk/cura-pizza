function generateCarbonInsight(pizza){


let title = "";


if(
pizza.carbon.score >= 8
){

title =
"🌱 Lower Carbon Choice";

}

else if(
pizza.carbon.score >= 5
){

title =
"🌱 Balanced Choice";

}

else{

title =
"🌱 Conscious Choice";

}



return {

title:title,

score:pizza.carbon.score,

description:
pizza.carbon.description


};


}