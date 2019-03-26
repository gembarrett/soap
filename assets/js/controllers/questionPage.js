controllers.questionPage = function(data, params){
  console.log('Controller - question page');
  var allQuestions = questions;

  var questionsToShow = questions.length;
  var templateContext = [];
  for (var i = 0; i < questionsToShow; i++){
    var question = allQuestions[i];
    var item = {
      'question': question.q,
      'answers': question.answers,
      'id': question.id,
      // 'link': utils.get_link(question.id)
    };
    templateContext.push(item);
  }

  var questionContainer = templates.questionsTemplate(templateContext);

  utils.render('page', questionContainer);
};
