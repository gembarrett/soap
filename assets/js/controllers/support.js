controllers.supportPage = function(data, params){
  console.log('Support - home');

  document.getElementById('bu').classList.remove('active');
  document.getElementById('bg').classList.remove('active');

  var supportContent = templates.supportTemplate();
  utils.render('page', supportContent);
};
