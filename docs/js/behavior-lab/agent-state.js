/*
================================

Agent State

AI Behavior Lab

Visualization Data Layer

Version 2.0

================================
*/


export class AgentState {



constructor(
    agent,
    result,
    timeStep,
    scenario
){

this.agent = agent;

if(!agent.position){

    agent.position={

        x:Math.random()*5000,

        y:Math.random()*5000

    };

}


this.position =
agent.position;

    // =========================
    // Basic Identity
    // =========================


    this.id =
    agent.id;



    this.timeStep =
    timeStep;



    this.scenario =
    scenario;



    // =========================
    // Decision Data
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
    // Agent Personality
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
// Link To Real Agent Position
// =========================

this.agent = agent;





    // =========================
    // Behavior Status
    // =========================


    this.status =
    this.generateStatus(agent);



    // =========================
    // Shape Category
    // =========================


    this.shape =
    this.generateShape(agent);




    // =========================
    // Size / Importance
    // =========================


    this.importance =
    this.calculateImportance();



}








/*
================================

Generate Status

決策狀態

================================
*/


generateStatus(agent){



    let curiosity =
    agent.curiosity
    ||
    0.5;



    let aiTrust =
    agent.aiTrust
    ||
    0.5;



    let price =
    agent.priceSensitivity
    ||
    0.5;





    if(aiTrust > 0.75){

        return "Thinking";

    }



    if(curiosity > 0.75){

        return "Exploring";

    }



    if(price > 0.75){

        return "Waiting";

    }



    return "Ordering";



}








/*
================================

Generate Shape

Agent 類型

================================
*/


generateShape(agent){


let curiosity =
(agent.curiosity || 5) / 10;


let trust =
agent.brandTrust || 0.5;


let price =
(agent.priceSensitivity || 5) / 10;



// 探索型
if(
curiosity > 0.7
&&
curiosity > trust
){

    return "triangle";

}



// 品牌信任型
if(
trust > 0.7
){

    return "diamond";

}



// 價格敏感型
if(
price > 0.6
){

    return "square";

}



// 一般消費者

return "circle";


}










/*
================================

Importance

影響程度

未來決定大小

================================
*/


calculateImportance(){


    return Number(

        (

        this.confidence * 0.4

        +

        this.aiTrust * 0.3

        +

        this.curiosity * 0.3

        )

        .toFixed(2)

    );


}





/*
================================

Update Position

給 Movement Engine 使用

================================
*/


updatePosition(dx,dy){


    this.position.x += dx;


    this.position.y += dy;



}






}