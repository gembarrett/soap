function getAnswers(el, qId, tempA, tempD) {
  // search el for inputs or textboxes.
  var inputs = el.getElementsByTagName('input');
  var textareas = el.getElementsByTagName('textarea');

  // TODO: fix this duplication
  // if there's a textarea containing text
  if ((textareas.length > 0) && (textareas[0].value.length > 0)) {
    // split up the input's id to get the number
    var answerID = textareas[0].id.split("-")[1];

    // unsplit the question ID
    var tempQId = 'q'+qId;
    const result = currentState.sectionQ.find(question => question.id === tempQId);

    // push the text value object to the answers
    tempA.push({
      s: currentState.sectionC,
      q: qId,
      a: answerID,
      t: textareas[0].value,
    });
    // store the inputted value in the dictionary
    // should this be addToDictionary?
    tempD[result.answers[answerID].storeAs] = textareas[0].value;
  }

  // for every input in the form
  for (var i = 0; i < inputs.length; i++) {
    // split up the input's id to get the number
    var answerID = inputs[i].id.split("-")[1];

    // unsplit the question ID
    var tempQId = 'q'+qId;
    var result = currentState.sectionQ.find(question => question.id === tempQId);

    // if the input is a textbox containing value
    if (inputs[i].type === "text" && inputs[i].value !== "") {
      // if there's a storeAs value
      if (result.answers[answerID].storeAs !== "") {
        pushToDict(result.answers[answerID].storeAs, inputs[i].value);
      }

      // push the text value object to the currentState
      tempA.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID,
        t: inputs[i].value, // is this necessary if storeAs is working?
      });
    }

    // if the input is a checked checkbox or selected radio button
    if (inputs[i].checked) {

      // if this answer excludes another question, add to the list
      if (result.answers[answerID].excludes.length > 0) {
        currentState.exclusions = currentState.exclusions.concat(result.answers[answerID].excludes);
      }

      // if there's a storeAs value, store it
      if (result.answers[answerID].storeAs !== "") {
        storedText = inputs[i].nextSibling.contentEditable === "true" ? inputs[i].nextSibling.innerText : result.answers[answerID].answerText;
        pushToDict(result.answers[answerID].storeAs, storedText);
      }
      // push the question and answer object to the currentState
      tempA.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID,
      });

    }
  }
  return tempA;
}

function pushToDict(storeAs, answerText) {
  // if the storeAs key already exists in the dictionary because it's a continuation of a list
  if (storeAs in dict) {
    // copy its current value into a temp array with the new value
    // if it's already an array, just push
    if (Array.isArray(dict[storeAs])){ // checks if array - broken?
      dict[storeAs].push(answerText);
    } else {
      // if not then add values to create an array
      temp = [dict[storeAs], answerText];
      // then assign this temp array back to the key, overwriting the old value
      dict[storeAs] = temp;
    }
  } else {
    // add the new key and value
    dict[storeAs] = answerText;
  }
}


// when clicked, go through array of questions marked as editable and add/remove showAllQs class
var editAnswers = function(){
  var tempAnswers = [];
  var tempDict = {};
  // get the edit button
  var editBtn = document.getElementById("editBtn");
  // get all the editable questions
  var questions = document.querySelectorAll(".editable");
  // for each of the editable questions
  for (var i=0; i<questions.length; i++){
    // if the question has the visible class
    if(questions[i].classList.contains("showAllQs")){
      // remove it
      questions[i].classList.remove("showAllQs");
      // change the button text back to default
      editBtn.innerText = 'EDIT';
      // remove the active class from button
      editBtn.classList.remove('editMode');
      // now editing is done, it's time to grab all the answers in case they were updated
      // using questions[i]
      // var updatedAnswers = getAnswers(questions[i], questions[i].id, tempAnswers, tempDict);
      // console.log(updatedAnswers);
      // console.log(currentState.answers);
      // getInput takes the question element, gets the inputs
      // pass each element to getInput along with a temp answers array
      // then replace the regular answers array with the temp one
    } else {
      questions[i].classList.add("showAllQs");
      editBtn.innerText = 'DONE';
      editBtn.classList.add('editMode');
    }
  }
}
