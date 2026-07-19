const pizzaIntelligenceData = {


margherita:{


/*
================================
Expert Sensory Profile
專業感官評估

來源:
- Chef Evaluation
- Sensory Evaluation

Scale:
0-100
================================
*/


expertProfile:{


freshness:90,

richness:55,

texture:70,

aroma:80,

complexity:50,

exploration:40


},



/*
================================
Consumer Perception

顧客實際感受

注意:
不覆蓋 Expert Profile

用於理解族群差異
================================
*/


customerPerception:{


freshness:{

average:85,

sampleSize:0

},


richness:{

average:65,

sampleSize:0

},


aroma:{

average:82,

sampleSize:0

}


},



/*
================================
Sensory Explanation

可解釋推薦原因
================================
*/


sensoryExplanation:{


freshness:
"番茄與新鮮香草帶來明亮的酸香與自然感。",


texture:
"柔和起司與餅皮形成平衡口感。",


aroma:
"羅勒與橄欖油提供草本香氣。"


}



},



mushroom:{


expertProfile:{


freshness:60,

richness:75,

texture:85,

aroma:90,

complexity:85,

exploration:80


},



customerPerception:{


richness:{

average:80,

sampleSize:0

},


aroma:{

average:88,

sampleSize:0

}


},



sensoryExplanation:{


texture:
"菇類與餅皮形成更明顯的層次感。",


aroma:
"菇類帶來土地氣息與深層香氣。",


complexity:
"多層次香氣適合喜歡探索風味的人。"


}



}



};