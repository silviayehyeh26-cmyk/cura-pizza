function updateProfileValue(
    profile,
    path,
    value
){


const keys =
path.split(".");


let target = profile;


for(
let i=0;
i<keys.length-1;
i++
){

target =
target[keys[i]];

}


target[
keys[keys.length-1]
]
=
value;


}



function processQuestionAnswer(
question,
answer
){


if(
!question ||
answer===undefined
){

return;

}



let profile =
customerProfile;



updateProfileValue(

profile,

question.affects,

answer

);



console.log(
"CURA Profile Updated",
profile
);


return profile;


}





function getProfile(){

return customerProfile;

}