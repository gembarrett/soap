// this holds the questions and selected answers
// each entry requires the question id, the answer id
var policyRefs = [];

// this should be built and changed as the user progresses
var questionQueue = [];

// question currently shown
var currentQuestion = 0;

// these are arrays of text pieces
// this one is compiled on the fly when Preview button is clicked and at end
var policyText = [];

// this one is compiled at the end of the process
var appendixText;

// loop through currentQuestion-[i]-answer

function handleSubmit(id) {
  // get question identifier
  var identifier = "q" + id;
  // get question container
  var qRef = document.getElementById(identifier);
  // if there is valid input - but how do I access the answer storage?
  answers = getInput(qRef);
  if (answers.length > 0) {
    // store answer in array
    console.log(answers);
    // get excluded questions based on answers
    // get included questions based on answers
    // update questionQueue
    // hide current question
    // remove class of current
    // change currentQuestion
    currentQuestion++;
    // show new currentQuestion
    // apply new class of current
  } else {
    // display error to user
  }
}

function getInput(el) {
  var answerStore = [];
  // get input fields from the element
  // for each of the elements in that question group
  for (var i = 0; i < el.childNodes.length; i++) {
    // if the element is an input
    if (el.childNodes[i].tagName === "INPUT") {
      // and if the checkboxes or radio buttons are checked
      if (el.childNodes[i].checked) {
        // make a note of which ones
        answerStore.push(el.childNodes[i].id);
      // or if the textbox has contents
      // FIX: currently this isn't working
      } else if (el.childNodes[i].innerText != "") {
        // check those contents for validity
        answerStore.push(el.childNodes[i].id);
      }
    }
    // if there are answers in storage then return them
    if (answerStore.length > 0) {
      console.log(answerStore);
      return answerStore;
    } else {
      // if none of that is true then return false
      return true; // for testing purposes
      //return false;
    }
  }
}
