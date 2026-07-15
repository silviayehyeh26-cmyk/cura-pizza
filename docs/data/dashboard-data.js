const dashboardData = {


taste:


{

labels:[

"清爽",
"濃厚",
"香氣",
"口感",
"層次"

],


values:[

85,
45,
78,
80,
65

]


},





menu:


[


{

name:"Margherita",

sales:120,

trend:"+12%",


radar:[

85,
45,
78,
80,
65

],


carbon:{

level:"Low",

message:"低碳友善選擇"

},


reason:"番茄香氣、清爽口感",


insight:
"經典風味受到喜愛，適合偏好平衡口感的顧客。"


},




{

name:"Mushroom Pizza",

sales:90,

trend:"+6%",


radar:[

60,
82,
90,
75,
88

],


carbon:{

level:"Medium",

message:"在地食材降低運輸影響"

},


reason:"香氣與濃郁感",


insight:
"適合喜歡深層香氣與豐富口感的顧客。"


}


],





reward:


{

issued:300,

used:180,

cost:6000,

roi:4.2

},





sustainability:


{

trees:125,

carbon:-32

}


};


const ctx =
document
.getElementById("tasteRadar");



new Chart(ctx, {


type:"radar",


data:{


labels:
dashboardData.taste.labels,


datasets:[

{


label:"Customer Taste",

data:
dashboardData.taste.values


}

]


},



options:{


responsive:true


}



});

