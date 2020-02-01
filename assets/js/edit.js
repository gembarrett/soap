// when clicked, go through array of questions marked as editable and add/remove showAllQs class
var editAnswers = function(){
  var editBtn = document.getElementById("editBtn");
  var questions = document.querySelectorAll(".editable");
  for (var i=0; i<questions.length; i++){
    if(questions[i].classList.contains("showAllQs")){
      questions[i].classList.remove("showAllQs");
      editBtn.innerText = 'EDIT';
      editBtn.classList.remove('editMode');
      // now editing is done, it's time to grab all the answers in case they were updated
      // using questions array
      // pass each element to getInput along with a temp answers array
      // then replace the regular answers array with the temp one
    } else {
      questions[i].classList.add("showAllQs");
      editBtn.innerText = 'DONE';
      editBtn.classList.add('editMode');
    }
  }
}
