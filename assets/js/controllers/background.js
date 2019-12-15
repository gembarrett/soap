controllers.bgPage = function(data, params){
  console.log('Background - home');

  // TODO: refactor into a function
  document.getElementById('bg').classList.add('active');
  document.getElementById('bu').classList.remove('active');
  window.scrollTo(0,0);
  var bgContent = templates.bgTemplate(data, params);
  utils.render('page', bgContent);
};
