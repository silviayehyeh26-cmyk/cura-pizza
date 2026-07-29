/*
================================

CURA Gallery Page UI

v0.1

================================
*/


let page;



export function openGalleryPage(data){


page =
document.getElementById(
"gallery-page"
);



if(!page){

console.warn(
"Gallery Page Missing"
);

return;

}



page.innerHTML = `


<div class="gallery-page-card">


<h1>

${data.icon}

${data.title}

</h1>


<p>

Collection coming soon...

</p>



<button id="gallery-back-room">

返回房間

</button>


</div>



`;



page.classList.add(
"show"
);



const back =
document.getElementById(
"gallery-back-room"
);



back.onclick=()=>{


closeGalleryPage();


};


}






export function closeGalleryPage(){


if(!page)
return;


page.classList.remove(
"show"
);


}