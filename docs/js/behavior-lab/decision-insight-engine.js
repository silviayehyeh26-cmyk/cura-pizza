/*
================================

Decision Insight Engine

AI Behavior Lab

Version 2.0

Insight Generation System

負責:
- Improvement
- Warning
- Pattern
- Recommendation
- Bottleneck

================================
*/


export class DecisionInsightEngine {



constructor(){


}





generate(

compareResult,

behaviorReport,

patterns,

timeline=[]

){



let insights=[];



// =================================
// Improvement
// =================================


if(compareResult){



if(
compareResult.decisionTimeReduction > 0
){


insights.push({

type:"improvement",

level:"high",

title:"Decision Speed",

value:
compareResult.decisionTimeReduction,

message:

`Decision time reduced ${compareResult.decisionTimeReduction}%`

});



}





if(
compareResult.cognitiveLoadReduction > 0
){


insights.push({

type:"improvement",

level:"high",

title:"Cognitive Load",

value:
compareResult.cognitiveLoadReduction,

message:

`Cognitive load reduced ${compareResult.cognitiveLoadReduction}%`

});


}





if(
compareResult.confidenceIncrease > 0
){


insights.push({

type:"improvement",

level:"medium",

title:"Decision Confidence",

value:
compareResult.confidenceIncrease,

message:

`Confidence increased ${compareResult.confidenceIncrease}%`

});


}



}








// =================================
// Journey Analysis
// =================================


if(
behaviorReport &&
behaviorReport.averageJourneyLength !== undefined
){



insights.push({


type:"statistic",

level:"normal",

title:"Average Journey",

value:
behaviorReport.averageJourneyLength,

message:

`Average journey contains ${behaviorReport.averageJourneyLength.toFixed(1)} transitions`

});




}








// =================================
// Pattern
// =================================



if(
patterns &&
patterns.length>0
){



let mainPattern =
patterns[0];



insights.push({

type:"pattern",

level:"normal",

title:"Dominant Behavior Pattern",

value:
mainPattern.count,

path:
mainPattern.path,

message:

`${mainPattern.count} agents share this journey`

});



}









// =================================
// Warning
// =================================


let warnings =
this.detectBottleneck(
timeline
);



warnings.forEach(
warning=>{

insights.push(warning);

});









// =================================
// Recommendation
// =================================


let recommendations =
this.generateRecommendation(
insights
);



recommendations.forEach(
item=>{

insights.push(item);

});





return insights;



}








/*
================================

Bottleneck Detection

瓶頸

================================
*/


detectBottleneck(events){



let result=[];



let waiting={};



events.forEach(e=>{


if(!e.from || !e.to)

return;



let key =
e.from+"->"+e.to;



waiting[key] =
(waiting[key]||0)+1;



});






Object.entries(waiting)

.forEach(([path,count])=>{



if(count>20){



result.push({

type:"warning",

level:"medium",

title:"Behavior Bottleneck",

value:count,

path:path,

message:

`${path} occurred ${count} times`

});



}



});





return result;



}








/*
================================

Recommendation

建議生成

================================
*/


generateRecommendation(insights){



let result=[];



insights.forEach(item=>{





if(
item.type==="warning"
){



result.push({

type:"recommendation",

level:"high",

title:"Optimization Suggestion",

message:

`Consider improving ${item.path} stage`

});



}





if(
item.title==="Cognitive Load"
&&
item.value>20

){


result.push({

type:"recommendation",

level:"high",

title:"AI Assistance",

message:

"Increase AI guidance during decision stage"

});


}



});





return result;



}



}