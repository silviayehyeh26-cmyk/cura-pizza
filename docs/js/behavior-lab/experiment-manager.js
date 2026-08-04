/*
================================

Experiment Manager

AI Behavior Lab

Version 4.0

================================
*/

export class ExperimentManager{

constructor(){

    this.experiments=[];

    this.current=null;

}

initialize(){

    this.experiments=[

        {
            id:"normal",
            name:"Normal",
            aiAssist:false,
            results:null
        },

        {
            id:"ai",
            name:"AI Assist",
            aiAssist:true,
            results:null
        }

    ];

}

getExperiments(){

    return this.experiments;

}

getExperiment(id){

    return this.experiments.find(
        e=>e.id===id
    );

}

setCurrent(id){

    this.current=
    this.getExperiment(id);

}

getCurrent(){

    return this.current;

}

saveResult(id,result){

    let exp=
    this.getExperiment(id);

    if(exp){

        exp.results=result;

    }

}

isFinished(){

    return this.experiments.every(
        e=>e.results!==null
    );

}

reset(){

    this.experiments.forEach(exp=>{

        exp.results=null;

    });

    this.current=null;

}

}