templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  noOfQuestions = data.length;
  // console.log(data);
  for(var i = 0; i < noOfQuestions; i++) {
      var question = data[i];
      if (question.id === "q0") {
        // FIX: this is an ugly way of adding the "current" class to q0, instead apply the class after element added to page
        content = content + `<form id="`+question.id+ `" class="questionContent current"><h3>`+ question.question +`</h3>`;
      } else {
        content = content + `<form id="`+question.id+ `" class="questionContent"><h3>`+ question.question +`</h3>`;
      }
      for (var j = 0; j < question.answers.length; j++){
        content = content + '<div class="form-el"><input type="'
        +question.answers[j].type+ '" id="'
        +question.id+ "-"+ j+ '-answer" name="'
        +question.id+ "-"+ j+ '-el">'
        + '<label for="'
        +question.id+ "-" + j+ '-el">'
        +question.answers[j].answerText+ '</label></div>';
      }

      content = content + '</form>';
  }
  content = content + '<button id="submitAnswers" onclick="handleSubmit()" class="nextButton">Next</button><button id="previewPolicy" class="previewButton">Preview</button></div>';
  return content;
};
