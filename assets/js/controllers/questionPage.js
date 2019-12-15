controllers.questionPage = function(data, params){
  document.getElementById('bu').classList.add('active');
  document.getElementById('co').classList.remove('active');
  document.getElementById('bg').classList.remove('active');
  var templateContext = [];
  window.scrollTo(0,0);
  // queue up all the questions in this section
  console.log('questionPage - get the questions, answers, id, tips');

  // for each of the sections
  for (var i = 0; i < sections.length; i++){
    // get each of the questions
    for (var j = 0; j < sections[i].length; j++){
      var el = sections[i][j];
      if (el.isQuestion === true) {
        var item = {
          'q': el.q,
          'answers': el.answers,
          'id': el.id,
          'tips': el.tips,
          'isQ':true,
          'required': el.required
        };
      } else {
        var item = {
          'id':el.id,
          'title':el.title,
          'contentArray': el.paragraph,
        };
      }
      templateContext.push(item);
    }
  }
  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(templateContext);
  utils.render('page', questionContainer);
};
