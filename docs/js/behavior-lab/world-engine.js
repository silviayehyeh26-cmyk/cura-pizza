/*
================================

World Engine

AI Behavior Lab

Visualization Engine v3.0

世界引擎

Responsible for:

- World Space
- Agent Position
- Object Management
- Coordinate System

================================
*/


export class WorldEngine {



constructor(width=5000,height=5000){



    /*
    ================================
    World Size
    世界大小
    ================================
    */


    this.width = width;

    this.height = height;




    /*
    ================================
    Agents
    代理人
    ================================
    */


    this.agents = [];




    /*
    ================================
    Objects

    未來放:
    - Table
    - Door
    - Kitchen
    - Restaurant

    ================================
    */


    this.objects=[];



    console.log(
        "World Created:",
        this.width,
        "x",
        this.height
    );



}





/*
================================
Add Agent

加入 Agent
================================
*/


addAgent(agent){



    if(!agent.position){


        agent.position =
        this.randomPosition();


    }



    this.agents.push(agent);



}







/*
================================
Remove Agent

移除 Agent
================================
*/


removeAgent(agentId){



    this.agents =
    this.agents.filter(
        agent=>
        agent.id!==agentId
    );



}







/*
================================
Spawn Position

生成位置

================================
*/


randomPosition(){



return {


    x:
    Math.random()
    *
    this.width,



    y:
    Math.random()
    *
    this.height



};


}









/*
================================
Add Object

加入世界物件

未來餐廳使用

================================
*/


addObject(object){


    this.objects.push(
        object
    );


}









/*
================================
Check Boundary

限制 Agent 不離開世界

================================
*/


clampPosition(position){



    position.x =
    Math.max(

        0,

        Math.min(
            this.width,
            position.x
        )

    );



    position.y =
    Math.max(

        0,

        Math.min(
            this.height,
            position.y
        )

    );



    return position;



}









/*
================================
Update

世界更新

每個 Simulation Step 呼叫

================================
*/


update(){



    this.agents.forEach(agent=>{


        if(agent.position){


            this.clampPosition(
                agent.position
            );


        }



    });



}









/*
================================
Get Agent

取得 Agent

================================
*/


getAgent(id){



return this.agents.find(

agent=>
agent.id===id

);


}









/*
================================
Clear World

重置世界

================================
*/


clear(){



    this.agents=[];

    this.objects=[];



}









/*
================================
Statistics

世界資訊

================================
*/


getInfo(){



return {


    width:this.width,


    height:this.height,


    agents:
    this.agents.length,


    objects:
    this.objects.length



};



}





}