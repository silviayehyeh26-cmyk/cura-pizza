/*
================================

CURA Gallery Entrance

v0.1

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


import {

galleryData

}
from "./gallery-data.js";





export function createGalleryEntrances(

scene

){


    function createTextSprite(text){


const canvas =
document.createElement("canvas");


const ctx =
canvas.getContext("2d");



canvas.width = 512;

canvas.height = 256;



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle =
"rgba(255,255,255,0.95)";



ctx.font =
"bold 50px Noto Sans TC";



ctx.textAlign =
"center";



const lines =
text.split("\n");



lines.forEach(

(line,index)=>{


ctx.fillText(

line,

256,

100 + index * 70

);


}

);




const texture =
new THREE.CanvasTexture(
canvas
);



const material =
new THREE.SpriteMaterial({

map:texture,

transparent:true

});



const sprite =
new THREE.Sprite(
material
);



sprite.scale.set(

1.8,

0.9,

1

);



return sprite;


}

const keys =
Object.keys(
galleryData
);





keys.forEach(

(key,index)=>{


const data =
galleryData[key];



const material =
new THREE.MeshStandardMaterial({

color:0xb79b7b

});



const panel =
new THREE.Mesh(

new THREE.BoxGeometry(

0.8,

1.2,

0.08

),

material

);





// 排列位置

panel.position.set(

(index-3)*1.2,

1.2,

-1.8

);





panel.userData={


interactable:true,


type:"gallery-door",


galleryID:key


};





scene.add(panel);


const label =
createTextSprite(

data.icon +
"\n" +
data.title

);



label.position.set(

panel.position.x,

panel.position.y + 1.1,

panel.position.z

);



scene.add(label);


// icon文字暫時放 console

console.log(

"Gallery Entrance Created:",

data.title

);



});



}

function createTextSprite(text){

const canvas =
document.createElement("canvas");


const context =
canvas.getContext("2d");


canvas.width = 512;
canvas.height = 256;



context.fillStyle =
"white";


context.font =
"bold 60px Arial";


context.textAlign =
"center";


context.fillText(

text,

256,

130

);



const texture =
new THREE.CanvasTexture(
canvas
);



const material =
new THREE.SpriteMaterial({

map:texture,

transparent:true

});



const sprite =
new THREE.Sprite(
material
);



sprite.scale.set(
1.5,
0.75,
1
);



return sprite;


}