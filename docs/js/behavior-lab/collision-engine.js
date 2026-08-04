/*
================================

Collision Engine

AI Behavior Lab

v3.3

Agent Separation System

代理人避碰

================================
*/


export class CollisionEngine {



constructor(){


    this.minDistance = 50;


    this.pushStrength = 2;


}






update(agentStates){



for(
let i=0;
i<agentStates.length;
i++
){


for(
let j=i+1;
j<agentStates.length;
j++
){



this.resolve(

agentStates[i],

agentStates[j]

);



}


}



}









resolve(a,b){



if(
!a.position ||
!b.position
)

return;





let dx =

b.position.x -

a.position.x;



let dy =

b.position.y -

a.position.y;




let distance =

Math.sqrt(

dx*dx+

dy*dy

);






if(
distance === 0
)

return;







if(
distance <
this.minDistance
){



let overlap =

this.minDistance-distance;





let nx =

dx/distance;



let ny =

dy/distance;





a.position.x -=

nx *

overlap *

0.5 *

this.pushStrength;



a.position.y -=

ny *

overlap *

0.5 *

this.pushStrength;





b.position.x +=

nx *

overlap *

0.5 *

this.pushStrength;



b.position.y +=

ny *

overlap *

0.5 *

this.pushStrength;



}





}






}