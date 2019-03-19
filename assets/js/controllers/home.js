controllers.homePage = function(data, params){
  console.log('Controller - home');
  var allQuestions = questions;
  console.log(allQuestions);

  var questionsToShow = 2;
  var templateContext = [];
  for (var i = 0; i < questionsToShow; i++){
    var question = allQuestions[i];
    var item = {
      'link': '#question?'+question.q,
      'category': question.category,
    };
    templateContext.push(item);
  }

  // var introQuestions = templates.introQuestions(templateContext);
  var introText = templates.introText();
  console.log(introText);
  var homeContent = introText;
  utils.render('page', homeContent);
};
