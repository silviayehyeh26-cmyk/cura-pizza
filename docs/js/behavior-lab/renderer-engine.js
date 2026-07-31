/*
================================

Renderer Engine

AI Behavior Lab

Visualization Engine v3.0

渲染引擎

Responsible for:

- Drawing World
- Drawing Grid
- Drawing Agents
- Drawing Trails

================================
*/


export class RendererEngine {



constructor(canvas){


    this.canvas = canvas;


    this.ctx =
    canvas.getContext("2d");



    this.baseRadius = 8;



    this.showGrid=true;


    this.showTrail=true;


    this.showLabel=false;



}







/*
================================

Clear Canvas

清除畫面

================================
*/


clear(){



    this.ctx.fillStyle =
    "#faf8f3";



    this.ctx.fillRect(

        0,

        0,

        this.canvas.width,

        this.canvas.height

    );


}









/*
================================

Render World

主要入口

================================
*/


render(world,camera){



    this.clear();



    let ctx=this.ctx;



    ctx.save();





    /*
    Camera Transform

    世界 → 畫面

    */


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

    this.drawGrid(
        world
    );

}


/*
================================
Draw Restaurant Objects
================================
*/


world.objects.forEach(object=>{


    this.drawObject(object);


});





/*
================================
Draw Agents
================================
*/


world.agents.forEach(agent=>{


    this.drawAgent(agent);



});





    ctx.restore();



}









/*
================================

Grid

世界網格

================================
*/


drawGrid(world){



    let ctx=this.ctx;



    let size=50;



    ctx.strokeStyle =
    "#eeeeee";


    ctx.lineWidth=1;



    for(
        let x=0;
        x<=world.width;
        x+=size
    ){



        ctx.beginPath();



        ctx.moveTo(
            x,
            0
        );



        ctx.lineTo(
            x,
            world.height
        );



        ctx.stroke();



    }





    for(
        let y=0;
        y<=world.height;
        y+=size
    ){



        ctx.beginPath();



        ctx.moveTo(
            0,
            y
        );



        ctx.lineTo(
            world.width,
            y
        );



        ctx.stroke();



    }



}









/*
================================

Agent

畫 Agent

================================
*/


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



        ctx.fillStyle =
        "#333";


        ctx.font =
        "12px Arial";



        ctx.fillText(

            agent.id,

            x+10,

            y

        );



    }



}









/*
================================

Size

大小

================================
*/


getSize(agent){



return (

this.baseRadius

+

(
agent.importance || 0
)

*

8

);



}









/*
================================

Color

狀態顏色

================================
*/

/*
================================

Restaurant Object Rendering

餐廳物件繪製

================================
*/


drawObject(object){



let ctx=this.ctx;



let x =
object.position.x;



let y =
object.position.y;



let width =
object.size.width;



let height =
object.size.height;





switch(object.type){



case "entrance":


ctx.fillStyle="#81C784";


break;




case "counter":


ctx.fillStyle="#FFB74D";


break;




case "kitchen":


ctx.fillStyle="#EF9A9A";


break;




case "table":


ctx.fillStyle="#90CAF9";


break;




case "exit":


ctx.fillStyle="#BDBDBD";


break;



default:


ctx.fillStyle="#CCCCCC";


}






ctx.fillRect(


x-width/2,


y-height/2,


width,


height


);






/*
Object Label

*/


if(this.showLabel){


ctx.fillStyle="#333";


ctx.font="20px Arial";



ctx.fillText(

object.type,

x-width/2,

y-height/2-10

);



}



}

getColor(agent){



const map={



Waiting:
"#BDBDBD",



Thinking:
"#FFC107",



Exploring:
"#2196F3",



Ordering:
"#4CAF50",



Finished:
"#616161"



};




return (

map[agent.status]

||

"#999999"

);



}









/*
================================

Control

================================
*/


toggleGrid(){



this.showGrid =
!this.showGrid;



}



toggleTrail(){



this.showTrail =
!this.showTrail;



}



toggleLabel(){



this.showLabel =
!this.showLabel;



}





}