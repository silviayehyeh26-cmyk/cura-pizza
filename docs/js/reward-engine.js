let userReward = {


points:0


};



function addReward(action){


const value =
rewardData.actions[action];


userReward.points += value;


updateRewardUI();


}



function getCurrentLevel(){


let current =
rewardData.levels[0];


rewardData.levels.forEach(level=>{


if(
userReward.points >= level.requirement
){

current = level;

}


});


return current;


}



function updateRewardUI(){


const pointBox =
document.getElementById(
"rewardPoints"
);



if(pointBox){

pointBox.innerHTML =
`
${userReward.points}
Taste Points
`;

}


}