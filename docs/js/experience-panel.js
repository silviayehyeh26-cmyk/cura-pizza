/*
====================================
CURA Experience Panel System

Purpose:
Universal overlay component

Used for:
- Pizza Detail
- Taste Companion
- Radar Result
- CURA Forest
- Robin

====================================
*/


const ExperiencePanel = {


    element:null,


    init(){


        this.element =
        document.getElementById(
            "experiencePanel"
        );


        if(!this.element){

            console.warn(
            "Experience Panel container not found"
            );

            return;

        }


    },



    open(content){


        if(!this.element){

            this.init();

        }


        const body =
        this.element.querySelector(
            ".experience-body"
        );


        body.innerHTML = content;



        this.element.classList.add(
            "active"
        );


        document.body.classList.add(
            "panel-open"
        );


    },



    close(){


        if(!this.element){

            return;

        }


        this.element.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "panel-open"
        );


    }



};




document.addEventListener(
"DOMContentLoaded",
()=>{


ExperiencePanel.init();



const closeButton =
document.querySelector(
".experience-close"
);



if(closeButton){


closeButton.addEventListener(
"click",
()=>{

ExperiencePanel.close();

});


}


});

