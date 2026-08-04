/*
================================

CURA Collection Engine

v1.0

================================
*/


const KEY =
"CURA_COLLECTIONS";



export function loadCollections(){


const data =
localStorage.getItem(KEY);



if(!data){


return {};

}



return JSON.parse(data);


}






export function saveCollections(data){


localStorage.setItem(

KEY,

JSON.stringify(data)

);


}





export function createCollection(
name,
description=""
){


const collections =
loadCollections();



const id =
"collection-" +
Date.now();




collections[id]={


id,


name,


description,


objects:[]


};



saveCollections(
collections
);



return collections[id];

}






export function addObjectToCollection(

collectionID,

objectID

){


const collections =
loadCollections();



if(!collections[collectionID])
return;



if(
!collections[collectionID].objects.includes(objectID)
){


collections[collectionID]
.objects
.push(objectID);


}



saveCollections(
collections
);



}

// =====================
// Remove Object Reference
// =====================

export function removeObjectFromCollections(
objectID
){


const collections =
loadCollections();



Object.values(collections)

.forEach(collection=>{


collection.objects =

collection.objects.filter(

id=>id !== objectID

);


});



localStorage.setItem(

"CURA_COLLECTIONS",

JSON.stringify(
collections
)

);


console.log(
"Removed object from collections:",
objectID
);


}