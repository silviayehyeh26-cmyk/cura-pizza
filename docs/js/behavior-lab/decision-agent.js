/*
================================

Decision Agent

建立一位模擬使用者（Agent）

Version 0.1

================================
*/

export class DecisionAgent{

    constructor(id, profile){

    // ============================
    // Identity
    // 身分
    // ============================

    this.id = id;


    this.profile = profile.type;


    this.age =
    this.randomAge(
        profile.ageRange
    );



    // ============================
    // Preference
    // 偏好
    // ============================

    this.priceSensitivity =
profile.behavior.priceSensitivity
||
Math.random();



    this.brandTrust =
    Math.random();



    this.curiosity =
profile.behavior.newExperience
||
Math.random();



    // ============================
    // Cognitive State
    // 認知狀態
    // ============================

    this.informationCapacity =
    Math.random();



    this.cognitiveLoadTolerance =
    Math.random();



    // ============================
    // AI Interaction
    // ============================

    this.aiTrust =
    Math.random();



    this.recommendationAcceptance =
    Math.random();



    // ============================
    // Decision State
    // ============================

    this.finished=false;


    this.decisionHistory=[];



    // ============================
    // Taste Profile
    // ============================

    this.tasteProfile =
    profile.taste;



    // ============================
    // Feedback
    // ============================

    this.satisfaction=0;

    this.tasteMatch=0;

    // ============================
// World Position
// ============================

this.position = {
    x: 0,
    y: 0
};

this.velocity = {
    x: 0,
    y: 0
};

this.speed =
50 +
Math.random()*2;

this.startDelay =
Math.floor(
Math.random()*200
);




}

randomAge(range){


    return Math.floor(

        Math.random()
        *
        (
        range[1]-range[0]
        )
        +
        range[0]

    );

}

}