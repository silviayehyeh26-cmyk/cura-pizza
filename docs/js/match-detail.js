function generateMatchDetail(
user,
pizza
){


return [


{
name:"Freshness",

user:user.freshness,

pizza:pizza.taste.freshness

},


{
name:"Complexity",

user:user.complexity,

pizza:pizza.taste.complexity

},


{
name:"Texture",

user:user.texture,

pizza:pizza.taste.texture

}


];


}