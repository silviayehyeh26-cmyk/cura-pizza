/*
================================

CURA Gallery Button UI

v1.0

================================
*/


import {

galleryData

}

from "./gallery-data.js";


import {

openGalleryUI

}

from "./gallery-ui.js";





const container =
document.createElement(
"div"
);


container.id =
"gallery-buttons";



document.body.appendChild(
container
);






Object.keys(galleryData)
.forEach(

(key)=>{


const data =
galleryData[key];



const button =
document.createElement(
"button"
);



button.className =
"gallery-button";



button.innerHTML =

data.icon +
"<br>" +
data.title;




button.onclick=()=>{


openGalleryUI(
data
);


};




container.appendChild(
button
);



}

);