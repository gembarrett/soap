controllers.homePage = function(data, params){
  console.log('Controller - home');
  var allQuestions = questions;

  var questionsToShow = 1;
  var templateContext = [];
  for (var i = 0; i < questionsToShow; i++){
    var question = allQuestions[i];
    var item = {
      'question': '#question?'+questions.q,
      'answers': questions.answers,
    };
    templateContext.push(item);
  }

  // var introQuestions = templates.introQuestions(templateContext);
  var introText = templates.introText();
  var homeContent = introText;
  utils.render('page', homeContent);
};
