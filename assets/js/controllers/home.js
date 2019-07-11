controllers.homePage = function(data, params){
  console.log('Controller - home');


  var homeContent = templates.introText();
  utils.render('page', homeContent);
};
