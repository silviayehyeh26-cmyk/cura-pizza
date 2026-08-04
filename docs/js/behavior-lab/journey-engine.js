/*
================================

Journey Engine

AI Behavior Lab

v5.0

Customer Life Cycle System

負責:
- Customer Flow
- Target Assignment
- Order Waiting
- Dining Process
- Completion

================================
*/


export class JourneyEngine {



constructor(){


this.states=[


"Entering",

"Exploring",

"Viewing_Menu",

"Ordering",

"Waiting_Food",

"Dining",

"Feedback",

"Leaving",

"Completed"


];


}








initialize(
agent,
restaurantWorld
){



let tables =
restaurantWorld.getTables();



agent.assignedTable =
Math.floor(
Math.random()*tables.length
);




// =====================
// Order System
// =====================


agent.order={

placed:false,

foodReady:false,

delivered:false

};



// =====================
// Dining Timer
// =====================


agent.diningTime=0;



agent.journey={


state:"Entering",



target:

restaurantWorld
.getObject("entrance")
.position,



history:[

{

state:"Entering",

time:Date.now()

}

]


};



}









update(
agent,
restaurantWorld
){



if(
!agent ||
!agent.journey
)

return;



if(
agent.completed
)

return;





let state =
agent.journey.state;





switch(state){



// =====================
// 進入餐廳
// =====================


case "Entering":


this.moveAgent(agent);


if(
this.reachTarget(agent)
){


this.changeState(

agent,

"Exploring",

restaurantWorld

);


}


break;








// =====================
// 探索環境
// =====================


case "Exploring":


this.moveAgent(agent);



if(
this.reachTarget(agent)
){


this.changeState(

agent,

"Viewing_Menu",

restaurantWorld

);


}


break;









// =====================
// 看菜單
// =====================


case "Viewing_Menu":



this.moveAgent(agent);



if(
this.reachTarget(agent)
){


this.changeState(

agent,

"Ordering",

restaurantWorld

);


}


break;









// =====================
// 點餐
// =====================


case "Ordering":



this.moveAgent(agent);



if(
this.reachTarget(agent)
){



// 建立訂單

agent.order.placed=true;



console.log(

agent.id,

"Order Placed"

);



this.changeState(

agent,

"Waiting_Food",

restaurantWorld

);



}



break;









// =====================
// 等待餐點
// 不移動
// =====================


case "Waiting_Food":



// 暫時模擬出餐
// 後續交給 Kitchen Engine


if(
Math.random()<0.01
){


agent.order.foodReady=true;


}



if(
agent.order.foodReady
){



agent.order.delivered=true;


this.changeState(

agent,

"Dining",

restaurantWorld

);



}


break;









// =====================
// 用餐
// =====================


case "Dining":



agent.diningTime++;



if(
agent.diningTime>100
){



this.changeState(

agent,

"Feedback",

restaurantWorld

);



}


break;









// =====================
// 回饋
// =====================


case "Feedback":



this.changeState(

agent,

"Leaving",

restaurantWorld

);



break;









// =====================
// 離開
// =====================


case "Leaving":



this.moveAgent(agent);



if(
this.reachTarget(agent)
){


this.changeState(

agent,

"Completed",

restaurantWorld

);



}



break;









// =====================
// 完成
// =====================

case "Completed":

agent.completed=true;

agent.velocity={
x:0,
y:0
};

break;

}



}












changeState(

agent,

next,

world

){



let old =
agent.journey.state;



agent.journey.state =
next;



console.log(

"JOURNEY",

agent.id,

old,

"→",

next

);





agent.journey.target =

this.getTarget(

agent,

next,

world

);





agent.journey.history.push({

state:next,

time:Date.now()

});



}







getTarget(agent,state,world){


switch(state){


case "Entering":


return world
.getObject("counter")
.position;



case "Exploring":


return {

x:
2400 + (Math.random()-0.5)*800,

y:
2300 + (Math.random()-0.5)*800

};



case "Viewing_Menu":


return this.randomPointAround(

world
.getTables()[agent.assignedTable]
.position

);



case "Ordering":


return world
.getObject("counter")
.position;



case "Waiting_Food":


return world
.getTables()[agent.assignedTable]
.position;



case "Dining":


return world
.getTables()[agent.assignedTable]
.position;



case "Feedback":


return world
.getTables()[agent.assignedTable]
.position;



case "Leaving":


return world
.getObject("exit")
.position;



case "Completed":


return null;


}

}












moveAgent(agent){



let target =
agent.journey.target;



if(!target)
return;



let dx =
target.x-agent.position.x;


let dy =
target.y-agent.position.y;



let distance =

Math.sqrt(

dx*dx+

dy*dy

);




if(distance<1)
return;



let speed = 3;



agent.position.x +=

(dx/distance)
*
speed;



agent.position.y +=

(dy/distance)
*
speed;



}













reachTarget(agent){



let target =
agent.journey.target;



if(!target)
return true;



let dx =
target.x-agent.position.x;



let dy =
target.y-agent.position.y;



return (

Math.sqrt(

dx*dx+

dy*dy

)

<50

);



}












randomPointAround(position){



let radius=150;



return {


x:

position.x+

(Math.random()-0.5)
*
radius,



y:

position.y+

(Math.random()-0.5)
*
radius



};



}



}