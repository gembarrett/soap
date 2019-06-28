templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  for(var i = 0; i < totalQ; i++) {
      var question = data[i];
      console.log(question.id);
      if (question.id === "q0") { // maybe check by thisQ instead?
        // FIX: this is an ugly way of adding the "current" class to q0, instead apply the class after element added to page
        content = content + `<form id="`+question.id+ `" class="questionContent current">` + '<h2>' + question.title + '</h2>';
        for (var k = 0; k < question.contentArray.length; k++){
          content = content + '<p>' + question.contentArray[k] + '</p>';
        }
      } else {
        content = content + `<form id="`+question.id+ `" class="questionContent">` + '<h2>' + question.q + '</h2>';
      };
      // if it's not a question, print the text
      if (question.contentArray) {
      } else { // if it's a question, print the question and stuff
        // content = content + '<div class="info-panel">';
        // + question.tips[0].relevance
        // + question.tips[1].meaning
        // + question.tips[2].implementation
        // + question.tips[3].more
        // + '</div>';
        for (var j = 0; j < question.answers.length; j++){
          content = content + '<div class="form-el"><input type="'
          +question.answers[j].type+ '" id="'
          +question.id+ "-"+ j+ '-answer" name="'
          +question.id+  '-el">'
          + '<label for="'
          +question.id+ "-" + j+ '-el">'
          +question.answers[j].answerText+ '</label></div>';
        }
      };

      content = content + '</form>';
  }
  content = content + '<button id="submitAnswers" onclick="handleSubmit()" class="nextButton">Next</button><button id="previewPolicy" class="previewButton">Preview</button></div>';
  return content;
};
