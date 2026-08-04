/*
================================

Pattern Mining Engine

AI Behavior Lab

Version 1.0

================================
*/

export class PatternMiningEngine{

constructor(){

}

mine(events){

    const journeys={};

    events.forEach(event=>{

        if(!journeys[event.agentId]){

            journeys[event.agentId]=[];

        }

        if(event.to){

            journeys[event.agentId].push(event.to);

        }

    });

    const patterns={};

    Object.values(journeys).forEach(path=>{

        const key=path.join(" -> ");

        patterns[key]=(patterns[key]||0)+1;

    });

    return Object.entries(patterns)

        .sort((a,b)=>b[1]-a[1])

        .map(item=>({

            path:item[0],

            count:item[1]

        }));

}

}