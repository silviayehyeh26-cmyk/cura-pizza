/*
================================

Navigation Engine

AI Behavior Lab

v3.4

Obstacle Avoidance System

================================
*/


export class NavigationEngine {



constructor(){


    this.obstacles=[];


    this.margin=80;


}







initialize(world){



this.obstacles =


world.objects.filter(

object=>

object.type==="kitchen"

);



console.log(

"Navigation Obstacles",

this.obstacles

);



}









isBlocked(position){



for(
let obstacle of this.obstacles
){



let left =

obstacle.position.x

-

obstacle.size.width/2

-

this.margin;



let right =

obstacle.position.x

+

obstacle.size.width/2

+

this.margin;




let top =

obstacle.position.y

-

obstacle.size.height/2

-

this.margin;




let bottom =

obstacle.position.y

+

obstacle.size.height/2

+

this.margin;






if(

position.x > left

&&

position.x < right

&&

position.y > top

&&

position.y < bottom

){


return true;


}



}



return false;



}









avoid(agent){



let next = {


x:

agent.position.x

+

agent.velocity.x

*

agent.speed,



y:

agent.position.y

+

agent.velocity.y

*

agent.speed


};





if(
this.isBlocked(next)
){



/*
遇到障礙

改變方向

*/


agent.velocity.x *= -1;



agent.velocity.y *= -1;



}



}





}