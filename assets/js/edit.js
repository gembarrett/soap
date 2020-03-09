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
  var tempAnswers = [];
  var tempDict = {};
  // get the edit button
  var editBtn = document.getElementById("editBtn");
  // get all the editable questions
  var questions = document.querySelectorAll(".editable");
  // toggle the editing class on button and page
  editBtn.classList.toggle('editMode');
  page.classList.toggle('editMode');

  // toggle edit button inner text
  editBtn.innerText = editBtn.innerText == "EDIT" ? "DONE" : "EDIT";
  // if we're in edit mode
  // should this be before the toggle?
  // if (editBtn.classList.contains('editMode')) {
    // create new storage for the answers
    var edAnswers = [];
    var edExclusions = [];
    var edDict = {};
  // }

  // hide or show each of the editable questions
  for (var i=0; i<questions.length; i++){
    // if the question has the visible class
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
        console.log('currentQ is '+currentQ+ ' ' +currentQ.split('q')[1]);
        // use it to look up the question in the json
        var findInSection = whichSection(currentQ.split('q')[1]);
        const qContent = sections[findInSection].find(question => question.id === currentQ);

        console.log(qContent);

        // for each of the inputs this question has
        for (var j = 0; j < edInputs.length; j++){

          // get the answer number from the input's ID
          currentA = edInputs[j].id.split("-")[1];
          console.log('currentA is '+currentA);
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

            // if there's an indication that this answer should be stored in the dictionary
            if (qContent.answers[currentA].storeAs !== ""){
              // if it's an editable button then get the button's text, otherwise use the label text
              textToStore = edInputs[j].nextSibling.contentEditable === "true" ? edInputs[j].nextSibling.innerText : qContent.answers[currentA].answerText;

              // if the storeAs key already exists in the dictionary because it's a continuation of a list
              if (qContent.answers[currentA].storeAs in edDict) {
                // copy its current value into a temp array with the new value
                // if it's already an array, just push
                if (Array.isArray(edDict[qContent.answers[currentA].storeAs])){ // checks if array - broken?
                  edDict[qContent.answers[currentA].storeAs].push(textToStore);
                } else {
                  // if not then add values to create an array
                  temp = [edDict[qContent.answers[currentA].storeAs], textToStore];
                  // then assign this temp array back to the key, overwriting the old value
                  edDict[qContent.answers[currentA].storeAs] = temp;
                }
              } else {
                // add the new key and value
                edDict[qContent.answers[currentA].storeAs] = textToStore;
              }

            } else {
              console.log('No dictionary key found.');
            }

            edAnswers = storeThisA(edAnswers, currentQ, currentA);


          } else if (edInputs[j].type === "text" && edInputs[j].value !== "") { // check for text in fields

            // check if the pre-written value or user inputted text should be stored
            if (qContent.answers[currentA].storeAs !== ""){

              // if the storeAs key already exists in the dictionary because it's a continuation of a list
              if (qContent.answers[currentA].storeAs in edDict) {
                // copy its current value into a temp array with the new value
                // if it's already an array, just push
                if (Array.isArray(edDict[qContent.answers[currentA].storeAs])){ // checks if array - broken?
                  edDict[qContent.answers[currentA].storeAs].push(edInputs[j].value);
                } else {
                  // if not then add values to create an array
                  temp = [edDict[qContent.answers[currentA].storeAs], edInputs[j].value];
                  // then assign this temp array back to the key, overwriting the old value
                  edDict[qContent.answers[currentA].storeAs] = temp;
                }
              } else {
                // add the new key and value
                edDict[qContent.answers[currentA].storeAs] = edInputs[j].value;
              }

            } else {
              console.log('No dictionary key found.');
            }

            // then push currentQ, answer ID and inputted value to edAnswers
            // push the text value object to the storage
            edAnswers = storeThisA(edAnswers, currentQ, currentA);

          }
        } // end of for loop
      } // end of inputs section

      // if textareas were collected
      if (edBoxes.length > 0) {
        console.log(edBoxes);
        // grab the question number from the first input's ID
        currentQ = edBoxes[0].id.split("-")[0];
        // for each of the boxes this question has
        for (var k = 0; k > edBoxes.length; k++){
          // get the answer number from the input's ID
          // use it to look up the answer in the json

          // if the box contains text
          if (edBoxes[k].value.length > 0){

            // check for storeAs
            // push it to edDict

            // then push currentQ, answer ID and inputted value to edAnswers

          }
        }
      }
      console.log(edDict);
      console.log(edAnswers);
      console.log(currentState.answers);
      // remove it and hide that question
      questions[i].classList.remove("showAllQs");
    } else {
      console.log('question is not visible');
      // make the question visible
      questions[i].classList.add("showAllQs");
    }
  }

  // if the buttons are disabled, enable them, otherwise disable them
  document.getElementById('previewPolicy').disabled === true ? document.getElementById('previewPolicy').disabled = false : document.getElementById('previewPolicy').disabled = true;
  document.getElementById('submitAnswers').disabled === true ? document.getElementById('submitAnswers').disabled = false : document.getElementById('submitAnswers').disabled = true;


}

function whichSection(q){
  switch (true) {
    case q < 9:
      return 0;
    case q < 14:
      return 1;
    case q < 21:
      return 2;
    case q < 27:
      return 3;
    case q < 34:
      return 4;
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
