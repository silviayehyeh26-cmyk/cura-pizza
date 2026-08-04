/*
================================

Restaurant World

AI Behavior Lab

v3.0

餐廳世界模型

================================
*/


export class RestaurantWorld {



constructor(world){


    this.world = world;


    this.objects=[];



}









/*
================================

Initialize

建立餐廳

================================
*/


initialize(){



    this.createEntrance();



    this.createCounter();



    this.createKitchen();



    this.createTables();



    this.createExit();





    this.objects.forEach(

        object=>{

            this.world.addObject(
                object
            );

        }

    );



    console.log(

        "Restaurant World Ready",

        this.objects

    );



}









/*
================================

Entrance

入口

================================
*/


createEntrance(){



this.objects.push({



id:"entrance",


type:"entrance",



position:{


x:500,


y:2500


},



size:{

width:400,

height:600

}



});



}









/*
================================

Counter

櫃台

================================
*/


createCounter(){



this.objects.push({


id:"counter",


type:"counter",



position:{


x:1000,


y:2000


},



size:{


width:400,

height:800

}



});



}









/*
================================

Kitchen

廚房

================================
*/


createKitchen(){



this.objects.push({



id:"kitchen",



type:"kitchen",



position:{


x:3800,


y:2500


},



size:{


width:1000,

height:1600

}



});



}









/*
================================

Tables

桌子

================================
*/


createTables(){



let positions=[


[1800,1800],


[2400,1800],


[3000,1800],


[1800,2600],


[2400,2600],


[3000,2600]


];





positions.forEach(

(pos,index)=>{


this.objects.push({



id:

"table_"+

(index+1),



type:"table",



position:{


x:pos[0],


y:pos[1]


},



size:{


width:500,


height:500


}



});



}



);



}









/*
================================

Exit

出口

================================
*/


createExit(){



this.objects.push({



id:"exit",


type:"exit",



position:{


x:500,


y:3200


},



size:{


width:200,


height:300


}



});



}









/*
================================

Get Object

================================
*/


getObject(id){



return this.objects.find(

obj=>

obj.id===id

);



}









/*
================================

Get Tables

================================
*/


getTables(){



return this.objects.filter(

obj=>

obj.type==="table"

);



}



}