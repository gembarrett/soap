controllers.supportPage = function(data, params){
  console.log('Support - home');


  var supportContent = templates.supportTemplate();
  utils.render('page', supportContent);
};
