/* ==========================================
   CURA Robin Chat v3

   功能：
   1. Robin 對話系統
   2. 頁面切換
   3. 返回
   4. Pointer Event 拖曳
   5. PC / Mobile 共用

========================================== */



/* ==========================================
   取得 HTML 元件
========================================== */


const birdAvatar =
document.getElementById("birdAvatar");


const birdChat =
document.getElementById("birdChat");


const birdMessage =
document.getElementById("birdMessage");


const birdOptions =
document.getElementById("birdOptions");


const backBtn =
document.getElementById("backBtn");





/* ==========================================
   確認元件存在

   防止 HTML 還沒載入造成錯誤
========================================== */


if(
    birdAvatar &&
    birdChat &&
    birdMessage &&
    birdOptions &&
    backBtn
){



/* ==========================================
   Chat 狀態
========================================== */


let currentPage = "home";


let chatOpen = false;





/* ==========================================
   Robin 頁面資料

   新增頁面只需要增加這裡

========================================== */


const birdPages = {


    home:{


        message:
        `
        你好！<br>
        我是 Robin。<br><br>
        今天想了解什麼？
        `,


        buttons:[


            {
                text:"🍕 推薦今天吃什麼",
                next:"food"
            },


            {
                text:"📖 CURA 故事",
                next:"story"
            },


            {
                text:"📍 如何找到我們",
                next:"location"
            },


            {
                text:"🪑 我要訂位",
                next:"reserve"
            }


        ]

    },





    food:{


        message:
        `
        今天第一次來嗎？<br><br>
        告訴我你的喜好。
        `,


        buttons:[


            {
                text:"🍕 想吃經典"
            },


            {
                text:"✨ 想吃特別"
            },


            {
                text:"🥩 我不吃牛"
            },


            {
                text:"🥗 我是素食"
            }


        ]

    },





    story:{


        message:
        `
        CURA 原本是一間老藥局。<br><br>
        我們希望保存城市與人的故事。
        `,


        buttons:[]

    },





    location:{


        message:
        `
        CURA 位於萬華老街區。<br><br>
        可以查看地圖找到我們。
        `,


        buttons:[


            {
                text:"📍 開啟地圖",
                action:"map"
            }


        ]

    },





    reserve:{


        message:
        `
        想預約座位嗎？<br><br>
        我帶你前往訂位。
        `,


        buttons:[


            {
                text:"🪑 前往訂位",
                action:"reserve"
            }


        ]

    }


};






/* ==========================================
   更新 Chat 畫面

========================================== */


function updateChat(){



    const page =
    birdPages[currentPage];



    birdMessage.innerHTML =
    page.message;



    birdOptions.innerHTML = "";




    page.buttons.forEach(buttonData=>{



        const button =
        document.createElement("button");



        button.className =
        "bird-option";



        button.innerHTML =
        buttonData.text;




        button.addEventListener(
            "click",
            ()=>{


                handleButton(buttonData);


            }
        );



        birdOptions.appendChild(button);



    });




    if(currentPage==="home"){


        backBtn.style.display="none";


    }else{


        backBtn.style.display="flex";


    }



}







/* ==========================================
   按鈕功能

========================================== */


function handleButton(data){



    if(data.next){


        currentPage =
        data.next;


        updateChat();


        return;


    }




    if(data.action==="map"){


        window.open(
            "https://maps.google.com",
            "_blank"
        );


    }




    if(data.action==="reserve"){


        window.open(
        "https://inline.app",
        "_blank"
        );


    }



}








/* ==========================================
   返回首頁

========================================== */


backBtn.addEventListener(
"click",
()=>{


    currentPage="home";


    updateChat();



});








/* ==========================================
   開關 Chat

========================================== */

birdAvatar.addEventListener(
"click",
()=>{
    toggleChat();
});

function toggleChat(){


    chatOpen =
    !chatOpen;



    birdChat.classList.toggle(
        "open"
    );



    birdAvatar.classList.toggle(
        "chat-active"
    );



    if(chatOpen){


        updateChat();


    }


}








/* ==========================================
   Pointer Drag System

   支援：
   - Mouse
   - Touch
   - Pen


========================================== */



let dragging=false;


let startX=0;


let startY=0;


let startLeft=0;


let startTop=0;


let moved=false;



const moveTarget =
document.querySelector(".header");







birdAvatar.addEventListener(
"pointerdown",
(event)=>{



    dragging=true;



    moved=false;



    birdAvatar.setPointerCapture(
        event.pointerId
    );



    startX =
    event.clientX;



    startY =
    event.clientY;



    const rect =
    birdAvatar.getBoundingClientRect();



    startLeft =
    rect.left;



    startTop =
    rect.top;



});







/*
birdAvatar.style.left =
newLeft+"px";

birdAvatar.style.top =
newTop+"px";

birdAvatar.style.transform =
"none";
*/







birdAvatar.addEventListener(
"pointerup",
()=>{


    dragging=false;



    if(!moved){


        toggleChat();


    }



});







/* ==========================================
   初始顯示 Robin

========================================== */


setTimeout(()=>{


    birdAvatar.classList.add(
        "show"
    );


},3000);



}

