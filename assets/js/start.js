// initialise counters with the first section and question, this is updated at the end of questions and sections
console.log('start - initialising');

//  list of sections
var sections = [section0, section1, section2];
// loop through and create list of questions
var questionsList = [];
// for each of the sections
for (var i = 0; i < sections.length; i++) {
  // get the section data
  tmpContent = sections[i];
  // for each of the questions in that section
  for (var j = 0; j < tmpContent.length; j++) {
    // push the id to the queue
    questionsList.push(tmpContent[j].id);
  }
}

// set up progress tracking
var currentState = {
  // which number in the section queue are we?
  sectionC: 0,
  // which section's data is in use?
  sectionQ: sections[0],
  // which number in the question queue are we?
  questionC: 0,
  // which question's data is in use?
  questionQ: questionsList[0],
  // position in section
  questionP: 0,
  // which answers have been given for which questions?
  answers: [],
  // list of exclusions, updated on every submission and checked on every question load
  exclusions: []
}

// delete and replace
var policyText = [];
// delete and replace
var appendixText = [];
// replace updatePolicy and policyText with this function that compiles the policy based on what's in the answer storage at that time
function compilePolicy() {
    // create local policy variable
    var tempPolicy = [];
    // for each of the answers in currentState
    for (var i = 0; i < currentState.answers.length; i++) {

      // use the question id to grab the policyContent
      qRef = currentState.answers[i].q;
      aRef = currentState.answers[i].a;
      var thisQ = 'q'+qRef;
      var specific = "";
      var general = "";
      var answer = "";
      prev = i > 0 ? i - 1 : "";
      // if there's a previous question and it's the same as the current question
      if ((prev !== "") && (qRef === currentState.answers[prev].q)) {
        // make a note to skip the policyContent
        var sameQ = true;
      }

      // check each section for the question with the right id
      for (var j = 0; j < sections.length; j++) {
        // search for question with correct id
        var found = sections[j].find(ans => ans.id === thisQ);
        // when it's found, check for policyContent
        if (found) {
          // ring the bell, we got ourselves a winner!
          // this doesn't seem to be stopping the loop
          j === 10;
          // check if there's a general policyContent to grab
          if ((!sameQ) && (found.policyContent !== 'undefined')) {
            general = found.policyContent + '<br />';
          }
          // use the answer reference to grab the policyEntry, if it exists
          if (found.answers[currentState.answers[i].a].policyEntry) {
            specific = found.answers[currentState.answers[i].a].policyEntry + '<br />';
          }
          // if there's a text entry then get the inputted text
          if (currentState.answers[i].t) {
            answer = currentState.answers[i].t + '<br />';
          } else {
            // else get the answer's answerText
            answer = found.answers[currentState.answers[i].a].answerText + '<br />';
          }
        }
      }
      // if an answer has been found, push it to the array
      if (answer) {
        tempPolicy.push(general, specific, answer);
      }
    }
    // return the compiled policy to injectOverlay or the end of the process
    return tempPolicy;
    // is injectOverlay the best place to return it if that's for a onetime injection of html?
}

// replace checkValue with this function that takes each answer and, if there's a storeAs value, stores it
function checkForStorage() {
  // use the passed answer ref to check for a storeAs value
  // given this answer reference, find the answer in the content
  // if the answer has a storeAs value,
  // store the value in a global variable
}


// this is the function that's called when a user submits an answer - could the question ID be passed through?
function handleSubmit() {
  console.log('answering - handleSubmit');

  // search for the currently shown element
  var match = document.querySelector('.current');
  // this gets the current question id number e.g. q0
  var id = currentState.questionQ.split('q')[1];
  // use the form element and the question id to get the inputs
  // maybe also grab the section id here
  var answers = getInput(match, id);
  console.log(answers);

  // get the preview button
  prev = document.querySelector('#previewPolicy');
  // if there's at least one answer returned and the button is disabled
  if ((answers.length > 0) && prev.disabled){
    prev.removeAttribute('disabled');
  }

  // add the preview overlay after everything else has loaded
  // // TODO: hide the Preview button until after the overlay is in place
  if (parseInt(id) === 0) {
    injectOverlay();
  }

  // if this question has answers
  if (currentState.sectionQ[currentState.questionP].answers) {
    // checks each answer for exclusions - could be done better
    for (var j = 0; j < currentState.sectionQ[currentState.questionP].answers.length; j++) {
        // if this answer excludes other questions
      if (currentState.sectionQ[currentState.questionP].answers[j].excludes[0]) {
        // push those exclusions to a list
        currentState.exclusions.push(currentState.sectionQ[currentState.questionP].answers[j].excludes);
      }
    }
  }

  console.log('answering - toggleQuestions');

  // this hides the current question,
  match.classList.remove("current");

  // this increases the counters
  currentState.questionC++;

  // increase the question id number
  id++;
  currentState.questionQ = 'q' + id;

  // increase position in the array
  currentState.questionP++;

  var el = document.querySelector('progress');
  el.value++;
  // looks the next question in the queue up,
  // checks it's not on the exclusions list
  // if it is then skip to the next question and check again
  // if it isn't excluded then show it

  // if the id is not beyond the total number of questions for the current section
  // should this be questionp instead of id?
  if (currentState.questionP < currentState.sectionQ.length) {
    console.log('moving to next question!');
    // grab the next question's element and add class of current
    var nextQ = document.getElementById(currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if the sections have not run out (using the counter because it isn't changed)
  // consider whether I want this to happen here, before the last q, or after it
  else if (currentState.sectionC < sections.length) {
    console.log('moving to next section!');
    // increase the section counter
    currentState.sectionC++;
    // reset the position counter
    currentState.questionP = 0;
    // get the next section
    currentState.sectionQ = sections[currentState.sectionC];
    // as before, grab the next question's element and add class of current
    var nextQ = document.getElementById(currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if we're out of sections then show the policy
  else {
    var policyContainer = templates.policyTemplate();
    console.log('end of process!');
    utils.render('page', policyContainer);
  }

}

function getInput(el, qId) {
  console.log('answering - getInput');

  // search el for inputs
  if (el.getElementsByTagName('input')) {
    var inputs = el.getElementsByTagName('input');
  }
  console.log(inputs);
  // for every input in the form
  for (var i = 0; i < inputs.length; i++) {
    // if it's a checked checkbox
    if ((inputs[i].type === "checkbox") && (inputs[i].checked)) {
      // split up the input's id to get the number
      var answerID = inputs[i].id.split("-")[1];
      // this could be a good point at which to check for storeAs values
        // push the question and answer object to the currentState
        currentState.answers.push({
          s: currentState.sectionC,
          q: qId,
          a: answerID
        });
      }
      // if the input is a textbox containing value
      else if (inputs[i].type === "text" && inputs[i].value !== "") {
        // again get the input's id number - fix this repetition
        var answerID = inputs[i].id.split("-")[1];
        // check the value for stored things - do this check better
        // var storage = currentState.sectionQ[qId].answers[answerID].storeAs;
        // checkValue(qId, input.id, input.value);
        // push the question and answer and text value object to the currentState
        currentState.answers.push({
          s: currentState.sectionC,
          q: qId,
          a: answerID,
          t: inputs[i].value
        });
        // replace with compilePolicy
        // if (currentState.sectionQ[qId].answers[answerID].policyEntry !== "" ) {
        //   updatePolicy(currentState.sectionQ[qId].answers[answerID].policyEntry);
        // }
      }
    }
  return currentState.answers;
}

// instead of this, use the storeAs value
// var orgName;
// var contact = [];
// // e.g. if this answer has a storeAs value, then add that to the answer storage
// function checkValue(question, answer, val) {
//     console.log('building - checkValue');
//     var temp = answer.split("-")[1];
//     switch (question) {
//       case "1":
//         orgName = val;
//         currentState.sectionQ[question].answers[temp].policyEntry += orgName;
//         break;
//       case "2":
//         contact.push({
//           "answer":answer,
//           "value":val
//         });
//         currentState.sectionQ[question].answers[temp].policyEntry += val;
//         break;
//       default:
//     }
// }


function injectOverlay() {
  console.log('building - injectOverlay');
  var parent = document.querySelector("#page");
  parent.insertAdjacentHTML('afterend', '<div id="preview" class="modal closed"><button id="closePreview">X</button><div id="inner" class="modalScrollbox"><h3>Policy Preview</h3></div></div><div id="overlay" class="modalOverlay closed"></div>');
  var modal = document.querySelector("#preview");
  var scrollbox = document.querySelector("#inner");
  var overlay = document.querySelector("#overlay");
  var close = document.querySelector("#closePreview");
  var open = document.querySelector("#previewPolicy");
  // TODO: make the repeated lines a function
  close.addEventListener("click", function() {
    togglePreview(modal, overlay);
  });
  overlay.addEventListener("click", function() {
    togglePreview(modal, overlay);
  });

  open.addEventListener("click", function() {
    policyText = compilePolicy();
    scrollbox.innerHTML = policyText;
    togglePreview(modal, overlay);
  });
}

function toggleInfo(id) {
  el = ".panel-"+id;
  panel = document.querySelector(el);
  panel.classList.toggle("closed");
  document.querySelector("#info-trigger").classList.toggle("highlight");
}

function togglePreview(m, o) {
  m.classList.toggle("closed");
  o.classList.toggle("closed");
}

function activePage(pg) {
  document.getElementById('co').classList.add('active');
  document.getElementById('bu').classList.remove('active');
  document.getElementById('bg').classList.remove('active');
}

function formatArray(arr, storage) {
  if (Array.isArray([arr])) {
    for (var i=0; i<arr.length; i++) {
      storage += '<p>'+arr[i] + '</p>';
    }
    return storage;
  }
}

// when the first answer is pushed to the currentState.aswers array, then do previewButton.removeAttr("disabled")
