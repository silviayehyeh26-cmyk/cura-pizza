/*
================================

Simulation Data

AI Behavior Lab

Agent Profile Database

Version 3.2

================================
*/


const agentProfiles = [



/*
================================
Explorer
探索型消費者
================================
*/

{

type:

"Explorer",


ageRange:[18,35],



behavior:{


priceSensitivity:0.3,


newExperience:0.9


},



taste:{


freshness:0.8,


complexity:0.8,


texture:0.7,


aroma:0.8,


exploration:0.95


}



},







/*
================================
Brand Lover
品牌信任型
================================
*/


{


type:

"Brand_Lover",



ageRange:[25,55],



behavior:{


priceSensitivity:0.2,


newExperience:0.5


},



taste:{


freshness:0.9,


complexity:0.7,


texture:0.8,


aroma:0.9,


exploration:0.4


}



},







/*
================================
Price Sensitive
價格敏感型
================================
*/


{


type:

"Price_Sensitive",



ageRange:[18,60],



behavior:{


priceSensitivity:0.9,


newExperience:0.3


},



taste:{


freshness:0.5,


complexity:0.4,


texture:0.5,


aroma:0.5,


exploration:0.2


}



},







/*
================================
AI User
AI輔助接受型
================================
*/


{


type:

"AI_User",



ageRange:[18,45],



behavior:{


priceSensitivity:0.5,


newExperience:0.8


},



taste:{


freshness:0.7,


complexity:0.8,


texture:0.8,


aroma:0.8,


exploration:0.8


}



},







/*
================================
Normal
一般消費者
================================
*/


{


type:

"Normal",



ageRange:[20,70],



behavior:{


priceSensitivity:0.5,


newExperience:0.5


},



taste:{


freshness:0.6,


complexity:0.5,


texture:0.6,


aroma:0.6,


exploration:0.5


}



}



];





export {

agentProfiles

};