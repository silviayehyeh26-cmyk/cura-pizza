function generateChoiceInsight(
user,
pizza
){


let message="";



if(
pizza.carbon.score >= 8 &&
pizza.taste.freshness >= user.freshness
){

message =
"這款餐點符合你的清爽風味方向，同時具有較低環境負擔。";


}


else if(
pizza.taste.exploration >= 7
){

message =
"這款餐點帶來更多風味探索，適合想嘗試新體驗的你。";


}


else{

message =
"這款餐點在風味與永續之間取得平衡。";

}



return message;


}