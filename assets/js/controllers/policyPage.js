controllers.policyPage = function(data, params){
  console.log('Controller - policy page');
  var policyContainer = templates.policyTemplate();
  utils.render('page', policyContainer);
};
