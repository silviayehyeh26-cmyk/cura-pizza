/*
================================

Camera Engine

AI Behavior Lab

Visualization Engine v3.0

攝影機引擎

Responsible for:

- Pan
- Zoom
- Coordinate Transform
- Follow Agent

================================
*/


export class CameraEngine {



constructor(viewWidth,viewHeight){



    /*
    ================================
    Camera Position

    世界中的位置

    ================================
    */


    this.x = 2500;

    this.y = 2500;




    /*
    ================================
    Zoom

    1 = 原比例

    0.5 = 縮小

    ================================
    */


    this.zoom = 0.25;





    /*
    ================================
    Viewport

    畫面大小

    ================================
    */


    this.width =
    viewWidth;


    this.height =
    viewHeight;






    /*
    ================================
    Movement

    ================================
    */


    this.dragging=false;


    this.lastX=0;

    this.lastY=0;




    /*
    ================================
    Follow

    ================================
    */


    this.followTarget=null;



}









/*
================================

Resize

視窗改變

================================
*/


resize(width,height){



    this.width=width;

    this.height=height;



}









/*
================================

Move

移動 Camera

================================
*/


move(dx,dy){



    this.x +=
    dx /
    this.zoom;



    this.y +=
    dy /
    this.zoom;



}









/*
================================

Zoom

縮放

================================
*/


setZoom(value){



    this.zoom =
    Math.max(

        0.05,

        Math.min(
            3,
            value
        )

    );



}









/*
================================

Zoom In / Out

================================
*/


zoomIn(){



    this.setZoom(
        this.zoom*1.1
    );



}



zoomOut(){



    this.setZoom(
        this.zoom/1.1
    );


}









/*
================================

World → Screen

世界座標轉畫面

================================
*/


worldToScreen(position){



return {



x:

(
position.x - this.x
)

*

this.zoom

+

this.width/2,




y:

(
position.y - this.y
)

*

this.zoom

+

this.height/2




};



}









/*
================================

Screen → World

畫面轉世界

================================
*/


screenToWorld(x,y){



return {



x:

(
x-this.width/2
)

/

this.zoom

+

this.x,





y:

(
y-this.height/2
)

/

this.zoom

+

this.y



};



}









/*
================================

Follow Agent

追蹤 Agent

================================
*/


follow(agent){



this.followTarget =
agent;



}









/*
================================

Stop Follow

停止追蹤

================================
*/


stopFollow(){



this.followTarget=null;



}









/*
================================

Update

每 Frame 更新

================================
*/


update(){



if(
this.followTarget
&&
this.followTarget.position
){



this.x =
this.followTarget.position.x;



this.y =
this.followTarget.position.y;



}



}









/*
================================

Mouse Drag

滑鼠拖曳

================================
*/


startDrag(x,y){



this.dragging=true;


this.lastX=x;


this.lastY=y;



}






drag(x,y){



if(!this.dragging)

return;




let dx =
x-this.lastX;


let dy =
y-this.lastY;



this.move(
-dx,
-dy
);



this.lastX=x;

this.lastY=y;



}







endDrag(){


this.dragging=false;


}









/*
================================

Get Camera State

給 MiniMap 使用

================================
*/


getState(){



return {


x:this.x,


y:this.y,


zoom:this.zoom



};



}



}