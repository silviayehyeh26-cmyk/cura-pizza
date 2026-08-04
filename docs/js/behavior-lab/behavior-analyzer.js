/*
================================

Behavior Analyzer

AI Behavior Lab

Version 1.0

================================
*/

export class BehaviorAnalyzer{

constructor(){

}

analyze(events){

    return{

        averageJourneyLength:
        this.averageJourneyLength(events),

        stateFrequency:
        this.stateFrequency(events),

        transitionMatrix:
        this.transitionMatrix(events),

        averageCompletionStep:
        this.averageCompletionStep(events),

        aiAssistCount:
        this.aiAssistCount(events)

    };

}

/* ========================= */

averageJourneyLength(events){

    const map={};

    events.forEach(e=>{

        if(!map[e.agentId]){

            map[e.agentId]=0;

        }

        map[e.agentId]++;

    });

    const values=
    Object.values(map);

    if(values.length===0)
        return 0;

    return values.reduce((a,b)=>a+b,0)
        /values.length;

}

/* ========================= */

stateFrequency(events){

    const frequency={};

    events.forEach(e=>{

        if(!e.to) return;

        frequency[e.to]=
        (frequency[e.to]||0)+1;

    });

    return frequency;

}

/* ========================= */

transitionMatrix(events){

    const matrix={};

    events.forEach(e=>{

        if(!e.from || !e.to)
            return;

        const key=
        `${e.from}->${e.to}`;

        matrix[key]=
        (matrix[key]||0)+1;

    });

    return matrix;

}

/* ========================= */

averageCompletionStep(events){

    const finish=
    events.filter(

        e=>e.to==="Completed"

    );

    if(finish.length===0)
        return 0;

    return finish.reduce(

        (sum,e)=>sum+e.step,

        0

    )/finish.length;

}

/* ========================= */

aiAssistCount(events){

    return events.filter(

        e=>e.event==="AI_Assisted"

    ).length;

}

}