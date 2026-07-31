class DecisionAgent {


    constructor(agent){

        this.agent = agent;

    }




    makeDecision(menu){


        let scores = [];



        menu.forEach(item=>{


            let score =
            this.evaluate(item);



            scores.push({

                item:item,

                score:score

            });


        });




        scores.sort(
            (a,b)=>
            b.score-a.score
        );



        let choice =
        scores[0];



        this.recordDecision(
            choice
        );



        return choice;


    }







    evaluate(item){


        let taste =
        this.agent.taste;



        let score=0;



        // 新鮮度符合程度

        score +=
        10 -
        Math.abs(
            taste.freshness -
            item.freshness
        );



        // 複雜度

        score +=
        10 -
        Math.abs(
            taste.complexity -
            item.complexity
        );



        // 口感

        score +=
        10 -
        Math.abs(
            taste.texture -
            item.texture
        );



        // 香氣

        score +=
        10 -
        Math.abs(
            taste.aroma -
            item.aroma
        );



        return score;


    }







    recordDecision(result){


        this.agent.history.push({


            timestamp:
            Date.now(),



            decision:
            result.item.name,



            score:
            result.score



        });



    }



}