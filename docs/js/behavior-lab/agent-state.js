/*
================================

Agent State

AI Behavior Lab

Visualization Data Layer

Version 3.2

同步 Agent 與 Visualization

================================
*/


export class AgentState {



constructor(
    agent,
    result={},
    timeStep=0,
    scenario=null
){



this.agent = agent;



// =========================
// Position Reference
// =========================

if(!agent.position){

    agent.position={

        x:
        Math.random()*5000,

        y:
        Math.random()*5000

    };

}



this.position =
agent.position;




// =========================
// Identity
// =========================


this.id =
agent.id;


this.timeStep =
timeStep;


this.scenario =
scenario;




// =========================
// Decision
// =========================


this.choice =
result.choice
||
"Unknown";


this.confidence =
result.confidence
||
0;


this.cognitiveLoad =
result.cognitiveLoad
||
0;





// =========================
// Personality
// =========================


this.curiosity =
agent.curiosity
||
Math.random();



this.aiTrust =
agent.aiTrust
||
Math.random();



this.priceSensitivity =
agent.priceSensitivity
||
Math.random();



this.brandTrust =
agent.brandTrust
||
Math.random();






// =========================
// Behavior
// =========================


this.status =
this.generateStatus(agent);



this.shape =
this.generateShape(agent);





// =========================
// Size
// =========================


this.importance =
this.calculateImportance();

// =========================
// Behavior Spectrum
// 行為強度 0~1
// =========================

this.behaviorIntensity =
this.calculateBehaviorIntensity();





// =========================
// Visualization
// =========================


this.sync();



}









/*
================================

Sync Real Agent

================================
*/


sync(){


this.position =
this.agent.position;


this.status =
this.agent.status
||
this.generateStatus(this.agent);



this.shape =
this.shape;



}









/*
================================

Generate Status

================================
*/


generateStatus(agent){



if(
agent.journey &&
agent.journey.state
){

return agent.journey.state;

}



return "Entering";


}









/*
================================

Generate Shape

================================
*/


generateShape(agent){


let curiosity =
Number(agent.curiosity) || 0.5;


let trust =
Number(agent.brandTrust) || 0.5;


let price =
Number(agent.priceSensitivity) || 0.5;



// 如果數值是 0~10
if(curiosity > 1)
curiosity /= 10;


if(price > 1)
price /= 10;




let score = {


triangle:
curiosity,


diamond:
trust,


square:
price,


circle:
0.5



};




// 找最高人格

let type =
Object.keys(score)
.sort(
(a,b)=>
score[b]-score[a]
)[0];



return type;


}









/*
================================

Importance

================================
*/


calculateImportance(){



return Number(

(

this.confidence*0.4

+

this.aiTrust*0.3

+

this.curiosity*0.3

)

.toFixed(2)

);



}









/*
================================

External Update

================================
*/


updatePosition(dx,dy){


this.agent.position.x += dx;


this.agent.position.y += dy;



this.position =
this.agent.position;


}

calculateBehaviorIntensity(){


let normalize=(v)=>{


if(v>1)
return v/10;


return v || 0;


};



let values=[


normalize(this.confidence),


normalize(this.cognitiveLoad),


normalize(this.curiosity),


normalize(this.aiTrust),


normalize(this.priceSensitivity),


normalize(this.brandTrust)


];



let total =
values.reduce(
(sum,v)=>sum+v,
0
);



return Math.max(

0,

Math.min(

1,

total/values.length

)

);


}


}