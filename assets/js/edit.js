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


  // get all the editable questions
  var questions = document.querySelectorAll(".editable");

  // hide or show each of the editable questions
  for (var i=0; i<questions.length; i++){
    // if the question is visible
    if(questions[i].classList.contains("showAllQs")){
      console.log('question is visible');

      // get the input fields of this question
      var edInputs = questions[i].getElementsByTagName('input');
      var edBoxes = questions[i].getElementsByTagName('textarea');

      // if there are inputs collected
      if (edInputs.length > 0) {

        // grab the question number from the first input's ID
        currentQ = edInputs[0].id.split("-")[0];
        // currentQ = edInputs[0].id.split("-")[0].split('q')[1];
        console.log('currentQ is '+currentQ);
        // use it to look up the question in the json
        const qContent = findContent(currentQ.split('q')[1]);

        // for each of the inputs this question has
        for (var j = 0; j < edInputs.length; j++){
          // get the answer number from the input's ID
          currentA = edInputs[j].id.split("-")[1];
          console.log('Input currentA is '+currentA);
          // catch any errors

          // if the input is selected
          if (edInputs[j].checked){
            // see if it excludes any (future?) questions
            if (qContent.answers[currentA].excludes.length > 0) {
              // add them to the list of excluded questions
              edExclusions = edExclusions.concat(qContent.answers[currentA].excludes);
            } else {
              console.log('No exclusions found.');
            }

            edDict = saveToDict(edInputs[j], qContent.answers[currentA], edDict, true);
            edAnswers = storeThisA(edAnswers, currentQ, currentA);

          } else if (edInputs[j].type === "text" && edInputs[j].value !== "") { // check for text in fields
            edDict = saveToDict(edInputs[j], qContent.answers[currentA], edDict, false);
            // then push currentQ, answer ID and inputted value to edAnswers
            // push the text value object to the storage
            edAnswers = storeThisA(edAnswers, currentQ, currentA);

          }
        } // end of for loop
      } // end of inputs section

      // if textareas were collected
      if (edBoxes.length > 0) {
        // grab the question number from the first input's ID
        currentQ = edBoxes[0].id.split("-")[0];
        // for each of the boxes this question has
        for (var k = 0; k > edBoxes.length; k++){
          // get the answer number from the input's ID
          currentA =  edBoxes[k].id.split("-")[1];
          console.log('Box currentA is '+currentA);

          // grab the content
          const qContent = findContent(currentQ.split('q')[1]);

          // if the box contains text
          if (edBoxes[k].value.length > 0){

            edDict = saveToDict(edBoxes[k], qContent.answers[currentA], edDict, false);
            edAnswers = storeThisA(edAnswers, currentQ, currentA);
          }
        }
      }
      // remove it and hide that question
      questions[i].classList.remove("showAllQs");
    } else {
      console.log('question is not visible');
      // make the question visible
      questions[i].classList.add("showAllQs");
    }
  }
  console.log(edDict);
  console.log(edAnswers);
  console.log(edExclusions);
}


function saveToDict(el, a, dict, isBtn){
  // if this answer has a storeas value
  if (a.storeAs !== ""){
    // if it's a selected button
    if (isBtn){
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

function storeThisA(storage, q, a){
  q = q.split('q')[1];
  storage.push({
    q: q,
    a: a
  });
  return storage;
};

// FIX: this is creating duplicates - need to either accept multiples or overwrite each time
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
