import {DecisionAgent} 
from "./decision-agent.js";

import {AgentFactory}
from "./agent-factory.js";

import {
BehaviorEngine
}
from "./behavior-engine.js";

import {
SimulationManager
}
from "./simulation-manager.js";

import {
BehaviorDashboard
}
from "./dashboard.js";

import {
BehaviorTimeline
}
from "./behavior-timeline.js";

import {
DataCollector
}
from "./data-collector.js";

import {
ScenarioManager
}
from "./scenario-manager.js";

import {
ExperimentManager
}
from "./experiment-manager.js";

import {
CompareEngine
}
from "./compare-engine.js";

import {
AgentState
}
from "./agent-state.js";



import {
VisualizationEngine
}
from "./visualization-engine.js";

import {
RestaurantWorld
}
from "./restaurant-world.js";

import {
MovementEngine
}
from "./movement-engine.js";

import {
StateTransitionEngine
}
from "./state-transition-engine.js";

import {
JourneyEngine
}
from "./journey-engine.js";


let timeline =
new BehaviorTimeline();

const canvas =
document.getElementById(
"behaviorCanvas"
);


let visualization =
new VisualizationEngine(
canvas
);

let restaurantWorld =
new RestaurantWorld(
visualization.world
);


restaurantWorld.initialize();


window.restaurantWorld =
restaurantWorld;

// v3 World Reference

window.world =
visualization.world;


window.camera =
visualization.camera;


window.renderer =
visualization.renderer;

window.visualization =
visualization;

visualization.onAgentClick =
(agent)=>{

let realAgent =
simulationAgents.find(
a=>a.id===agent.id
);

let panel =
document.getElementById(
"agentInspector"
);


panel.classList.remove(
"hidden"
);



document.getElementById(
"agentBasic"
).innerHTML = `


<b>${agent.id}</b>

<br>

Shape:
${agent.shape}

<br>

Status:
${agent.status}


`;





document.getElementById(
"agentPersona"
).innerHTML = `


Curiosity:
${realAgent.curiosity}

<br>

Price Sensitivity:
${agent.priceSensitivity}


`;





let history =
realAgent.decisionHistory || [];



document.getElementById(
"agentPath"
).innerHTML =

history.length

?

history
.slice(-5)
.map(
h=>
`
<div class="
path-item
${getPathClass(h.action)}
">


<b>
${getPathName(h.action)}
</b>


<br>


${

h.choice

?

"Choice: "
+
h.choice

:

""

}


</div>
`
)
.join("")

:

"No Decision Yet";






let load =
realAgent.cognitiveLoad || 0;


let trust =
realAgent.aiTrust || 0;





document.getElementById(
"loadBar"
)
.style.width =

(load*100)
+
"%";





document.getElementById(
"trustBar"
)
.style.width =

(trust*100)
+
"%";






document.getElementById(
"agentHistory"
).innerHTML =

history.length

?

"Total Actions: "
+
history.length

:

"No History";



};

function getPathClass(action){


switch(action){


case "observe_menu":

return "path-observe";


case "evaluate":

return "path-evaluate";


case "compare_options":

return "path-compare";


case "AI_assist":

return "path-ai";


case "select":

return "path-select";


case "decision_complete":

return "path-complete";


default:

return "";

}


}





function getPathName(action){


const map={


observe_menu:
"Observe Menu（接收資訊）",


evaluate:
"Evaluate（評估選項）",


compare_options:
"Compare Options（比較方案）",


AI_assist:
"AI Assist（AI輔助）",


decision_complete:
"Decision Complete（完成決策）",


select:
"Select（選擇）"


};


return map[action] || action;


}

let movement =
new MovementEngine();

let stateTransition =
new StateTransitionEngine();

let journey =
new JourneyEngine();


window.journey =
journey;

let agentFactory =
new AgentFactory();

let behaviorEngine =
new BehaviorEngine();

window.behaviorEngine =
behaviorEngine;

let simulationManager =
new SimulationManager();

window.simulationManager =
simulationManager;

let agentStates = [];

window.agentStates =
agentStates;

let dashboard =
new BehaviorDashboard();

let dataCollector =
new DataCollector();

let scenarioManager =
new ScenarioManager();

window.scenarioManager =
scenarioManager;

let experimentManager =
new ExperimentManager();

window.experimentManager =
experimentManager;

let compareEngine =
new CompareEngine();

window.compareEngine =
compareEngine;



function initializeAgents(){


    let agents =
    agentFactory.createAgents(100);



    simulation.agents =
    agents.length;


    simulationAgents =
agents;


window.simulationAgents =
simulationAgents;

    simulationManager.initialize(
    agents
);

simulationManager.initialize(
    agents
);



agents.forEach(agent=>{


    const pos =
visualization.world.randomPosition();

agent.position = {
    x: pos.x,
    y: pos.y
};



   



    journey.initialize(

        agent,

        restaurantWorld

        

    );


});



agentStates =
simulationManager.agentStates;



window.agentStates =
agentStates;

simulationManager.onUpdate =
(results)=>{


stateTransition.update(
agentStates
);



simulationAgents.forEach(agent=>{

    journey.update(
        agent,
        restaurantWorld
    );

  

    const state =
    agentStates.find(
        s => s.id === agent.id
    );

    if(state){

        state.position = {
            x: agent.position.x,
            y: agent.position.y
        };

        state.status =
        agent.journey.state;

    }

});

console.log(
"RENDER FIRST",
agentStates[0]
);

visualization.render(
agentStates
);



dashboard.updateDecision(
results
);


dashboard.updateMetrics(
results
);


dataCollector.collect(
results
);



};

simulationManager.onComplete =
(results)=>{


    experimentManager.collectResult(
        results
    );


};

    console.log(
        agents
    );


    updateUI();


}

console.log(
    "AI Behavior Lab Initialized"
);



let simulation = {

    running:false,

    agents:0,

    time:0,

    scenario:"Normal"

};

let simulationAgents = [];



const agentCount =
document.getElementById("agentCount");


const timeStep =
document.getElementById("timeStep");



const scenarioStatus =
document.getElementById("currentScenario");

const scenarioSelect =
document.getElementById(
    "scenarioSelect"
);


const scenarioDisplay =
document.getElementById(
    "scenarioDisplay"
);



document
.getElementById("startSimulation")
.onclick=function(){


    simulation.running=true;


if(simulation.agents===0){

    initializeAgents();
 simulationManager.setScenario(

    scenarioManager.getScenario()

);


simulationManager.start(

    behaviorEngine,

    simulationMenu

);
 

}

    
  
    console.log(
        "Simulation Started"
    );


};

function runAgentDecision(){


    let agent =
    simulationAgents[0];



    let result =
    behaviorEngine.processDecision(

        agent,

        simulationMenu

    );



    console.log(
        "Behavior Result:",
        result
    );



    console.log(
        "Agent History:",
        agent.decisionHistory
    );


}



document
.getElementById("pauseSimulation")
.onclick=function(){


    simulation.running=false;


};






document
.getElementById("resetSimulation")
.onclick=function(){


    simulation={

        running:false,

        agents:0,

        time:0,

        scenario:"Normal"

    };


    updateUI();


};







function updateUI(){


    agentCount.innerText =
    simulation.agents;


    timeStep.innerText =
    simulation.time;


    scenarioStatus.innerText =
    scenarioManager.getScenario().name;


}


scenarioSelect.onchange=function(){


    let selectedScenario =
    this.value;



    scenarioManager.setScenario(
        selectedScenario
    );



    let currentScenario =
    scenarioManager.getScenario();






    scenarioStatus.innerText =
currentScenario.name;



    console.log(
        "Scenario Changed:",
        currentScenario
    );


};


updateUI();

console.log(
"Initial Agent States",
agentStates.slice(0,5)
);

const inspector =
document.getElementById(
"agentInspector"
);


const header =
document.getElementById(
"inspectorHeader"
);


let dragging=false;


let offsetX=0;

let offsetY=0;




document
.getElementById(
"followAgentBtn"
)
.onclick=function(){

visualization.followMode =
!visualization.followMode;


if(
visualization.followMode &&
visualization.selectedAgent
){


visualization.followAgent(
visualization.selectedAgent
);


}
else{


visualization.stopFollow();


}



this.innerText =

visualization.followMode

?

"Fixed Mode"

:

"Follow Agent";


};

/*
================================
Camera Controls
================================
*/


document
.getElementById("zoomInBtn")
.onclick=function(){


visualization.camera.zoomIn();


};



document
.getElementById("zoomOutBtn")
.onclick=function(){


visualization.camera.zoomOut();


};






document
.getElementById("gridToggleBtn")
.onclick=function(){


visualization.toggleGrid();


};






document
.getElementById("labelToggleBtn")
.onclick=function(){


visualization.toggleLabel();


};






document
.getElementById("fullscreenBtn")
.onclick=function(){


visualization.fullscreen();


};







setInterval(()=>{


if(window.camera){


document
.getElementById("zoomValue")
.innerText =
camera.zoom.toFixed(2);



document
.getElementById("cameraPosition")
.innerText =

Math.round(camera.x)

+

" , "

+

Math.round(camera.y);


}


},200);