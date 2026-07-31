/*
================================

Behavior Timeline

行為軌跡管理

Version 0.1

================================
*/


class BehaviorTimeline {


    constructor(){

        this.history=[];

    }




    add(agent,event){


        this.history.push({

            agent:
            agent.id,


            event:event,


            time:
            Date.now()


        });


    }







    getAgentHistory(id){


        return this.history.filter(

            item=>
            item.agent===id

        );


    }







    render(id){


        let data =
        this.getAgentHistory(id);



        let container =
        document
        .getElementById(
            "timeline"
        );



        container.innerHTML="";



        data.forEach(item=>{


            let div =
            document.createElement(
                "div"
            );


            div.className=
            "timeline-item";


            div.innerText =

            item.event;



            container.appendChild(
                div
            );


        });



    }


}



export {

BehaviorTimeline

};