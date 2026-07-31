/*
================================

Scenario Manager

情境管理器

控制實驗環境

Version 0.1

================================
*/


class ScenarioManager{


    constructor(){


        this.currentScenario =
        "Normal";


        this.scenarios = {


            Normal:{


                name:"Normal Dining",

                aiSupport:false,


                menuSize:3,


                promotion:false


            },



            AI_Assist:{


                name:"AI Decision Support",


                aiSupport:true,


                menuSize:3,


                promotion:false


            },



            Promotion:{


                name:"Promotion Event",


                aiSupport:false,


                menuSize:5,


                promotion:true


            },



            Limited_Menu:{


                name:"Limited Menu",


                aiSupport:false,


                menuSize:2,


                promotion:false


            }


        };


    }





    setScenario(id){


        if(
            this.scenarios[id]
        ){


            this.currentScenario =
            id;


        }


    }






    getScenario(){


        return this.scenarios[
            this.currentScenario
        ];


    }



}



export {

ScenarioManager

};