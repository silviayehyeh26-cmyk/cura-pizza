/*
================================

Experiment Manager

實驗管理器

負責：
1. 建立實驗
2. 執行情境
3. 收集結果

Version 0.1

================================
*/


export class ExperimentManager{


    constructor(){


        // 實驗名稱

        this.name =
        "AI Decision Support Experiment";



        // 實驗情境列表

        this.scenarios = [];



        // 實驗結果

        this.results = [];


    }





    /*
    ================================

    建立實驗

    ================================
    */


    createExperiment(
        scenarios
    ){


        this.scenarios =
        scenarios;


        console.log(
            "Experiment Created:",
            this.scenarios
        );


    }





    /*
    ================================

    儲存結果

    ================================
    */


    collectResult(
        result
    ){


        this.results.push(
            result
        );


        console.log(
            "Experiment Result:",
            result
        );


    }





    /*
    ================================

    取得結果

    ================================
    */


    getResults(){


        return this.results;


    }

    /*
================================

Run Experiment

執行實驗

================================
*/


async runExperiment(
    scenarioManager,
    simulationManager,
    behaviorEngine,
    agents
){


    console.log(
        "Experiment Started"
    );



    this.results = [];



    for(
        let scenario
        of this.scenarios
    ){



        console.log(
            "Running Scenario:",
            scenario
        );



        // 切換情境

        scenarioManager.setScenario(
            scenario
        );



        let currentScenario =
        scenarioManager.getScenario();



        console.log(
            "Current Scenario:",
            currentScenario
        );

        simulationManager.reset();


simulationManager.initialize(
    agents
);



simulationManager.setScenario(
    currentScenario
);

let simulationResult =
await new Promise(resolve=>{


    simulationManager.onComplete =
    (results)=>{


        resolve(results);


    };



    simulationManager.start(
        behaviorEngine,
        simulationMenu
    );


});



        /*
        之後這裡會接 Simulation
        目前先模擬結果
        */


      let result = {


scenario:
currentScenario.name,


agents:
agents.length,


decisions:
simulationManager.results.length,


rawResults:
simulationResult



};



        this.collectResult(
            result
        );



    }



    console.log(
        "Experiment Finished",
        this.results
    );



    return this.results;


}


}