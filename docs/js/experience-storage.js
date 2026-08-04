/*
================================

CURA Experience Storage

================================
*/


const EXPERIENCE_KEY =
"CURA_EXPERIENCES";




export function loadExperiences(){


const data =
localStorage.getItem(
EXPERIENCE_KEY
);



return data
?
JSON.parse(data)
:
{};



}



export function saveExperiences(data){


localStorage.setItem(

EXPERIENCE_KEY,

JSON.stringify(data)

);


}