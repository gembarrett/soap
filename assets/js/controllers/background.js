controllers.bgPage = function(data, params){
  console.log('Background - home');


  var bgContent = templates.bgTemplate();
  utils.render('page', bgContent);
};
