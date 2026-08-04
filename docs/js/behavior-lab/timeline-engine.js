/*
================================

Timeline Engine

AI Behavior Lab

Version 1.0

================================
*/

export class TimelineEngine{

constructor(){

    this.timeline=[];

}

record(event){

    this.timeline.push(event);

}

clear(){

    this.timeline=[];

}

getTimeline(){

    return this.timeline;

}

getAgentTimeline(agentId){

    return this.timeline.filter(

        event=>event.agentId===agentId

    );

}

getEventsByType(type){

    return this.timeline.filter(

        event=>event.event===type

    );

}

getEventsInRange(start,end){

    return this.timeline.filter(

        event=>

        event.step>=start

        &&

        event.step<=end

    );

}

sort(){

    this.timeline.sort(

        (a,b)=>a.step-b.step

    );

}

}