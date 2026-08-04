/*
================================

Renderer Engine

AI Behavior Lab

Visualization Engine v3.2

================================
*/


export class RendererEngine {



constructor(canvas){


this.canvas=canvas;


this.ctx=
canvas.getContext("2d");



this.baseRadius=8;



this.showGrid=true;

this.showLabel=false;


}









render(world,camera){



this.clear();



let ctx=this.ctx;



ctx.save();





ctx.translate(

this.canvas.width/2,

this.canvas.height/2

);



ctx.scale(

camera.zoom,

camera.zoom

);



ctx.translate(

-camera.x,

-camera.y

);





if(this.showGrid){

this.drawGrid(world);

}




world.objects.forEach(

object=>{

this.drawObject(object);

}

);



this.canvasAgents =
world.agents;


this.avoidOverlap();

world.agents.forEach(

agent=>{


this.drawAgent(agent);


}

);





ctx.restore();



}









clear(){



this.ctx.fillStyle="#faf8f3";


this.ctx.fillRect(

0,

0,

this.canvas.width,

this.canvas.height

);



}






avoidOverlap(){


let agents=this.canvasAgents;


if(!agents)
return;



for(let i=0;i<agents.length;i++){


for(let j=i+1;j<agents.length;j++){


let a=agents[i];

let b=agents[j];


let dx=
b.position.x-a.position.x;


let dy=
b.position.y-a.position.y;


let dist=
Math.sqrt(
dx*dx+dy*dy
);



if(dist<40 && dist>0){


let push=
(40-dist)/40;



a.position.x-=dx*push;

a.position.y-=dy*push;


b.position.x+=dx*push;

b.position.y+=dy*push;


}


}


}


}

drawAgent(agent){



if(!agent.position)

return;



let ctx=this.ctx;



let x =
agent.position.x;



let y =
agent.position.y;



let size =
this.getSize(agent);





ctx.beginPath();





switch(agent.shape){



case "triangle":


ctx.moveTo(
x,
y-size
);


ctx.lineTo(
x-size,
y+size
);


ctx.lineTo(
x+size,
y+size
);


ctx.closePath();


break;





case "diamond":


ctx.moveTo(
x,
y-size
);


ctx.lineTo(
x+size,
y
);


ctx.lineTo(
x,
y+size
);


ctx.lineTo(
x-size,
y
);


ctx.closePath();


break;





case "square":


ctx.rect(

x-size,

y-size,

size*2,

size*2

);


break;





default:


ctx.arc(

x,

y,

size,

0,

Math.PI*2

);


}





ctx.fillStyle =

this.getColor(agent);



ctx.fill();





if(this.showLabel){


ctx.fillStyle="#333";


ctx.font="12px Arial";


ctx.fillText(

agent.id,

x+10,

y

);


}



}









getSize(agent){


let importance =
agent.importance || 0;


let intensity =
agent.intensity || 0;



return (

this.baseRadius

+

importance*10

+

intensity*8

);


}



getColor(agent){



let state =
agent.journey?.state
||
agent.status;



const stateMap = {


Waiting:
"Entering",


Thinking:
"Viewing_Menu",


Exploring:
"Exploring",


Ordering:
"Ordering",


Finished:
"Completed"


};


state =
stateMap[state]
||
state;


let intensity =
agent.behaviorIntensity
||
0.5;




const spectrum={


Entering:
[120,120,120],


Exploring:
[30,120,255],


Viewing_Menu:
[0,180,255],


AI_Assisted:
[170,50,220],


Ordering:
[50,200,100],


Dining:
[255,160,20],


Feedback:
[150,90,60],


Completed:
[80,80,80]


};




let base =
spectrum[state]
||
[150,150,150];





// 光譜強度

let min=0.25;

let max=1;



let power =
min +
(intensity*(max-min));





let r =
Math.floor(
base[0]*power
);



let g =
Math.floor(
base[1]*power
);



let b =
Math.floor(
base[2]*power
);





return `rgb(
${r},
${g},
${b}
)`;



}



getStateFromStatus(agent){


const map={


"Waiting":
"Entering",


"Thinking":
"AI_Assisted",


"Exploring":
"Exploring",


"Ordering":
"Ordering",


"Finished":
"Completed"


};


return map[agent.status];


}





drawGrid(world){



let ctx=this.ctx;


ctx.strokeStyle="#eeeeee";


for(
let x=0;
x<=world.width;
x+=100
){


ctx.beginPath();

ctx.moveTo(x,0);

ctx.lineTo(
x,
world.height
);

ctx.stroke();


}



for(
let y=0;
y<=world.height;
y+=100
){


ctx.beginPath();

ctx.moveTo(0,y);

ctx.lineTo(
world.width,
y
);

ctx.stroke();


}



}



drawObject(object){



let ctx=this.ctx;



let x =
object.position.x;


let y =
object.position.y;



let w =
object.size?.width || 100;


let h =
object.size?.height || 100;





const map={


entrance:"#81C784",


counter:"#FFB74D",


kitchen:"#EF9A9A",


table:"#90CAF9",


exit:"#BDBDBD"


};





ctx.fillStyle =

map[object.type]

||

"#ccc";






ctx.fillRect(


x-w/2,


y-h/2,


w,


h


);




}








toggleGrid(){

this.showGrid=
!this.showGrid;

}



toggleLabel(){

this.showLabel=
!this.showLabel;

}



}