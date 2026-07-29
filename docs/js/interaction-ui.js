/*
================================

CURA Interaction UI

v0.1

================================
*/


const hint =
document.getElementById(
"interaction-hint"
);





export function showInteractionHint(

name

){


if(!hint)
return;



hint.textContent =

`[E] 查看 ${name} 的記憶`;



hint.classList.add(
"show"
);



}






export function hideInteractionHint(){


if(!hint)
return;



hint.classList.remove(
"show"
);


}