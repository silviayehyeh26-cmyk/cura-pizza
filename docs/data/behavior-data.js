const agentProfiles = [

    {
        type:"Explorer",
        name:"探索型消費者",

        ageRange:[18,30],

        taste:{
            freshness:7,
            complexity:8,
            texture:8,
            aroma:7,
            exploration:10
        },

        behavior:{
            priceSensitivity:5,
            newExperience:9
        }
    },


    {
        type:"Stable",

        name:"穩定型消費者",

        ageRange:[30,55],

        taste:{
            freshness:8,
            complexity:5,
            texture:6,
            aroma:8,
            exploration:3
        },

        behavior:{
            priceSensitivity:6,
            newExperience:3
        }
    },



    {
        type:"Sustainable",

        name:"永續型消費者",

        ageRange:[20,60],

        taste:{
            freshness:9,
            complexity:6,
            texture:6,
            aroma:7,
            exploration:7
        },


        behavior:{
            priceSensitivity:3,
            newExperience:7
        }
    }

];