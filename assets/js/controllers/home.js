controllers.homePage = function(data, params){
  console.log('Controller - home');
  var homeContent = templates.intro();
  homeContent += templates.featuresTrio();
  homeContent += templates.overviewQuad();
  homeContent += templates.cta();
  utils.render('page', homeContent);
};
