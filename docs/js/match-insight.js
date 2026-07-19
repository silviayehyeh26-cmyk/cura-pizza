function generateMatchInsight(pizza){


const user =
customerProfile.tasteProfile;


const taste =
pizza.taste;



let insights=[];



const dimensions=[


{
key:"freshness",
name:"清爽度"
},


{
key:"complexity",
name:"層次感"
},


{
key:"texture",
name:"口感"
},


{
key:"aroma",
name:"香氣"
},


{
key:"exploration",
name:"探索性"
}


];



dimensions.forEach(dim=>{


const diff =
taste[dim.key]-user[dim.key];



if(Math.abs(diff)<=1){

insights.push(

`${dim.name}與你的偏好接近`

);

}



else if(diff>1){


insights.push(

`${pizza.name}的${dim.name}比你的習慣更突出`

);


}


else if(diff<-1){


insights.push(

`${pizza.name}的${dim.name}較為內斂`

);


}



});



return insights;


}