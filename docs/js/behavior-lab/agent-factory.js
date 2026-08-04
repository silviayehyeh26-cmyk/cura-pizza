/*
================================

Agent Factory

AI Behavior Lab

Agent Generator

Version 3.2

建立模擬使用者

================================
*/


import {
DecisionAgent
}
from "./decision-agent.js";




class AgentFactory{





constructor(){


    this.agents=[];


}









createAgents(number){



    this.agents=[];




    for(
        let i=0;
        i<number;
        i++
    ){



        let profile =
        this.randomProfile();




        let agent =
        new DecisionAgent(

            "Agent_" +
            String(i+1)
            .padStart(3,"0"),


            profile

        );






        /*
        =========================
        Movement Data
        =========================
        */


        agent.position = {

            x:
            200 +

            Math.random()*200,


            y:
            200 +

            Math.random()*200

        };




        agent.velocity = {

            x:0,

            y:0

        };





        /*
        每個人速度不同

        */


        agent.speed =

        8 +

        Math.random()*6;






        /*
        碰撞半徑

        */


        agent.radius =

        15;





        /*
        Visualization

        */


        agent.status =
        "Entering";




        this.agents.push(
            agent
        );

        // ===============================
// Personality Profile
// Agent Behavior Diversity
// ===============================


agent.curiosity =
Math.random();


agent.priceSensitivity =
Math.random();


agent.aiTrust =
Math.random();


agent.brandTrust =
Math.random();



/*
Decision Style

fast:
快速決策

explorer:
探索比較

careful:
謹慎分析

*/


let styleRandom =
Math.random();



if(styleRandom < 0.33){


agent.decisionStyle =
"fast";


}

else if(styleRandom < 0.66){


agent.decisionStyle =
"explorer";


}

else{


agent.decisionStyle =
"careful";


}



    }




    return this.agents;



}









randomProfile(){



    let index =

    Math.floor(

        Math.random()

        *

        agentProfiles.length

    );



    return agentProfiles[index];



}





}





export {

AgentFactory

};