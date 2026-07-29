/*
================================

CURA Gallery UI

v0.1

================================
*/


let overlay;
let title;
let icon;
let description;
let closeButton;
let currentGallery = null;



function initGalleryUI(){


overlay =
document.getElementById(
"gallery-overlay"
);



if(overlay){


overlay.addEventListener(

"click",

(e)=>{


e.stopPropagation();


}

);


}


title =
document.getElementById(
"gallery-title"
);


icon =
document.getElementById(
"gallery-icon"
);


description =
document.getElementById(
"gallery-description"
);


closeButton =
document.getElementById(
"gallery-close"
);


// 加這裡

const enterButton =
document.getElementById(
"gallery-enter"
);



if(enterButton){


enterButton.onclick=(e)=>{


e.stopPropagation();



openGalleryPage(

currentGallery

);



closeGalleryUI();


};


}



if(closeButton){


closeButton.addEventListener(

"click",

(e)=>{


e.stopPropagation();


closeGalleryUI();


}

);


}



}





export function openGalleryUI(data){

currentGallery = data;

if(!overlay){

console.warn(
"Gallery Overlay Missing"
);

return;

}



icon.textContent =
data.icon;


title.textContent =
data.title;


description.textContent =

"探索 CURA 世界中的收藏與故事。";



overlay.classList.add(
"show"
);



}





export function closeGalleryUI(){


if(!overlay)
return;


overlay.classList.remove(
"show"
);


}





initGalleryUI();