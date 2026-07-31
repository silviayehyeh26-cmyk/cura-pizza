/*
================================

State Transition Engine

Agent Behavior Evolution

Version 1.0

================================
*/


export class StateTransitionEngine {



constructor(){


    this.transitions = {


        Waiting:[
            "Thinking"
        ],


        Thinking:[
            "Exploring",
            "Ordering"
        ],


        Exploring:[
            "Thinking",
            "Ordering"
        ],


        Ordering:[
            "Finished"
        ],


        Finished:[
            "Waiting"
        ]


    };


}








update(agentStates){



agentStates.forEach(agent=>{


    this.evaluate(agent);


});



}







evaluate(agent){



// 每個 step 有機率轉換


let probability = 0.05;



if(
Math.random()
<
probability
){



let possible =

this.transitions[
agent.status
];



if(possible){



let next =

possible[
Math.floor(
Math.random()*possible.length
)
];



this.changeStatus(
agent,
next
);



}



}



}








changeStatus(agent,newStatus){



if(
agent.status !== newStatus
){


console.log(

"Agent",

agent.id,

":",

agent.status,

"→",

newStatus

);



agent.status =
newStatus;



}



}




}