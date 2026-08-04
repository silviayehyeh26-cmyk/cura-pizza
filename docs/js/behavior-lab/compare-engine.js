/*
================================

Compare Engine

AI Behavior Lab

Version 1.0

負責：
- Normal vs AI Assist
- KPI 比較
- 百分比改善

================================
*/

export class CompareEngine{

constructor(){

    this.normal=null;
    this.ai=null;

}

setNormal(result){

    this.normal=result;

}

setAI(result){

    this.ai=result;

}

compare(){

    if(!this.normal || !this.ai){

        return null;

    }

    const normal=this.calculateMetrics(this.normal);
    const ai=this.calculateMetrics(this.ai);

    return{

        normal,
        ai,

        decisionTimeReduction:
        this.percentDecrease(
            normal.averageDecisionTime,
            ai.averageDecisionTime
        ),

        cognitiveLoadReduction:
        this.percentDecrease(
            normal.averageCognitiveLoad,
            ai.averageCognitiveLoad
        ),

        confidenceIncrease:
        this.percentIncrease(
            normal.averageConfidence,
            ai.averageConfidence
        ),

        completionIncrease:
        this.percentIncrease(
            normal.completionRate,
            ai.completionRate
        )

    };

}

calculateMetrics(results){

    if(!results || results.length===0){

        return{

            averageDecisionTime:0,
            averageCognitiveLoad:0,
            averageConfidence:0,
            completionRate:0,
            decisionCount:0

        };

    }

    let load=0;
    let confidence=0;
    let completed=0;
    let decisionTime=0;

    results.forEach(agent=>{

        load+=agent.cognitiveLoad||0;

        confidence+=agent.confidence||0;

        if(
            agent.status==="Completed"
        ){

            completed++;

        }

        if(agent.timeStep){

            decisionTime+=agent.timeStep;

        }

    });

    return{

        averageDecisionTime:
        decisionTime/results.length,

        averageCognitiveLoad:
        load/results.length,

        averageConfidence:
        confidence/results.length,

        completionRate:
        completed/results.length,

        decisionCount:
        results.length

    };

}

percentDecrease(before,after){

    if(before===0) return 0;

    return Number(

        (
            (before-after)
            /
            before
            *
            100
        ).toFixed(1)

    );

}

percentIncrease(before,after){

    if(before===0) return 0;

    return Number(

        (
            (after-before)
            /
            before
            *
            100
        ).toFixed(1)

    );

}

}