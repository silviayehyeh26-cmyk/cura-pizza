/*
================================

Journey Engine

AI Behavior Lab

v3.1

Agent Life Cycle System

代理人旅程系統

================================
*/


export class JourneyEngine {



constructor(){


    this.states=[

        "Entering",

        "Exploring",

        "Viewing_Menu",

        "AI_Assisted",

        "Ordering",

        "Dining",

        "Feedback",

        "Completed"

    ];



}





/*
================================

Initialize Journey

================================
*/


initialize(agent,restaurantWorld){



    let entrance =
    restaurantWorld.getObject(
        "entrance"
    );



    agent.journey={


        state:"Entering",


        target:
        entrance
        ?
        entrance.position
        :
        {
            x:2500,
            y:2500
        },


        history:[

            {

                state:"Entering",

                time:0

            }

        ]


    };




    agent.velocity={

        x:0,

        y:0

    };



    agent.speed=50;



}





/*
================================

Update

================================
*/


update(agent,restaurantWorld){



    if(
        !agent ||
        !agent.journey
    ){

        return;

    }




    if(
        agent.journey.state==="Completed"
    ){

        return;

    }




    let target =
    this.getTarget(

        agent.journey.state,

        restaurantWorld

    );





    if(target){


        agent.journey.target =
        target;


    }





    if(
        !agent.journey.target
    ){

        return;

    }




    this.moveAgent(agent);




    if(
        this.reachTarget(agent)
    ){

        this.nextState(agent);

    }




}






/*
================================

Movement

================================
*/


moveAgent(agent){



    let target =
    agent.journey.target;



    if(
        !target ||
        !agent.position
    ){

        return;

    }




    let dx =
    target.x -
    agent.position.x;



    let dy =
    target.y -
    agent.position.y;



    let distance =
    Math.sqrt(

        dx*dx+
        dy*dy

    );



    if(distance===0)

    return;





    agent.velocity.x =
    dx/distance;



    agent.velocity.y =
    dy/distance;




    agent.position.x +=

    agent.velocity.x *

    agent.speed;



    agent.position.y +=

    agent.velocity.y *

    agent.speed;

    console.log(
agent.id,
agent.position
);





}






/*
================================

Check Arrival

================================
*/


reachTarget(agent){



    if(
        !agent.journey ||
        !agent.journey.target
    ){

        return false;

    }



    let target =
    agent.journey.target;



    let dx =
    target.x -
    agent.position.x;



    let dy =
    target.y -
    agent.position.y;



    let distance =
    Math.sqrt(

        dx*dx+
        dy*dy

    );



    return distance < 30;



}





/*
================================

State Transition

================================
*/


nextState(agent){



    let current =
    agent.journey.state;



    let index =
    this.states.indexOf(
        current
    );




    if(
        index <
        this.states.length-1
    ){



        let next =
        this.states[index+1];



        agent.journey.state =
        next;




        agent.journey.history.push({

            state:next,

            time:Date.now()

        });



    }



}






/*
================================

Target Mapping

================================
*/


getTarget(state,world){



    switch(state){



        case "Entering":


            return world.getObject(
                "entrance"
            )?.position;



        case "Exploring":


            return world.getObject(
                "counter"
            )?.position;




        case "Viewing_Menu":


            return world.getTables()?.[0]?.position;




        case "AI_Assisted":


            return world.getObject(
                "counter"
            )?.position;




        case "Ordering":


            return world.getObject(
                "counter"
            )?.position;




        case "Dining":


            return world.getTables()?.[2]?.position;




        case "Feedback":


            return world.getObject(
                "exit"
            )?.position;




        case "Completed":


            return null;



        default:


            return null;


    }



}





getState(agent){


    if(!agent.journey)

    return null;


    return agent.journey.state;


}



}