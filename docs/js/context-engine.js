function calculateContextMatch(
    customerContext,
    pizzaExperience
){


if(
!customerContext ||
!pizzaExperience
){

return 0;

}


let occasion =
customerContext.occasion;


if(
!occasion ||
!pizzaExperience[occasion]
){

return 0;

}


return pizzaExperience[occasion] * 10;


}

function getContextInsight(score){

if(score>=80){

return "這款披薩與目前用餐情境高度契合。";

}

else if(score>=60){

return "這款披薩適合作為此次用餐選擇。";

}

else{

return "這款披薩提供不同的體驗方向。";

}

}