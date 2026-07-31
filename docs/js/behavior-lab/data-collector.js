/*
================================

Data Collector

研究資料收集器

負責整理 Simulation Output

Version 0.1

================================
*/


class DataCollector{


    constructor(){


        this.records=[];


    }





    collect(results){



        results.forEach(item=>{


            this.records.push({

                agent:
                item.agent,


                choice:
                item.choice,


                confidence:
                item.confidence,


                cognitiveLoad:
                item.cognitiveLoad,


                timestamp:
                Date.now()


            });


        });


    }






    getRecords(){


        return this.records;


    }






    clear(){


        this.records=[];


    }



}


export {

DataCollector

};