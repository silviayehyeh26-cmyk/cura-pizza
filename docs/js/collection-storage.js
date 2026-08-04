/*
================================

CURA Collection Storage

================================
*/


const COLLECTION_KEY =
"CURA_COLLECTIONS";





export function loadCollections(){


const data =
localStorage.getItem(
COLLECTION_KEY
);



if(!data){

return {};

}



return JSON.parse(data);


}





export function saveCollections(data){


localStorage.setItem(

COLLECTION_KEY,

JSON.stringify(data)

);


}




export function createCollection(name){


const collections =
loadCollections();



const id =
"collection-" +
Date.now();



collections[id]={


id,

name,


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
// Remove Object Binding
// =====================


export function removeObjectFromCollections(objectID){


const collections =
loadCollections();



Object.values(collections)

.forEach(collection=>{


collection.objects =
collection.objects.filter(

id=>id !== objectID

);


});



saveCollections(
collections
);


}