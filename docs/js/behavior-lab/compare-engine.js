/*
================================

Compare Engine

實驗比較引擎

分析不同 Scenario 差異

Version 0.1

================================
*/


export class CompareEngine{


    constructor(){


        this.comparison = [];


    }



    analyze(results){


        console.log(
            "Analyzing Experiment Results:",
            results
        );



        let comparison = [];



        results.forEach(result=>{


            let confidenceTotal = 0;

            let loadTotal = 0;



            result.rawResults.forEach(data=>{


                confidenceTotal +=
                data.confidence;



                loadTotal +=
                data.cognitiveLoad;


            });



            let count =
            result.rawResults.length;



            comparison.push({

                scenario:
                result.scenario,


                agents:
                result.agents,


                decisions:
                count,


                averageConfidence:
                count ?
                confidenceTotal / count
                :
                0,


                averageCognitiveLoad:
                count ?
                loadTotal / count
                :
                0


            });



        });



        this.comparison =
        comparison;



        console.log(
            "Comparison Result:",
            comparison
        );



        return comparison;


    }


}