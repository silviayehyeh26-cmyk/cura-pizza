/*
================================

Behavior Lab Dashboard

研究儀表板資料控制

Version 0.1

================================
*/


class BehaviorDashboard {


    constructor(){


    this.choiceData={};


    this.totalConfidence=0;


    this.totalLoad=0;


}





    updateSimulationInfo(simulation){


        document
        .getElementById(
            "agentCount"
        )
        .innerText =
        simulation.agents.length;



        document
        .getElementById(
            "timeStep"
        )
        .innerText =
        simulation.timeStep;



    }





    updateDecision(results){



        this.choiceData={};



        results.forEach(item=>{


            if(
                !this.choiceData[item.choice]
            ){

                this.choiceData[item.choice]=0;

            }



            this.choiceData[item.choice]++;



        });



        console.log(

            "Decision Distribution",

            this.choiceData

        );

document
.getElementById(
"decisionChart"
)
.innerText =

JSON.stringify(

this.choiceData,

null,

2

);

    }

    updateMetrics(results){



    let confidenceTotal=0;


    let loadTotal=0;



    results.forEach(item=>{


        confidenceTotal +=
        item.confidence;



        loadTotal +=
        item.cognitiveLoad;


    });



    let count =
    results.length;



    let avgConfidence =
    count===0
    ?
    0
    :
    confidenceTotal/count;



    let avgLoad =
    count===0
    ?
    0
    :
    loadTotal/count;



    document
    .getElementById(
        "decisionCount"
    )
    .innerText =
    count;



    document
    .getElementById(
        "confidenceValue"
    )
    .innerText =
    avgConfidence
    .toFixed(2);



    document
    .getElementById(
        "loadValue"
    )
    .innerText =
    avgLoad
    .toFixed(2);



}



}



export {

BehaviorDashboard

};