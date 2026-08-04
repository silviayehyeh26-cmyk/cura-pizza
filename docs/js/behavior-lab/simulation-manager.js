/*
================================

Simulation Manager

AI Behavior Lab

v3.2

Simulation Controller

================================
*/


import {
AgentState
}
from "./agent-state.js";





class SimulationManager {



constructor(){



this.running=false;


this.timeStep=0;


this.agents=[];


this.results=[];


this.agentStates=[];


this.onUpdate=null;


this.onComplete=null;


this.scenario=null;


this.maxSteps=9000;


this.currentStep=0;



}









initialize(agents){



this.agents =
agents;



this.timeStep=0;


this.currentStep=0;




this.agentStates =


agents.map(agent=>{


return new AgentState(


agent,


{


choice:"Waiting",


confidence:0,


cognitiveLoad:0


},


0,


this.scenario


);



});




console.log(

"Simulation Initialized:",

this.agentStates.length,

"Agents"

);



}









start(engine,menu){



this.running=true;


this.currentStep=0;



this.loop(

engine,

menu

);



}









loop(engine,menu){



if(!this.running)

return;



if(

this.currentStep >=

this.maxSteps

){



this.running=false;



if(this.onComplete){

this.onComplete(
this.results
);

}



return;



}





this.currentStep++;



this.runStep(

engine,

menu

);





setTimeout(()=>{


this.loop(

engine,

menu

);



},5);



}









runStep(engine,menu){



this.timeStep++;



this.results=[];





this.agents.forEach(

(agent,index)=>{





let result =

engine.processDecision(

agent,

menu,

this.scenario

);





let state =

this.agentStates[index];





state.choice =

result.choice;



state.confidence =

result.confidence;



state.cognitiveLoad =

result.cognitiveLoad;




/*
=========================
同步真實 Agent
=========================
*/


state.sync();




this.results.push(

state

);




});






if(this.onUpdate){



this.onUpdate(

this.agentStates

);



}



}









setScenario(scenario){



this.scenario=scenario;



}









pause(){


this.running=false;


}









reset(){


this.running=false;


this.timeStep=0;


this.currentStep=0;


this.results=[];


this.agentStates=[];


}





}






export {

SimulationManager

};