controllers.questionPage = function(data, params){
  // load section1 questions
  var totalQuestions = thisSection.length;
  var thisScenario = thisSection[0];
  var templateContext = [];
  // queue up all the questions in this section
  console.log('questionPage - get the questions, answers, id, tips');
  for (var i = 1; i < totalQuestions; i++){
    var question = thisSection[i];
    // is it worth making these objects or just passing through the references?
    var item = {
      'question': question.q,
      'answers': question.answers,
      'id': question.id,
      'tips': question.tips
    };
    questionQueue.push(item.id);
    templateContext.push(item);
  }
  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(templateContext);
  utils.render('page', questionContainer);
};
