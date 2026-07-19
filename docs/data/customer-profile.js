const customerProfile = {


/*
================================
1. Sensory Preference
感官偏好模型

Based on:
- Sensory Evaluation
- Individual Difference in Sensory Perception

Scale:
1-10
================================
*/


tasteProfile:{

    freshness:5,

    complexity:5,

    texture:5,

    aroma:5,

    exploration:5

},



/*
================================
2. Ingredient Preference
食材偏好模型

Based on:
- Food Choice Theory

Measure:
positive preference / avoidance

Scale:
1-10

================================
*/


ingredientPreference:{


    tomato:5,

    basil:5,

    mushroom:5,

    cheese:5,

    meat:5,

    seafood:5,

    spicy:5

},



/*
================================
3. Consumption Context
消費情境模型

Based on:
- Consumer Behavior Theory
- Consumption Occasion Theory

================================
*/


contextProfile:{


    occasion:null,


    /*
    Options:

    friend_gathering
    family_meal
    celebration
    first_visit
    personal_meal
    business_meeting

    */


    groupSize:null,


    timePeriod:null,


    purpose:null


},



/*
================================
4. Customer Background
顧客背景模型

Based on:
- Food Choice Environment Factors

注意:
不做身份推論
只作體驗調整

================================
*/


backgroundProfile:{


    ageRange:null,


    /*
    teenager
    young_adult
    adult
    senior

    */


    climate:null,


    /*
    tropical
    subtropical
    temperate
    cold

    */


    lifestyle:null,




},



/*
================================
5. Experience Memory

Based on:
- Customer Relationship Management
- Experience Design

================================
*/


experienceMemory:{


    visitCount:0,


    favoriteItems:[],


    previousChoices:[],


    feedback:[]

},

dietaryBackground:{
    flavorPreference:null,
    noveltyPreference:null,
    
    /*
    student
    office_worker
    family
    traveler

    */


    dietaryPreference:null
}

};

