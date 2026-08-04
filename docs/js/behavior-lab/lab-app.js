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

import {
BehaviorMatrixEngine
}
from "./behavior-matrix-engine.js";

import {
CollisionEngine
}
from "./collision-engine.js";

import {
NavigationEngine
}
from "./navigation-engine.js";

import {
EventEngine
}
from "./event-engine.js";

import {
TimelineEngine
}
from "./timeline-engine.js";

import {
BehaviorAnalyzer
}
from "./behavior-analyzer.js";

import {
PatternMiningEngine
}
from "./pattern-mining-engine.js";

import {
DecisionInsightEngine
}
from "./decision-insight-engine.js";

import {
InsightDashboard
}
from "./insight-dashboard.js";



let eventEngine =
new EventEngine();

window.eventEngine =
eventEngine;

let timelineEngine =
new TimelineEngine();

window.timelineEngine =
timelineEngine;

let timeline =
new BehaviorTimeline();

let analyzer =
new BehaviorAnalyzer();

window.analyzer =
analyzer;

const canvas =
document.getElementById(
"behaviorCanvas"
);

let patternMining =
new PatternMiningEngine();

window.patternMining =
patternMining;

const insightDashboard =

new InsightDashboard(

"insight-container"

);


window.insightDashboard =
insightDashboard;

let visualization =
new VisualizationEngine(
canvas
);

let restaurantWorld =
new RestaurantWorld(
visualization.world
);

const insightEngine =
new DecisionInsightEngine();

window.insightEngine =
insightEngine;

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

let behaviorMatrix =
new BehaviorMatrixEngine();


window.behaviorMatrix =
behaviorMatrix;

let navigation =
new NavigationEngine();

let collision =
new CollisionEngine();


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

experimentManager.initialize();

experimentManager.setCurrent("normal");

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





agents.forEach(agent=>{


    /*
    =========================
    Spawn Position
    避免全部重疊出生
    =========================
    */


    const pos =
    visualization.world.randomPosition();



    agent.position = {

        x:pos.x,

        y:pos.y

    };



    agent.velocity={

        x:0,

        y:0

    };



    /*
    初始化 Journey
    */


    journey.initialize(

        agent,

        restaurantWorld

    );



});


agentStates =
agents.map(agent=>{


let state =
new AgentState(

    agent,

    {
        choice:"Waiting",
        confidence:0,
        cognitiveLoad:0
    },

    0,

    scenarioManager.getScenario()

);



state.position.x =
agent.position.x;


state.position.y =
agent.position.y;



return state;


});



window.agentStates =
agentStates;

simulationManager.onUpdate =
(results)=>{

console.log(
agentStates[0].shape,
agentStates[0].status
);

console.log(
agentStates[0].behaviorIntensity
);
/*
=========================
1. 狀態轉換
=========================
*/


stateTransition.update(
agentStates
);





/*
=========================
2. Journey Movement
=========================
*/
collision.update(
agentStates
);

simulationAgents.forEach(agent=>{



    journey.update(
agent,
restaurantWorld,
behaviorMatrix
);




    let state =

    agentStates.find(

        s=>s.id===agent.id

    );



if(state){


state.position.x =
agent.position.x;


state.position.y =
agent.position.y;


state.status =
agent.journey.state;


state.shape =
state.generateShape(agent);


state.intensity =
agent.intensity || 0.5;


}



});







/*
=========================
3. Render
=========================
*/


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

simulationManager.onComplete=(results)=>{

    const exp=
    experimentManager.getCurrent();

    experimentManager.saveResult(

        exp.id,

        results

    );

    if(exp.id==="normal"){

    compareEngine.setNormal(results);

}else{

    compareEngine.setAI(results);

}

window.lastCompare =
compareEngine.compare();

console.log(
"Compare Result:",
window.lastCompare
);

    console.log(

        "Experiment Finished",

        exp.id

    );

    const timelineData =
timelineEngine.getTimeline();


console.log(
"Timeline Size:",
timelineData.length
);



const report =
analyzer.analyze(
    timelineData
);



console.log(
"Behavior Report:",
report
);



const patterns =
patternMining.mine(
    timelineData.slice(-5000)
);

console.log(
"PATTERN CHECK",
patterns
);



const compareResult =
compareEngine.compare();

const insights =
insightEngine.generate(

    compareResult,

    report,

    patterns

);

window.lastInsights = insights;

console.log(
    "INSIGHTS SAVED"
);

insightDashboard.render(
    insights
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
const currentExperiment =
experimentManager.getCurrent();

simulationManager.setScenario({

    ...scenarioManager.getScenario(),

    aiAssist:
    currentExperiment.aiAssist

});


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