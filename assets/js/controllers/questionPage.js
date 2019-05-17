controllers.questionPage = function(data, params){
  var allQuestions = questions;

  var questionsToShow = questions.length;
  var templateContext = [];
  for (var i = 0; i < questionsToShow; i++){
    var question = allQuestions[i];
    // for each question check if it's required and only add to the queue if it is
    // if (question.required) {
      var item = {
        'question': question.q,
        'answers': question.answers,
        'id': question.id,
        'tips': question.tips
        // 'link': utils.get_link(question.id)
      };

      // rexamine this, difference between no answer required and no question required
      // if (question.required){
      // not sure if there should be full id or just number here
      // questionQueue.push(question.id.split('q')[1]);
        questionQueue.push(question.id);
      // }

      templateContext.push(item);
    // }
  }
  var questionContainer = templates.questionsTemplate(templateContext);
  utils.render('page', questionContainer);
};
