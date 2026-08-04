/*
================================

Event Engine

AI Behavior Lab

Version 1.0

================================
*/

export class EventEngine{

constructor(){

    this.events=[];

}

log(event){

    this.events.push(event);

    if(window.timelineEngine){

        window.timelineEngine.record(event);

    }

}

getEvents(){

    return this.events;

}

getAgentEvents(agentId){

    return this.events.filter(

        e=>e.agentId===agentId

    );

}

clear(){

    this.events=[];

}

}