const curaQuestionModel = {


/*
====================================
Taste Dimension Questions

Theory:
- Sensory Evaluation
- Individual Difference in Sensory Perception

Purpose:
建立 Taste Radar
====================================
*/


tasteQuestions:[


{
id:"freshness",

question:
"你偏好的披薩風味比較接近哪一種？",

options:[

{
text:"清爽、明亮、食材原味突出",
value:8
},

{
text:"平衡自然",
value:5
},

{
text:"濃郁、厚實、有強烈層次",
value:3
}

],

affects:
"tasteProfile.freshness",

theory:
"Sensory Evaluation",

weight:0.2

},



{
id:"exploration",

question:
"你在選擇餐點時，通常喜歡？",

options:[

{
text:"嘗試新的風味",
value:8
},

{
text:"偶爾探索",
value:5
},

{
text:"選擇熟悉的味道",
value:3
}

],

affects:
"tasteProfile.exploration",

theory:
"Novelty Seeking Behavior",

weight:0.15

}


],





/*
====================================
Ingredient Preference Questions

Theory:
- Food Choice Theory
- Hedonic Preference

Purpose:
理解食材偏好
====================================
*/


ingredientQuestions:[


{
id:"favoriteIngredient",

question:
"哪些食材會讓你更想嘗試一款披薩？",

multiple:true,


options:[

{
name:"tomato",
text:"番茄",
value:8
},

{
name:"basil",
text:"羅勒",
value:8
},

{
name:"mushroom",
text:"菇類",
value:7
},

{
name:"cheese",
text:"起司",
value:7
},

{
name:"meat",
text:"肉類",
value:7
}

],


affects:
"ingredientPreference",

theory:
"Food Choice Theory",

weight:0.25

}


],





/*
====================================
Consumption Context Questions

Theory:
- Consumer Behavior Theory
- Consumption Occasion Theory

Purpose:
理解為什麼吃
====================================
*/


contextQuestions:[


{
id:"occasion",

question:
"這次來 CURA 比較接近哪種情境？",


options:[


{
value:"friend_gathering",

text:
"和朋友聚餐"

},


{
value:"family_meal",

text:
"家庭聚餐"

},


{
value:"celebration",

text:
"慶祝特別時刻"

},


{
value:"first_visit",

text:
"第一次來探索"

}

],


affects:
"contextProfile.occasion",


theory:
"Consumption Occasion Theory",


weight:0.2


}

],






/*
====================================
Background Questions

Theory:
- Food Choice Environment Model

Purpose:
提供環境因素
====================================
*/


backgroundQuestions:[


{
id:"ageRange",

question:
"你的年齡區間？",

options:[

"teenager",

"young_adult",

"adult",

"senior"

],


affects:
"backgroundProfile.ageRange",


theory:
"Demographic Segmentation",

weight:0.05

},



{
id:"climate",

question:
"你平常生活環境比較接近？",

options:[

"tropical",

"subtropical",

"temperate",

"cold"

],


affects:
"backgroundProfile.climate",


theory:
"Environmental Food Choice Factors",


weight:0.05

}


]



};

/*
================================
5. Dietary Background Questions
飲食背景問題

Based on:
- Food Choice Theory
- Food Neophobia / Neophilia Theory

================================
*/

dietaryQuestions:[{
id:"daily_flavor",

question:
"你平常比較喜歡哪種飲食風格？",

theory:
"Food Choice Theory",

affects:
"dietaryBackground.flavorPreference",

options:[

{
text:"清淡自然",
value:"light"
},

{
text:"濃郁厚重",
value:"strong"
}

]

},

{
id:"food_exploration",

question:
"你對新的食物體驗通常是？",

theory:
"Food Neophobia / Neophilia Theory",

affects:
"dietaryBackground.noveltyPreference",

options:[

{
text:"喜歡嘗試新味道",
value:"explorer"
},

{
text:"偏好熟悉風味",
value:"familiar"
}

]

},
{
id:"dietary_preference",

question:
"你的飲食習慣比較接近哪一種？",

options:[


{
text:"沒有特殊限制，依照當天喜好選擇",
value:"general"
},


{
text:"偏好蔬食或植物性食材",
value:"vegetarian"
},


{
text:"避免特定肉類或海鮮",
value:"avoid_specific"
},


{
text:"有食材過敏或飲食限制",
value:"restriction"
}


],


affects:
"dietaryBackground.dietaryPreference",


theory:
"Food Choice Theory",


weight:0.1


}]