templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  noOfQuestions = data.length;
  // console.log(data);
  for(var i = 0; i < noOfQuestions; i++) {
      var question = data[i];
      content = content + `<div id="`+question.id+ `" class="questionContent"><h3>`+ question.question +`</h3>`;
      for (var j = 0; j < question.answers.length; j++){
        content = content + '<input type="'
        +question.answers[j].type+ '" id="'
        +question.id+ "-"+ j+ '-answer" name="'
        +question.id+ "-"+ j+ '-el">'
        + '<label for="'
        +question.id+ "-" + j+ '-el">'
        +question.answers[j].answerText+ '</label>';
      }
      content = content + '</div>';
  }
  content = content + '<button id="submitAnswers" onclick="alert(`clicked!`)" class="nextButton">Next</button></div>';

  return content;
};

// sometime after this is loaded, the following should be included:
// var nextButton = document.getElementById('submitAnswers');
// nextButton.onclick = function() {
//   console.log('next button clicked!');
// }
