function getJourneyLevel(){


let current =
journeyData.levels[0];


journeyData.levels.forEach(level=>{


if(
selectionList.length >= level.min
){

current = level;

}


});


return current;


}



function renderJourney(){


const box =
document.getElementById(
"journeyStatus"
);


if(!box)
return;

const level =
getJourneyLevel();

const summary =
generateJourneySummary();


box.innerHTML =

`

<h2>
Taste Journey
</h2>


<h3>
${level.name}
</h3>


<p>
已探索 ${summary.count} 種風味
</p>


<p>
Your Taste Style:

</p>


<h3>
${summary.style.name}
</h3>


<p>
${summary.style.description}
</p>

`;

}