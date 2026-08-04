/*
================================

Visualization Engine

AI Behavior Lab

Version 3.0 Alpha

Visualization Controller

負責整合：

World

Camera

Renderer

Interaction

================================
*/


import {
    WorldEngine
}
from "./world-engine.js";


import {
    CameraEngine
}
from "./camera-engine.js";


import {
    RendererEngine
}
from "./renderer-engine.js";





export class VisualizationEngine {



constructor(canvas){



    this.canvas = canvas;



    this.ctx =
    canvas.getContext("2d");




    /*
    ================================
    Core Engine
    ================================
    */


    this.world =
    new WorldEngine(
        5000,
        5000
    );



    this.camera =
    new CameraEngine(

        canvas.width,

        canvas.height

    );



    this.renderer =
    new RendererEngine(
        canvas
    );







    /*
    ================================
    State
    ================================
    */


    this.agents=[];


    this.selectedAgent=null;


    this.onAgentClick=null;


    this.followMode=false;



    this.resize();



    this.bindEvents();




}









/*
================================

Resize

================================
*/


resize(){



const rect =
this.canvas.parentElement
.getBoundingClientRect();



this.canvas.width =
rect.width *
window.devicePixelRatio;



this.canvas.height =
rect.height *
window.devicePixelRatio;



this.canvas.style.width =
rect.width+"px";



this.canvas.style.height =
rect.height+"px";




this.camera.resize(

rect.width,

rect.height

);



}



 









/*
================================

Render

主渲染入口

================================
*/


render(agentStates){


    this.agents =
    agentStates;



    this.world.agents =
    agentStates.map(
        state=>state
    );



    this.camera.update();



    this.renderer.render(

        this.world,

        this.camera

    );


}









/*
================================

Click Agent

================================
*/


handleClick(e){



const rect =
this.canvas.getBoundingClientRect();




let screenX =
e.clientX -
rect.left;



let screenY =
e.clientY -
rect.top;





let worldPosition =
this.camera.screenToWorld(

    screenX,

    screenY

);






for(
    let agent of this.agents
){


if(!agent.position)
continue;



let dx =
agent.position.x -
worldPosition.x;



let dy =
agent.position.y -
worldPosition.y;



let distance =
Math.sqrt(

dx*dx+
dy*dy

);





if(distance < 40){



this.selectedAgent =
agent;



if(this.onAgentClick){



this.onAgentClick(
    agent
);



}



return;



}




}



}









/*
================================

Follow Agent

================================
*/


followAgent(agent){



this.camera.follow(
    agent
);



}









/*
================================

Stop Follow

================================
*/


stopFollow(){



this.camera.stopFollow();



}









/*
================================

Mouse Events

================================
*/


bindEvents(){





this.canvas.addEventListener(

"click",

(e)=>{


this.handleClick(e);


}

);









this.canvas.addEventListener(

"wheel",

(e)=>{


e.preventDefault();




if(
e.deltaY < 0
){


this.camera.zoomIn();


}

else{


this.camera.zoomOut();


}



}

);









let dragging=false;



this.canvas.addEventListener(

"mousedown",

(e)=>{


dragging=true;



this.camera.startDrag(

e.clientX,

e.clientY

);



}

);






this.canvas.addEventListener(

"mousemove",

(e)=>{


if(!dragging)

return;



this.camera.drag(

e.clientX,

e.clientY

);



}

);







window.addEventListener(

"mouseup",

()=>{


dragging=false;


this.camera.endDrag();



}

);



}









/*
================================

Control

================================
*/


setMode(mode){

// 保留舊 API

this.mode=mode;


}



toggleGrid(){



this.renderer.toggleGrid();



}



toggleLabel(){



this.renderer.toggleLabel();



}



toggleTrail(){



this.renderer.toggleTrail();



}









/*
================================

Fullscreen

預留

================================
*/


fullscreen(){



if(
this.canvas.requestFullscreen
){



this.canvas.requestFullscreen();



}



}







}