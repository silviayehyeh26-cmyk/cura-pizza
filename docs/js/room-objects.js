/*
================================

CURA Room Objects v0.1

Old Pharmacy Blockout

================================
*/


import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";




export function createOldPharmacyObjects(
scene,
addCollider
){



// =====================
// Cabinet
// =====================


const cabinetMaterial =
new THREE.MeshStandardMaterial({

color:0x6b4630

});



const cabinet =
new THREE.Mesh(

new THREE.BoxGeometry(

1.4,

2.2,

0.5

),

cabinetMaterial

);



cabinet.position.set(

2.8,

1.1,

-2.6

);

cabinet.userData={

interactable:true,

type:"memory-object",

id:"old-cabinet"

};

scene.add(cabinet);

addCollider(
cabinet
);




// =====================
// Table
// =====================


const wood =
new THREE.MeshStandardMaterial({

color:0x8b6040

});



const tableTop =
new THREE.Mesh(

new THREE.BoxGeometry(

2,

0.15,

1

),

wood

);



tableTop.position.set(

0,

1,

0

);


scene.add(tableTop);

addCollider(
tableTop
);





// Table legs


for(
const x of [-0.8,0.8]
){


const leg =
new THREE.Mesh(

new THREE.BoxGeometry(

0.12,

1,

0.12

),

wood

);


leg.position.set(

x,

0.5,

0

);


scene.add(leg);

addCollider(
leg
);

}








// =====================
// Chair
// =====================


const chairMaterial =
new THREE.MeshStandardMaterial({

color:0x5a3925

});



const chair =
new THREE.Mesh(

new THREE.BoxGeometry(

0.8,

1,

0.8

),

chairMaterial

);



chair.position.set(

0,

0.5,

1.5

);



scene.add(chair);

addCollider(
chair
);





// =====================
// Window Frame
// =====================


const frame =
new THREE.Mesh(

new THREE.BoxGeometry(

2,

1.5,

0.1

),

new THREE.MeshStandardMaterial({

color:0x2b2118

})

);



frame.position.set(

0,

2,

-2.9

);



scene.add(frame);

addCollider(
frame
);



}