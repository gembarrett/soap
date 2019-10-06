templates.questionsTemplate = function(data){
  var content = `
      <progress max="`+questionsList.length+`" value="0"></progress><div id="questionContainer" class="">
  `;
  for(var i = 0; i < questionsList.length; i++) {
      var question = data[i];
      // create the start of the form
      content += `<form id="`+question.id+ `" class="questionContent`+ (question.id !== 'q0' ? '">' : ' current">');
      // if it's a question
      if (question.isQ) {
        var panel = "";
        if (question.tips[0].relevance) {
          panel += '<h3>Relevance</h3><p>' + question.tips[0].relevance + '</p>';
        }
        if (question.tips[1].meaning) {
          panel += '<h3>Meaning</h3><p>' + question.tips[1].meaning + '</p>';
        }
        if (question.tips[2].implementation) {
          panel += '<h3>Implementation</h3><p>' + question.tips[2].implementation + '</p>';
        }
        if (question.tips[3].more) {
          panel += '<h3>Search terms</h3><p>' + question.tips[3].more + '</p>';
        }
        var button = '<i id="info-trigger-'+question.id+'" class="fas fa-plus-circle"></i>';
        // add the question
        content += '<div class="question-panel" onclick="toggleInfo(\''+question.id+'\')"><h2>' + question.q + '</h2>';
        // if the panel content exists add it
        content += panel !== "" ? button+'<div class="info-display panel-'+question.id+' closed">'+panel+'</div></div>' : '<br />';

        // add the answers
        for (var j = 0; j < question.answers.length; j++){
           // premake the id and name
           thisID = 'id="' +question.id+ "-"+ j+ '-answer"';
           // if there's a placeholder then grab it
           if (question.answers[j].placeholder) {
             thisPlaceholder = 'placeholder="' + question.answers[j].placeholder + '"';
           }
           // if this is an input field then create the label
           if (question.answers[j].type !== 'textarea') {
             thisLabel = '<label for="' +question.id+ "-"+ j+ '-answer">' +question.answers[j].answerText+ '</label>';
           }
           // start the form
           content += '<div class="form-el">';

           // if there's a textarea
           if (question.answers[j].type === 'textarea') {
             content += '<textarea ' +thisID+thisPlaceholder+ ' class="incidentBox"></textarea>';
           }

           // if there's a textbox
           else if (question.answers[j].type === 'text') {
             content += thisLabel + '<input type="' +question.answers[j].type+ '"' +thisID+thisPlaceholder+ '>';
           }

           // if there's another input type
           else {
             content += '<input type="' +question.answers[j].type+ '"' +thisID+ '>' + thisLabel;
           }

           content += '</div>';
         }
      } else {
        // add the title and paragraphs
        content += '<h2>' + question.title + '</h2>';
        content = formatArray(question.contentArray, content);
      }
      content += '</form>';
  }
  content += '<div class="btn-wrap wrap-r"><button disabled id="previewPolicy" class="previewButton btn btn-seco">Preview</button><button id="submitAnswers" onclick="handleSubmit()" class="nextButton btn btn-prim">Next</button></div>';
  content += '<small><a href="mailto:feedback@usesoap.app?subject=Suggested%20change&amp;body=The%20problem%20with%20this%20page%20is%3A%0AThis%20is%20what%20I%20expected%3A%0AAny%20other%20info%3A%0A%0AI%20%5Bam%20%2F%20am%20not%5D%20ok%20with%20being%20contacted%20about%20this%20suggested%20change%20(delete%20as%20appropriate)">Suggest changes</a></small>';
  return content;
};
