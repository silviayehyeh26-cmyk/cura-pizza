/*
================================

Movement Engine

AI Behavior Lab

Agent Motion System

Version 2.0

負責:
- 自由探索移動
- 閒置微移動
- 邊界限制

注意:
JourneyEngine 管理目標移動
此 Engine 不覆蓋 Journey

================================
*/


export class MovementEngine {



constructor(){


    this.defaultSpeed = 2;


}





update(agentStates){



    agentStates.forEach(agent=>{


        // 已完成離開模擬
        if(agent.completed)
        return;



        /*
        ============================
        Journey 控制優先
        ============================
        */


        if(
            agent.journey
            &&
            [
                "Entering",
                "Exploring",
                "Viewing_Menu",
                "AI_Assisted",
                "Ordering",
                "Dining",
                "Feedback",
                "Completed"
            ]
            .includes(
                agent.journey.state
            )
        ){


            return;


        }





        this.move(agent);



        this.keepBoundary(agent);



    });


}









move(agent){



if(!agent.position)
return;



switch(agent.status){



/*
=====================
自由探索
=====================
*/


case "Exploring":


agent.position.x +=

(
Math.random()-0.5
)
*
4;



agent.position.y +=

(
Math.random()-0.5
)
*
4;


break;






/*
=====================
思考
=====================
*/


case "Thinking":


agent.position.x +=

(
Math.random()-0.5
)
*
1;



agent.position.y +=

(
Math.random()-0.5
)
*
1;


break;







/*
=====================
等待
=====================
*/


case "Waiting":


agent.position.x +=

(
Math.random()-0.5
)
*
0.5;



agent.position.y +=

(
Math.random()-0.5
)
*
0.5;


break;





default:

break;


}



}









keepBoundary(agent){



const width = 5000;

const height = 5000;



if(agent.position.x < 20)

agent.position.x = 20;



if(agent.position.x > width-20)

agent.position.x = width-20;



if(agent.position.y < 20)

agent.position.y = 20;



if(agent.position.y > height-20)

agent.position.y = height-20;



}




}