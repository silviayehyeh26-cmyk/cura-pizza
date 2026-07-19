let overlayChart;



function showTasteOverlay(pizza){



ExperiencePanel.open(`


<div class="overlay-result">


<h2>
你的風味分析
</h2>


<p>
以下比較你的偏好與這款披薩的風味特徵。
</p>


<canvas id="overlayRadar"></canvas>


<div id="overlayInsight">


</div>


</div>


`);



renderOverlayRadar(pizza);

renderMatchInsight(pizza);

}




function renderOverlayRadar(pizza){



const ctx =
document.getElementById(
"overlayRadar"
);



if(!ctx) return;



if(overlayChart){

overlayChart.destroy();

}



const user =
customerProfile.tasteProfile;



overlayChart =
new Chart(ctx,{


type:"radar",


data:{


labels:[

"清爽度",

"層次感",

"口感",

"香氣",

"探索性"

],



datasets:[



{

label:"你的 Taste Radar",

data:[

user.freshness,

user.complexity,

user.texture,

user.aroma,

user.exploration

]

},



{


label:pizza.name,

data:[

pizza.taste.freshness,

pizza.taste.complexity,

pizza.taste.texture,

pizza.taste.aroma,

pizza.taste.exploration

]


}



]


},


options:{


responsive:true,


scales:{


r:{

min:0,

max:10

}


}


}


});


}