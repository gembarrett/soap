templates.questionsTemplate = function(data){
  var content = `
      <div id="questionContainer" class="">
  `;
  for(var i = 0; i < questionsList.length; i++) {
      var question = data[i];
      // create the start of the form
      content += `<form id="`+question.id+ `" class="questionContent`+ (question.id !== 'q0' ? '">' : ' current">');

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
           thisID = 'id="' +question.id+ "-"+ j+ '-answer"';
           console.log(thisID);
           thisName = 'name="' +question.id+  '-el"';
           console.log(thisName);
           if (question.answers[j].placeholder) {
             thisPlaceholder = 'placeholder="' + question.answers[j].placeholder + '"';
             console.log(thisPlaceholder);
           }
           if (question.answers[j].type !== 'textarea') {
             thisLabel = '<label for="' +question.id+ '-' +j+ '-el">' +question.answers[j].answerText+ '</label>';
             console.log(thisLabel);
           }

           content += '<div class="form-el">';
           // if there's a textarea
           if (question.answers[j].type === 'textarea') {
             content += '<textarea ' +thisID+thisName+thisPlaceholder+ '></textarea>'
           }
           // create a textarea element
           // add the id, name and placeholder
           // should the area size be specified?

           else if (question.answers[j].type === 'text') {
             content += '<input type="' +question.answers[j].type+ '"' +thisID+thisName+thisPlaceholder+ '>' +thisLabel;
           }

           // if there's a textbox
           // create the input element
           // add the answerText, id, name, label and placeholder

           else {
             content += '<input type="' +question.answers[j].type+ '"' +thisID+thisName+ '>' +thisLabel;
           }
           // if there's another input type
           // create the input element
           // add the answerText, id, label and name


           content += '</div>';
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
