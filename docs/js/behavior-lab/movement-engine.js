/*
================================

Movement Engine

AI Behavior Lab

Agent Motion System

Version 1.0

================================
*/


export class MovementEngine {



constructor(){


    this.speed = 1;


}







update(agentStates){



    agentStates.forEach(agent=>{


        this.move(agent);


        this.keepBoundary(agent);


    });


}







move(agent){



switch(agent.status){



    // =====================
    // 探索型
    // =====================


    case "Exploring":


        agent.position.x +=

        (
            Math.random()-0.5
        )
        *
        4;



        agent.position.y +=

        (
            Math.random()-0.5
        )
        *
        4;


        break;





    // =====================
    // 思考型
    // =====================


    case "Thinking":


        agent.position.x +=

        (
            Math.random()-0.5
        )
        *
        1.5;



        agent.position.y +=

        (
            Math.random()-0.5
        )
        *
        1.5;


        break;






    // =====================
    // 購買型
    // =====================


    case "Ordering":



        agent.position.x +=

        (
            Math.random()-0.5
        )
        *
        2;



        agent.position.y +=

        (
            Math.random()-0.5
        )
        *
        2;



        break;







    // =====================
    // 等待型
    // =====================


    case "Waiting":


        agent.position.x +=

        (
            Math.random()-0.5
        )
        *
        0.5;



        agent.position.y +=

        (
            Math.random()-0.5
        )
        *
        0.5;


        break;



}



}









keepBoundary(agent){



const width=700;

const height=500;



if(agent.position.x<20)

agent.position.x=20;



if(agent.position.x>width-20)

agent.position.x=width-20;



if(agent.position.y<20)

agent.position.y=20;



if(agent.position.y>height-20)

agent.position.y=height-20;



}







}