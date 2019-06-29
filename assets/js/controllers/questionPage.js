controllers.questionPage = function(data, params){
  var templateContext = [];
  // queue up all the questions in this section
  console.log('questionPage - get the questions, answers, id, tips');
  for (var i = 0; i < currentState.sectionQ.length; i++){
    var el = currentState.sectionQ[i];
    if (el.isQuestion === true) {
      var item = {
        'q': el.q,
        'answers': el.answers,
        'id': el.id,
        'tips': el.tips,
        'isQ':true
        // 'required': el.required
      };
    } else {
      var item = {
        'id':el.id,
        'title':el.title,
        'contentArray': el.paragraph,
      };
    }
    templateContext.push(item);
  }
  console.log(questionsList);
  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(templateContext);
  utils.render('page', questionContainer);
};
