function generateJourneySummary(){


const count =
selectionList.length;


let style = {
    name:"",
    description:""
};



if(
userTasteProfile.freshness >= 7
&&
userTasteProfile.texture >= 6
){

style = {

name:
"Fresh Explorer",

description:
"喜歡以新鮮食材與簡單風味，探索食物本身的故事。"

};

}


else if(
userTasteProfile.complexity >= 7
){

style = {

name:
"Flavor Explorer",

description:
"享受多層次香氣與風味組合，喜歡發現新的味覺可能。"

};

}


else{

style = {

name:
"Balanced Explorer",

description:
"在熟悉與探索之間取得平衡，尋找協調的風味體驗。"

};

}



return {

count:count,

style:style

};


}