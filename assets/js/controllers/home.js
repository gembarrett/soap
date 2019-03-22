controllers.homePage = function(data, params){
  console.log('Controller - home');
  // var allQuestions = questions;
  //
  // var questionsToShow = 1;
  // var templateContext = [];
  // for (var i = 0; i < questionsToShow; i++){
  //   var question = allQuestions[i];
  //   var item = {
  //     'question': '#question?'+questions.q,
  //     'answers': questions[i].answers,
  //   };
  //   templateContext.push(item);
  // }

  var introText = templates.introText();

  // button should call first question page when clicked

  var homeContent = introText;
  utils.render('page', homeContent);
};
