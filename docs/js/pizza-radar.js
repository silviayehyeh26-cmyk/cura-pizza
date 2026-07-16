function createPizzaRadar(canvasId, pizza){

    const ctx = document
        .getElementById(canvasId)
        .getContext("2d");


    new Chart(ctx, {

        type:"radar",

        data:{

            labels:[
                "Freshness",
                "Complexity",
                "Texture",
                "Aroma",
                "Exploration"
            ],


            datasets:[

            {

                label:pizza.name,


                data:[

                    pizza.taste.freshness,
                    pizza.taste.complexity,
                    pizza.taste.texture,
                    pizza.taste.aroma,
                    pizza.taste.exploration

                ],


                borderWidth:2,


                pointRadius:3

            }

            ]

        },


        options:{


            responsive:true,


            scales:{

                r:{

                    min:0,

                    max:10,


                    ticks:{

                        display:false

                    }

                }

            },


            plugins:{


                legend:{

                    display:false

                }


            }

        }

    });


}

function createCompareRadar(
    canvasId,
    userTaste,
    pizza
){

const ctx =
document
.getElementById(canvasId)
.getContext("2d");


new Chart(ctx, {


type:"radar",


data:{


labels:[

"Freshness",
"Complexity",
"Texture",
"Aroma",
"Exploration"

],


datasets:[


{


label:"My Taste",


data:[

userTaste.freshness,
userTaste.complexity,
userTaste.texture,
userTaste.aroma,
userTaste.exploration

],


borderWidth:2


},



{


label:pizza.name,


data:[

pizza.taste.freshness,
pizza.taste.complexity,
pizza.taste.texture,
pizza.taste.aroma,
pizza.taste.exploration

],


borderWidth:2


}



]


},



options:{


responsive:true,


scales:{


r:{


min:0,

max:10,


ticks:{

display:false

}


}


}


}


});


}