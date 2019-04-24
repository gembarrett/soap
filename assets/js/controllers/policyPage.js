controllers.policyPage = function(data, params){
  console.log('Controller - policy page');
  // var allQuestions = questions;
  //
  // var questionsToShow = questions.length;
  // var templateContext = [];
  // for (var i = 0; i < questionsToShow; i++){
  //   var question = allQuestions[i];
  //   // for each question check if it's required and only add to the queue if it is
  //   // if (question.required) {
  //     var item = {
  //       'question': question.q,
  //       'answers': question.answers,
  //       'id': question.id,
  //       // 'link': utils.get_link(question.id)
  //     };
  //
  //     if (question.required){
  //     // not sure if there should be full id or just number here
  //     // questionQueue.push(question.id.split('q')[1]);
  //       questionQueue.push(question.id);
  //     }
  //
  //     templateContext.push(item);
  //   // }
  // }
  var policyContainer = templates.policyTemplate();
  utils.render('page', policyContainer);
};
