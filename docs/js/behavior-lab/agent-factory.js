import {DecisionAgent}
from "./decision-agent.js";



class AgentFactory{


constructor(){

    this.agents=[];

}



createAgents(number){


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



        this.agents.push(
            agent
        );


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


export {AgentFactory};