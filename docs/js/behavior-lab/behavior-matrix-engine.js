/*
================================

Behavior Matrix Engine

AI Behavior Lab

負責:
Personality → Behavior Probability

================================
*/


export class BehaviorMatrixEngine {



constructor(){

}



/*
取得 Agent 行為傾向
*/

calculate(agent,scenario){


let curiosity =
agent.curiosity || 0.5;


let trust =
agent.aiTrust || 0.5;

let aiAvailable =
scenario
&&
scenario.aiAssist;


let price =
agent.priceSensitivity || 0.5;


let confidence =
agent.confidence || 0.5;




return {


explore:

curiosity * 0.6
+
(1-confidence)*0.4,



compare:

price * 0.5
+
(1-confidence)*0.5,



aiAssist:

aiAvailable

?

trust * 0.8
+
(1-confidence)*0.3

:

0,



quickDecision:

confidence * 0.8
+
(1-curiosity)*0.2



};


}




/*
根據機率選下一步
*/


nextState(agent,current){


let behavior =
this.calculate(agent);



let random =
Math.random();



if(
current==="Entering"
){


if(
random <
behavior.explore
){

return "Exploring";

}


if(
random <
behavior.explore
+
behavior.aiAssist
){

return "AI_Assisted";

}


return "Viewing_Menu";


}



if(
current==="Exploring"
){


if(
random <
behavior.compare
){

return "Comparing";

}


return "Viewing_Menu";


}



if(
current==="Viewing_Menu"
){


if(
random <
behavior.compare
){

return "Comparing";

}


return "Ordering";


}



if(
current==="Comparing"
){


return "Ordering";


}



if(
current==="AI_Assisted"
){


return "Ordering";


}



return current;


}



}

