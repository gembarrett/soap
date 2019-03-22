templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  noOfQuestions = data.length;
  for(var i = 0; i < noOfQuestions; i++) {
      var question = data[i];
      content = content + `<h3>`+ question.question +`</h3>`;
      for (var j = 0; j < question.answers.length; j++){
        content = content + '<input type="' +question.answers[j].type+ ' id="' +question.id+ j+ '-answer" name="' +question.id+ j+ '-el">' + '<label for="' +question.id+ j+ '-el">' +question.answers[j].answerText+ '</label>';
      }

  }
  content = content + '</div>';

  return content;
};
