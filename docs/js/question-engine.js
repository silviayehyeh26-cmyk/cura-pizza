let curaQuestionFlow = [];


let currentQuestionIndex = 0;


let currentAnswers = {};



function initializeQuestionFlow(){


curaQuestionFlow = [

...curaQuestionModel.tasteQuestions,

...curaQuestionModel.ingredientQuestions,

...curaQuestionModel.contextQuestions,

...curaQuestionModel.backgroundQuestions,

...curaQuestionModel.dietaryQuestions

];


currentQuestionIndex = 0;


console.log(
"CURA Question Flow Loaded",
curaQuestionFlow
);


}





function getCurrentQuestion(){


return curaQuestionFlow[
currentQuestionIndex
];


}





function submitAnswer(
answer
){


let question =
getCurrentQuestion();



if(!question){

return;

}



processQuestionAnswer(

question,

answer

);



currentQuestionIndex++;



return getCurrentQuestion();


}







function isQuestionComplete(){


return (

currentQuestionIndex >=
curaQuestionFlow.length

);


}





function getCustomerAnswers(){


return currentAnswers;


}