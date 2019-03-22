templates.questionsTemplate = function(data){
  var content = `
      <div id="all_posts" class="">
          <h2>All questions</h2>
  `;
  noOfQuestions = data.length;
  for(var i = 0; i < noOfQuestions; i++) {
      var question = data[i];
      console.log(question);
      var answers = question.answers;
      // for (var i = 0; i < answers.length; i++){
      //
      // }

      content = content + `
          <h3><a href="`+question.question+`">`+ question.question +`</a></h3>
      `;
  }
  content = content + '</div>';

  return content;
};
