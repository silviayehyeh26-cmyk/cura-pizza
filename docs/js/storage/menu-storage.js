/*
================================

Menu Storage

CURA Studio

================================
*/


const MENU_KEY =
"CURA_MENUS";



export function loadMenus(){


return JSON.parse(

localStorage.getItem(
MENU_KEY
)

)
||
{};


}




export function saveMenus(menus){


localStorage.setItem(

MENU_KEY,

JSON.stringify(
menus
)

);


}




export function createMenu(name){


const menus =
loadMenus();



const id =
"menu-" +
Date.now();



menus[id]={


id,


name,


category:"Pizza",


price:0,


description:"",


story:"",


ingredients:"",


taste:{


freshness:0,


complexity:0,


texture:0,


aroma:0,


exploration:0


},


status:"Available",

image:"",

available:true


};



saveMenus(
menus
);



return menus[id];


}