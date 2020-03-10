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


function getAnswers(el, qId, tempA, tempD) {
  console.log('getting answers');
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
// do these need to be in a variable?
var editAnswers = function(){
  toggleEditMode();

  // maybe keep these local and overwrite the global each time?
  var edDict = {};
  var edAnswers = [];
  var edExclusions = [];

  var dic = {};
  var exc = [];
  var ans = [];

  // get all the editable questions
  var questions = document.querySelectorAll(".editable");

  // hide or show each of the editable questions
  for (var i=0; i<questions.length; i++){
    // if the question is visible
    if(questions[i].classList.contains("showAllQs")){
      console.log('question is visible');

      // get the input fields of this question
      var elements = questions[i].querySelectorAll('input, textarea');
      console.log(elements);

      // if this isn't a scenario question
      if (elements.length > 0){
        // grab the question number from the first input's ID
        var qData = getQData(elements[0]);
        console.log(qData);

        for (var j=0; j<elements.length; j++){
          // get the answer number
          aNum = elements[j].id.split("-")[1];
          console.log('Input currentA is '+aNum);

          // if the element is checked or holds a value
          if (elements[j].checked || elements[j].value !== "") {
            // check for exclusions
            if (qData.data.answers[aNum].excludes.length > 0){
              // add them to the list of excluded questions
              exc = exc.concat(qData.data.answers[aNum].excludes);
            } else {
              console.log('This answer does not exclude any questions.');
            }

            // save the answer
            dic = saveToDict(elements[j], qData.data.answers[aNum], dic);
            ans = storeThisA(ans, qData.ref, aNum);
          }
        }
      }
      // remove the visible class and hide that question
      questions[i].classList.remove("showAllQs");
    } else {
      console.log('question is not visible');
      // make the question visible
      questions[i].classList.add("showAllQs");
    }
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
  console.log(q);
  return q;
}

function saveToDict(el, a, dict){
  // if this answer has a storeas value
  if (a.storeAs !== ""){
    // if it's a selected button
    if (el.selected){
      // get the edited or unedited text
      dict = el.nextSibling.contentEditable === "true" ? storeThisPair(a.storeAs, dict, el.nextSibling.innerText) : storeThisPair(a.storeAs, dict, a.answerText);
    } else {
      // or store the contents of the text field
      dict = storeThisPair(a.storeAs, dict, el.value);
    }
  } else {
    console.log('No dictionary key found.');
  }
  return dict;
}


function storeThisA(storage, q, a){
  q = q.split('q')[1];
  storage.push({
    q: q,
    a: a
  });
  return storage;
};

function storeThisPair(el, dict, text) {
  // if the storeAs key already exists in the dictionary because it's a continuation of a list
  if (el in dict) {
    // copy its current value into a temp array with the new value
    // if it's already an array, just push
    if (Array.isArray(dict[el])){ // checks if array - broken?
      dict[el].push(text);
    } else {
      // if not then add values to create an array
      temp = [dict[el], text];
      // then assign this temp array back to the key, overwriting the old value
      dict[el] = temp;
    }
  } else {
    // add the new key and value
    dict[el] = text;
  }
  return dict;
}

function toggleEditMode(){
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


// hide and show things for edit mode
// set up temp vars
// get all the applicable questions
// for each question
  // if the question is visible
  // get the inputs and boxes
    // if there's inputs

    //# get the question number
    //# get the question data

      // for each input
      // get the answer number
        // if the input is selected or holds text
          // if the answer data contains exclusions
          // store the exclusions in list
          // else log it

          //$ store any key-value pairs in dictionary
          //$ store any answers in answers array


    // then hide the question
    // else log it and make the question visible
