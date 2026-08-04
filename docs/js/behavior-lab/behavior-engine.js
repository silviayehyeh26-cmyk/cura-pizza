/*
================================

Behavior Engine

行為引擎

負責模擬 Agent 決策流程

Version 0.1

================================
*/


class BehaviorEngine {


    constructor(){

        this.logs = [];

    }



   processDecision(
    agent,
    menu,
    scenario
){

      agent.decisionHistory.push({

       action:
"observe_menu",

      time:
       Date.now()

      });

        // ============================
        // Step 1
        // Information Processing
        // 資訊處理
        // ============================


        let informationAmount =
        menu.length;

// Scenario Effect
// 情境影響


if(
scenario
&&
scenario.aiSupport
){


    informationAmount *= 0.5;



    this.record(
        agent,
        {

        action:"AI_assist",

        trust:
        agent.aiTrust

        }
    );


}

        let cognitiveLoad =
this.calculateCognitiveLoad(

    agent,

    informationAmount

);




        // ============================
        // Step 2
        // Evaluate Options
        // 評估選項
        // ============================


        let evaluation =
        this.evaluateMenu(
            agent,
            menu
        );

        this.record(

agent,

{

action:"evaluate",

options:
evaluation.length

}

);




        // ============================
        // Step 3
        // Select
        // 選擇
        // ============================

agent.decisionHistory.push({

action:
"compare_options",

time:
Date.now()

});

let result =
evaluation[0];


// ===============================
// Decision Diversity
// Agent Personality Effect
// ===============================


let style =
agent.decisionStyle;



let confidence =
Math.max(
0,
Math.min(
1,
result.score / 40
)
);



if(style==="fast"){


confidence =
Math.min(
1,
confidence + 0.2
);


cognitiveLoad =
Math.max(
0,
cognitiveLoad - 0.2
);


}



if(style==="explorer"){


confidence =
Math.max(
0,
confidence - 0.1
);


cognitiveLoad =
cognitiveLoad + 0.2;


}



if(style==="careful"){


cognitiveLoad =
cognitiveLoad + 0.3;


confidence =
Math.min(
1,
confidence + 0.1
);


}

        // ============================
        // Step 4
        // Record Behavior
        // 記錄行為
        // ============================


        this.record(

            agent,

            {

                action:"select",

                choice:
                result.name,


                cognitiveLoad:
                cognitiveLoad,


                confidence:
                result.score / 40

            }

        );



return {


choice:
result.name,


cognitiveLoad:
Number(
Math.min(
1,
cognitiveLoad
).toFixed(2)
),


confidence:
Number(
confidence.toFixed(2)
),


scenario:
scenario?.name || "Unknown"


};
    }







    calculateCognitiveLoad(
        agent,
        informationAmount
    ){


        let load =

        informationAmount
        *
        (1-agent.cognitiveLoadTolerance);



        return Number(
            load.toFixed(2)
        );


    }






    evaluateMenu(agent, menu){


        let results = [];



        menu.forEach(item=>{


            let score = 0;



            score +=
            1 -
            Math.abs(

                agent.tasteProfile.freshness
                -
                item.freshness/10

            );



            score +=
            1 -
            Math.abs(

                agent.tasteProfile.texture
                -
                item.texture/10

            );



            results.push({

                name:item.name,

                score:
                score * 20

            });



        });



        return results.sort(

            (a,b)=>
            b.score-a.score

        );


    }







    record(agent,data){


        agent.decisionHistory.push({

            time:
            Date.now(),


            ...data

        });


    }



}


export {
    BehaviorEngine
};