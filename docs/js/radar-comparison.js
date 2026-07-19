/*
====================================
CURA Radar Comparison System

Compare:

Customer Taste Profile

VS

Pizza Expert Sensory Profile


Based on:
- Sensory Evaluation
- Preference Matching

====================================
*/



function normalizeExpertProfile(
expertProfile
){


return {


freshness:
expertProfile.freshness / 10,


richness:
expertProfile.richness / 10,


texture:
expertProfile.texture / 10,


aroma:
expertProfile.aroma / 10,


complexity:
expertProfile.complexity / 10,


exploration:
expertProfile.exploration / 10


};


}







function calculateRadarDifference(
userProfile,
pizzaProfile
){



return {


freshness:
Math.round(
userProfile.freshness -
pizzaProfile.freshness
),


complexity:
Math.round(
userProfile.complexity -
pizzaProfile.complexity
),


texture:
Math.round(
userProfile.texture -
pizzaProfile.texture
),


aroma:
Math.round(
userProfile.aroma -
pizzaProfile.aroma
),


exploration:
Math.round(
userProfile.exploration -
pizzaProfile.exploration
)


};


}







function getRadarComparisonData(
pizzaId
){



const pizzaProfile =
normalizeExpertProfile(
getExpertProfile(pizzaId)
);



return {


user:
CURA_STATE.tasteProfile,


pizza:pizzaProfile,


difference:
calculateRadarDifference(
CURA_STATE.tasteProfile,
pizzaProfile
)


};



}