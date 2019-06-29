templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  for(var i = 0; i < currentState.sectionQ.length; i++) {
      var question = data[i];
      // create the start of the form
      content += `<form id="`+question.id+ `" class="questionContent`+ (question.isQ ? '">' : ' current">');

      // if it's a question
      if (question.isQ) {
        // add the question
         content += '<h2>' + question.q + '</h2>';
         // add the tips panel
         content += '<div class="info-panel">'
         + question.tips[0].relevance
         + question.tips[1].meaning
         + question.tips[2].implementation
         + question.tips[3].more
         + '</div>';
         // add the answers
         for (var j = 0; j < question.answers.length; j++){
           content += '<div class="form-el"><input type="'
           +question.answers[j].type+ '" id="'
           +question.id+ "-"+ j+ '-answer" name="'
           +question.id+  '-el">'
           + '<label for="'
           +question.id+ "-" + j+ '-el">'
           +question.answers[j].answerText+ '</label></div>';
         }
      } else {
        // add the title and paragraphs
        content += '<h2>' + question.title + '</h2>';
        for (var k = 0; k < question.contentArray.length; k++){
          content += '<p>' + question.contentArray[k] + '</p>';
        }
      }
      content += '</form>';
  }
  content += '<button id="submitAnswers" onclick="handleSubmit()" class="nextButton">Next</button><button id="previewPolicy" class="previewButton">Preview</button></div>';
  return content;
};
