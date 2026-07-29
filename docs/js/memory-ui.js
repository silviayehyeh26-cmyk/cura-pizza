/*
================================

CURA Memory UI

v0.1

================================
*/


const overlay =
document.getElementById(
"memory-overlay"
);


const title =
document.getElementById(
"memory-title"
);


const content =
document.getElementById(
"memory-content"
);


const close =
document.getElementById(
"memory-close"
);





export function openMemory(

data

){



if(!overlay)
return;



title.textContent =
data.name;



content.textContent =
data.memory;



overlay.classList.add(
"show"
);



}





export function closeMemory(){



overlay.classList.remove(
"show"
);


}





if(close){


close.addEventListener(

"click",

()=>{


closeMemory();


}

);


}