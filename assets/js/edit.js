document.querySelectorAll('[contenteditable=true]').forEach(function (el) {
  console.log(el);
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
  console.log('Editing answers');
  toggleEditMode();
  collectAnswers(true);
  console.log('There are '+currentState.answers.length+' answers stored in current state');
}

// when clicked, go through array of questions marked as editable and add/remove showAllQs class
// this should be used when compiling a policy or pressing Done to end an editing session
function collectAnswers(isEdited){

  var dic = {};
  var exc = [];
  var ans = [];

  // get all the editable questions
  var questions = [];


  // if we're coming via the editbutton (isEdited) then two things
  if (isEdited){
    // 1) we're starting the edit session
      // show all the editable questions and collect nothing
    // 2) we're closing the edit session
      // hide all the questions and collect all the answers
  } else {
    // we're collecting for a policy
    // collect all the answers
  }

  // if we're closing edit mode
  if (isEdited && (document.getElementById("editBtn").innerText === "EDIT")){
    // collect everything with class of showAllQs
    questions = document.querySelectorAll(".showAllQs");
  } else if (!isEdited){
    // collect everything with class current or editable
    questions = document.querySelectorAll(".editable");
    // questions.push(document.querySelector(".current"));
  } else {
    console.log('Not collecting anything');
  }

  console.log(questions.length);
  // for each of the applicable questions
  for (var i=0; i<questions.length; i++){

      var elements = questions[i].querySelectorAll('input, textarea');

      // if this question has answers
      if (elements.length > 0){
        // grab the question number from the first input's ID
        var qData = getQData(elements[0]);
        // for each of the answers
        for (var j=0; j<elements.length; j++){
          // get the answer number
          aNum = elements[j].id.split("-")[1];

          // if the element is checked or is a type of text box
          if (elements[j].checked || elements[j].type.includes("text")) {
            // check for exclusions
            if (qData.data.answers[aNum].excludes.length > 0){
              // add them to the list of excluded questions
              exc = exc.concat(qData.data.answers[aNum].excludes);
            } else {
              console.log('! e');
            }

            // save the answer
            dic = saveToDict(elements[j], qData.data.answers[aNum], dic);
            ans = storeThisA(ans, qData.ref, aNum);
          } else {
            console.log('Not a selection or text box');
          }
        }
        console.log('End of loop: '+ans.length+' answers stored in ans');
      } else {
        console.log('! a')
      }
      if (isEdited){
        questions[i].classList.toggle("showAllQs");
      } else {
        console.log('Not in edit mode');
      }
  }

  dict = dic;
  currentState.answers = ans;
  currentState.exclusions = exc;
  console.log('There are '+ans.length+' answers stored in ans');
  console.log('There are '+currentState.answers.length+' answers stored in current state');

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
    case q < 27:
      q = 'q'+q;
      return sections[3].find(question => question.id === q);
      break;
    case q < 34:
      q = 'q'+q;
      return sections[4].find(question => question.id === q);
      break;
    default:
      console.log('question not found');
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
    console.log('No dictionary key found.');
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
  console.log('Toggle edit mode');
  // get the edit button
  var editBtn = document.getElementById("editBtn");
  // toggle the editing class on button and page
  editBtn.classList.toggle('editMode');
  page.classList.toggle('editMode');
  // toggle edit button inner text
  editBtn.innerText = editBtn.innerText == "EDIT" ? "DONE" : "EDIT";

  // if the buttons are disabled, enable them, otherwise disable them
  document.getElementById('previewPolicy').disabled === true ? document.getElementById('previewPolicy').disabled = false : document.getElementById('previewPolicy').disabled = true;
  document.getElementById('submitAnswers').disabled === true ? document.getElementById('submitAnswers').disabled = false : document.getElementById('submitAnswers').disabled = true;
}
