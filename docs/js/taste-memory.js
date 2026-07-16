function generateTasteMemory(pizza){


let memory=[];



if(
pizza.taste.freshness >= 8
){

memory.push(
"高新鮮感，符合清爽風味方向"
);

}



if(
pizza.taste.complexity >= 8
){

memory.push(
"多層次風味，適合探索者"
);

}



if(
pizza.taste.aroma >= 8
){

memory.push(
"香氣表現突出"
);

}



if(
pizza.taste.texture >= 8
){

memory.push(
"口感層次明顯"
);

}



return memory;


}