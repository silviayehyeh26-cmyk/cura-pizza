/*
================================

Insight Dashboard

AI Behavior Lab

Version 1.0

負責:
- Render Insight Cards
- Display AI Analysis

================================
*/


export class InsightDashboard{


constructor(containerId){


    this.container =
    document.getElementById(containerId);


}






render(insights){



if(!this.container)

return;



this.container.innerHTML="";





insights.forEach(insight=>{


let card =
document.createElement("div");


card.className =
"insight-card";





let level =
document.createElement("div");


level.className =
"insight-level";



level.innerText =
this.getIcon(
insight.type
);





let title =
document.createElement("h3");


title.innerText =
insight.title;





let value =
document.createElement("div");


value.className =
"insight-value";



if(insight.value!==undefined){


value.innerText =
insight.value
+
(
insight.unit || ""
);


}





let message =
document.createElement("p");


message.innerText =
insight.message
||
"";





card.appendChild(level);

card.appendChild(title);

card.appendChild(value);

card.appendChild(message);





this.container.appendChild(card);



});




}







getIcon(type){


switch(type){


case "improvement":

return "🟢";



case "warning":

return "🔴";



case "recommendation":

return "💡";



case "pattern":

return "🔵";



default:

return "⚪";


}



}



}