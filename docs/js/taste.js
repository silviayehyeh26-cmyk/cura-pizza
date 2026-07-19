let userTasteProfile = {

freshness:7,

complexity:6,

texture:8,

aroma:7,

exploration:5

};

document
.getElementById("startTaste")
.addEventListener("click",()=>{

    window.location.href="taste-builder.html";

});


document
.getElementById("skipTaste")
.addEventListener("click",()=>{

    window.location.href="menu.html";

});

let tasteChart = null;



let tasteProfile = {


freshness:70,

richness:50,

aroma:75,

texture:65,

complexity:50


};




document
.getElementById("generateTaste")
.addEventListener("click",()=>{


tasteProfile.freshness =
Number(
document.getElementById("freshnessSlider").value
);


tasteProfile.complexity =
Number(
document.getElementById("complexitySlider").value
);


tasteProfile.texture =
Number(
document.getElementById("textureSlider").value
);



tasteProfile.richness =
100 - tasteProfile.freshness;


tasteProfile.aroma =
(
tasteProfile.complexity
+
tasteProfile.freshness
)
/2;



// 同步給系統

userTasteProfile.freshness =
tasteProfile.freshness / 10;


userTasteProfile.complexity =
tasteProfile.complexity / 10;


userTasteProfile.texture =
tasteProfile.texture / 10;


userTasteProfile.aroma =
tasteProfile.aroma / 10;



// Sync with CURA OS Global State

if(typeof CURA_STATE !== "undefined"){

    CURA_STATE.tasteProfile = {

        freshness: tasteProfile.freshness,

        complexity: tasteProfile.complexity,

        texture: tasteProfile.texture,

        aroma: tasteProfile.aroma,

        richness: tasteProfile.richness,

        exploration: userTasteProfile.exploration

    };


    console.log(
        "CURA OS Taste State Updated",
        CURA_STATE.tasteProfile
    );

}


console.log(
userTasteProfile
);



createRadar();


renderMenuIntelligence();


renderTasteIdentity();


});

function createRadar(){


const ctx =
document
.getElementById("myTasteRadar");



if(tasteChart){

tasteChart.destroy();

}



tasteChart = new Chart(
ctx,
{


type:"radar",


data:{


labels:[

"Freshness",
"Richness",
"Aroma",
"Texture",
"Complexity"

],


datasets:[{

label:"My Taste",

data:[

tasteProfile.freshness,

tasteProfile.richness,

tasteProfile.aroma,

tasteProfile.texture,

tasteProfile.complexity

]


}]


},


options:{


responsive:true,


scales:{


r:{


beginAtZero:true,

max:100


}


}


}


});



document
.getElementById("tasteSummary")
.innerText =

`
你的味覺方向偏向：

${tasteProfile.freshness > 60 ? "清爽型" : "濃郁型"}

並重視

${tasteProfile.aroma > 60 ? "香氣層次" : "簡單風味"}

`;



}




tasteProfile.freshness =
document
.getElementById("freshnessSlider")
.value;



tasteProfile.complexity =
document
.getElementById("complexitySlider")
.value;



tasteProfile.texture =
document
.getElementById("textureSlider")
.value;







