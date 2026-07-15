/* ===========================
   CURA DASHBOARD JS
=========================== */
console.log("dashboard.js loaded");

/* ---------- Taste Radar ---------- */

let tasteChart = null;


const radarElement =
document.getElementById("tasteRadar");


if(radarElement && typeof dashboardData !== "undefined"){


    if(tasteChart){
        tasteChart.destroy();
    }

    const existingChart = Chart.getChart("tasteRadar");

if(existingChart){
    existingChart.destroy();
}

    tasteChart = new Chart(
    radarElement,
    {

        type:"radar",

        data:{


            labels:
            dashboardData.taste.labels,


            datasets:[

            {

                label:"Customer Taste",

                data:
                dashboardData.taste.values,

                borderWidth:2

            }

            ]

        },


        options:{


            responsive:true,


            scales:{

                r:{

                    beginAtZero:true,

                    max:100

                }

            }


        }

    });


}


/* ---------- Menu Intelligence ---------- */


const menuList =
document.getElementById("menu-list");



if(menuList && dashboardData){



dashboardData.menu.forEach(item=>{


const card =
document.createElement("div");


card.className="menu-card";



card.innerHTML=`

<div class="menu-info">


<h3>
${item.name}
</h3>


<p class="menu-reason">
${item.reason}
</p>



<div class="menu-sales">

<span>
Sales
</span>

<strong>
${item.sales}
</strong>

</div>



<div class="carbon-badge">

🌱 ${item.carbon.level}

<p>
${item.carbon.message}
</p>


</div>



<button class="menu-analyze-btn">

查看分析

</button>


</div>

`;



const button =
card.querySelector(".menu-analyze-btn");



button.addEventListener("click",()=>{


if(tasteChart){


tasteChart.data.datasets[0].label =
item.name;


tasteChart.data.datasets[0].data =
item.radar;


tasteChart.update();


}


});



menuList.appendChild(card);



});


}



/* ---------- Reward ---------- */


const rewardBox =
document.getElementById("reward-box");



if(rewardBox && dashboardData){


const reward =
dashboardData.reward;



const usageRate =
Math.round(
(reward.used / reward.issued) * 100
);



rewardBox.innerHTML=`


<div class="reward-grid">


<div class="reward-item">

<span>
Issued
</span>


<h2>
${reward.issued}
</h2>


<p>
發放優惠
</p>


</div>




<div class="reward-item">


<span>
Used
</span>


<h2>
${reward.used}
</h2>


<p>
使用次數
</p>


</div>




<div class="reward-item">


<span>
Usage Rate
</span>


<h2>
${usageRate}%
</h2>


<p>
轉換率
</p>


</div>





<div class="reward-item">


<span>
ROI
</span>


<h2>
${reward.roi}x
</h2>


<p>
會員價值
</p>


</div>


</div>



<div class="reward-status">


優惠成本狀態：

<strong>
Healthy
</strong>


</div>


`;

}



/* ---------- Sustainability ---------- */


const ecoBox =
document.getElementById("eco-box");



if(ecoBox && dashboardData){


const eco =
dashboardData.sustainability;



ecoBox.innerHTML=`


<div class="eco-box">


<div class="eco-card">


<span>
CURA Forest
</span>


<h2>
🌱 ${eco.trees}
</h2>


<p>
支持植樹行動
</p>


</div>




<div class="eco-card">


<span>
Carbon Impact
</span>


<h2>
${eco.carbon}
</h2>


<p>
kg CO₂e reduction
</p>


</div>




<div class="eco-card">


<span>
Environmental Score
</span>


<h2>
A
</h2>


<p>
Sustainable Choice
</p>


</div>



</div>


`;

}
