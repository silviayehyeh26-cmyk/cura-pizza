/*
================================

Behavior Spectrum Engine

v3.0

Multi Dimension Mapping

================================
*/


export class SpectrumEngine {



getColor(agent){


let state =
agent.journey?.state
||
agent.status;



let baseHue = {


Entering:120,

Exploring:210,

Viewing_Menu:190,

AI_Assisted:280,

Ordering:130,

Dining:40,

Feedback:20,

Completed:0


}[state]
||
200;



let vector =
agent.behaviorVector
||
{};



//
// 人格偏移
//

let shift = 0;



shift +=
(vector.curiosity || 0)
*
-30;


shift +=
(vector.trust || 0)
*
40;


shift +=
(vector.price || 0)
*
20;



let hue =
baseHue + shift;



//
// 強度
//

let intensity =
agent.behaviorIntensity
||
0.5;



let saturation =
60 +
intensity*30;



let lightness =
70 -
intensity*35;



return `hsl(
${hue},
${saturation}%,
${lightness}%
)`;



}



}