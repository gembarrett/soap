document.querySelectorAll('[contenteditable=true]').forEach(function (el) {
  el.addEventListener('keydown', function(event){
    if (event.keyCode === 8) {
      var node = event.srcElement || event.target;
      if ( !isActiveFormItem(node) ) {
          event.preventDefault();
      }
    }
  });
});

function isActiveFormItem(node) {
    var tagName = node.tagName.toUpperCase();
    var isInput = ( tagName === "INPUT" && node.type.toUpperCase() in validInputTypes);
    var isTextarea = ( tagName === "TEXTAREA" );
    var container = node.ownerDocument.contains ? node.ownerDocument : node.ownerDocument.body;
    if ( isInput || isTextarea ) {
        var isDisabled = node.readOnly || node.disabled;
        return !isDisabled && container.contains(node);  // the element may have been disconnected from the dom between the event happening and the end of the event chain, which is another case that triggers history changes
    }
    else if ( isInActiveContentEditable(node) ) {
        return container.contains(node);
    }
    else {
        return false
    }
}

function isInActiveContentEditable(node) {
    while (node) {
        if ( node.getAttribute &&
             node.getAttribute("contenteditable") &&
             node.getAttribute("contenteditable").toUpperCase() === "TRUE" ) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function editAnswers() {
  toggleEditMode();
  collectAnswers(true);
}

// when clicked, go through array of questions marked as editable and add/remove showAllQs class
// this should be used when compiling a policy or pressing Done to end an editing session
function collectAnswers(isEdited){
  var dic = {};
  var exc = [];
  var ans = [];

  // get all the editable questions
  var questions = [];
  // are the edited questions visible?
  questions = document.querySelectorAll(".showAllQs");

  // if we're in edit mode but no previous questions are visible
  if (isEdited && questions.length === 0){
      // starting the edit session
      // grab all the hidden editable questions
      questions = document.querySelectorAll(".editable, .current");
      // show each of the questions
      for (var a = 0; a < questions.length; a++){
        questions[a].classList.toggle("showAllQs");
      }
  } else if (isEdited && questions.length > 0) {
    // closing the edit session so collect all the visible answers
    // for each question
    for (var b = 0; b < questions.length; b++){
      // get the input fields
      var inputFields = checkForInputs(questions[b]);
      // if there are input fields
      if (inputFields !== false){
        // grab the question number and data
        qData = getQData(inputFields[0]);
        // for each of the input fields
        for (var bb = 0; bb < inputFields.length; bb++){
          // get the ID
          aNum = inputFields[bb].id.split("-")[1];
          // if the element is checked or is a type of text box
          if (inputFields[bb].checked || (inputFields[bb].type.includes("text") && inputFields[bb].value !== "")) {
            // grab any exclusions
            exc = updateExc(qData.data.answers[aNum], exc);
            // save the answer
            dic = saveToDict(inputFields[bb], qData.data.answers[aNum], dic);
            ans = storeThisA(ans, qData.ref, aNum);
          } else {
            return false;
          }
        }
      } else {
        console.log('No inputs');
      }
      // then hide the question
      questions[b].classList.toggle("showAllQs");
    }
  } else {
    // we're collecting for a policy so get all the answers available so far
    questions = document.querySelectorAll(".editable, .current");
    // for each question
    for (var c = 0; c < questions.length; c++){
      // get the input fields
      var inputFields = checkForInputs(questions[c]);
      // if there are input fields
      if (inputFields !== false){
        // get the question number and data
        qData = getQData(inputFields[0]);
        // for each of the input fields
        for (var cc = 0; cc < inputFields.length; cc++){
          // get the ID
          aNum = inputFields[cc].id.split("-")[1];
          // if the element is checked or is a type of not-empty text box
          if (inputFields[cc].checked || (inputFields[cc].type.includes("text") && inputFields[cc].value !== "")) {
            // grab any exclusions
            exc = updateExc(qData.data.answers[aNum], exc);
            // save the answer
            dic = saveToDict(inputFields[cc], qData.data.answers[aNum], dic);
            ans = storeThisA(ans, qData.ref, aNum);
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  }

  dict = dic;
  currentState.answers = ans;
  // collect any excluded question numbers
  if (exc.length > 0){
    currentState.exclusions = exc;
  }
}


function findContent(q){
  switch (true) {
    case q < 9:
      q = 'q'+q;
      return sections[0].find(question => question.id === q);
      break;
    case q < 14:
      q = 'q'+q;
      return sections[1].find(question => question.id === q);
      break;
    case q < 21:
      q = 'q'+q;
      return sections[2].find(question => question.id === q);
      break;
    case q < 28:
      q = 'q'+q;
      return sections[3].find(question => question.id === q);
      break;
    case q < 35:
      q = 'q'+q;
      return sections[4].find(question => question.id === q);
      break;
    case q < 43:
      q = 'q'+q;
      return sections[5].find(question => question.id === q);
      break;
    case q < 49:
      q = 'q'+q;
      return sections[6].find(question => question.id === q);
      break;
    default:
      console.log('Question not found');
      break;
  }
}

function getQData(el){
  var q = {};
  //# get the question number
  q.ref = el.id.split("-")[0];
  //# get the question data
  q.data = findContent(q.ref.split('q')[1]);
  return q;
}

function saveToDict(el, a, storage){
  // if this answer has a storeas value
  if (a.storeAs !== ""){
    // if it's a selected button
    if (el.checked){
      // get the edited or unedited text
      storage = el.nextSibling.contentEditable === "true" ? storeThisPair(a.storeAs, storage, el.nextSibling.innerText) : storeThisPair(a.storeAs, storage, a.answerText);
    } else if (el.type.includes('text') && el.value !== "") {
      // or store the contents of the text field
      storage = storeThisPair(a.storeAs, storage, el.value);
    }
  } else {
    return false;
  }
  return storage;
}


function storeThisA(storage, q, a){
  q = q.split('q')[1];
  storage.push({
    q: q,
    a: a
  });
  return storage;
};

function storeThisPair(el, storage, text) {
  text = stripCode(text);
  // if the storeAs key already exists in the dictionary because it's a continuation of a list
  if (el in storage) {
    // copy its current value into a temp array with the new value
    // if it's already an array, just push
    if (Array.isArray(storage[el])){ // checks if array - broken?
      storage[el].push(text);
    } else {
      // if not then add values to create an array
      temp = [storage[el], text];
      // then assign this temp array back to the key, overwriting the old value
      storage[el] = temp;
    }
  } else {
    // add the new key and value
    storage[el] = text;
  }
  return storage;
}

function toggleEditMode(){
  // get the edit button
  var editBtn = document.getElementById("editBtn");
  // toggle the editing class on button and page
  editBtn.classList.toggle('editMode');
  // toggle edit button inner text
  editBtn.innerText = editBtn.innerText == "EDIT" ? "DONE" : "EDIT";

  // if the buttons are disabled, enable them, otherwise disable them
  document.getElementById('previewPolicy').disabled === true ? document.getElementById('previewPolicy').disabled = false : document.getElementById('previewPolicy').disabled = true;
  document.getElementById('submitAnswers').disabled === true ? document.getElementById('submitAnswers').disabled = false : document.getElementById('submitAnswers').disabled = true;
}


function checkForInputs(q){
  els = q.querySelectorAll('input, textarea');
  // if this question has answers
  if (els.length > 0){
    // return the elements
    return els;
  } else {
    return false;
  }
}

function updateExc(a, e){
  // check for exclusions
  if (a.excludes.length > 0){
    // add them to the list of excluded questions
    e = e.concat(a.excludes);
    return e;
  } else {
    return e;
  }

}
