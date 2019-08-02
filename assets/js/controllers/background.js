controllers.bgPage = function(data, params){
  console.log('Background - home');

  document.getElementById('bg').classList.add('active');  
  document.getElementById('co').classList.remove('active');
  document.getElementById('bu').classList.remove('active');

  var bgContent = templates.bgTemplate();
  utils.render('page', bgContent);
};
