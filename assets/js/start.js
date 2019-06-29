// initialise counters with the first section and question, this is updated at the end of questions and sections
console.log('start - initialising');

//  list of sections
var sections = [section0];
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
  // which answers have been given for which questions?
  answers: []
}


// delete and replace
var policyText = [];
// delete and replace
var appendixText = [];
// replace updatePolicy and policyText with this function that compiles the policy based on what's in the answer storage at that time
function compilePolicy() {
    // create local policy variable
    // for each of the answers in currentState
    // use the question id to grab the policyContent
    // use the answer reference to grab the policyEntry
    // add the two to the policy text
    // return the compiled policy to injectOverlay or the end of the process
}

// replace checkValue with this function that takes each answer and, if there's a storeAs value, stores it
function checkForStorage() {
  // use the passed answer ref to check for a storeAs value
  // store the value *somewhere*
}

// this is the function that's called when a user submits an answer - could the question ID be passed through?
function handleSubmit() {
  console.log('answering - handleSubmit');
  // this gets the current question id e.g. q0
  var identifier = questionsList[currentState.questionC];
  // uses the identifier to get the current form element
  var qRef = document.getElementById(identifier);
  // not sure about these here
  var removeQ = [];
  var includeQ = [];
  // remove the q from the question id
  var qId = parseInt(identifier.split("q")[1]) + 1;
  // use the form element and the question ID to get the inputs
  var answers = getInput(qRef, qId);
  for (var j = 0; j < answers.length; j++) {
    handleImpact(qId, j, removeQ, includeQ);
  }
  if (currentState.questionC === 0) {
    injectOverlay();
  }
  updateTheQ(removeQ, includeQ);
  toggleQuestions(qRef);
}

// // this will be a multidimentional array holding section, question and answer IDs and user input
// var answerRefs = [];
// /////////////////////////////////////////////////
// ////SECTION:0///////SECTION:0///////SECTION:1////
// ///////Q:1/////////////Q:2////////////Q:1////////
// /////ANSWER:1////////ANSWER:0//////ANSWER:"OTF"//
// /////ANSWER:3/////ANSWER:"Trello"////////////////
// /////////////////////////////////////////////////


function getInput(el, qId) {
  console.log('answering - getInput');
  // not sure this is necessary
  var tempRefs =[];
  // for every element in the form
  for (var i = 0; i < el.childNodes.length; i++) {
    var input = el.childNodes[i].childNodes[0];
    // get the inputs
    if (input.tagName === "INPUT") {
      // split up the input's id to get the number
      var answerID = input.id.split("-")[1];
      // this could be a good point at which to check for storeAs values
      // if the input is checked
      if (input.checked) {
        // push the question and answer object to the currentState
        currentState.answers.push({
          "q": qId,
          "a": answerID
        });
        // not sure we need to push to this other array as well
        tempRefs.push({
          "q": qId,
          "a": input.id,
        });
      }
      // if the input is a textbox containing value
      else if (input.type === "text" && input.value !== "") {
        // again get the input's id number - fix this repetition
        var answerID = input.id.split("-")[1];
        // check the value for stored things - do this check better
        // var storage = currentState.sectionQ[qId].answers[answerID].storeAs;
        // checkValue(qId, input.id, input.value);
        // push the question and answer and text value object to the currentState
        currentState.answers.push({
          "q": qId,
          "a": answerID,
          "t": input.value
        });
        // again, not sure why we need to push to this other array too
        tempRefs.push({
          "q": qId,
          "a": input.id,
        });
        // replace with compilePolicy
        // if (currentState.sectionQ[qId].answers[answerID].policyEntry !== "" ) {
        //   updatePolicy(currentState.sectionQ[qId].answers[answerID].policyEntry);
        // }
      }
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
// replace with compilePolicy function
// function updatePolicy(entry) {
//   entry = '<p>' + entry + '</p>';
//   policyText.push(entry);
// }

function handleImpact(thisQ, thisA, exc, inc) {
  if (currentState.sectionQ[thisQ].answers[thisA].excludes[0]) {
    exc.push(currentState.sectionQ[thisQ].answers[thisA].excludes);
  }
  if (currentState.sectionQ[thisQ].answers[thisA].includes[0]) {
    inc.push(currentState.sectionQ[thisQ].answers[thisA].includes);
  }
}

function injectOverlay() {
  console.log('building - injectOverlay');
  var parent = document.querySelector(".container");
  parent.insertAdjacentHTML('afterend', '<div id="preview" class="modal closed"><button id="closePreview">X</button><div id="inner" class="modalScrollbox"><h3>Policy Preview</h3></div></div><div id="overlay" class="modalOverlay closed"></div>');
  var modal = document.querySelector("#preview");
  var scrollbox = document.querySelector("#inner");
  var overlay = document.querySelector("#overlay");
  var close = document.querySelector("#closePreview");
  var open = document.querySelector("#previewPolicy");
  close.addEventListener("click", function() {
    modal.classList.toggle("closed");
    overlay.classList.toggle("closed");
  });
  open.addEventListener("click", function() {
    scrollbox.innerHTML = policyText;
    console.log(policyText);
    modal.classList.toggle("closed");
    overlay.classList.toggle("closed");
  });
}


function updateTheQ(exc, inc) {
  console.log('answering - updateTheQ');
  if (exc != "") {
    for (var k = 0; k < exc.length; k++) {
      var index = questionsList.indexOf("q"+exc[k]);
      if(index != -1) {
        questionsList.splice(index, 1);
      }
    }
  }
  if (inc != "") {
    for (var m = 0; m < inc.length; m++) {
      var index = questionsList.indexOf(inc[m][0]);
      if(index === -1) {
        questionsList.splice(inc[m][0], 0, inc[m][0]);
      } else {
        console.log('element already in queue');
      }
    }
  }
  return questionsList.sort();
}

function toggleQuestions(ref) {
  console.log('answering - toggleQuestions');
  ref.classList.remove("current");

  // this updating part could go in its own function
  currentState.questionC++;
  tmp = currentState.questionQ.split("q")[1];
  tmp = parseInt(tmp) + 1;
  currentState.questionQ = 'q' + tmp;
  // at this point it's worth checking whether the question is on the exclusions list

  if (questionsList[currentState.questionC]) {
    var nextQ = document.getElementById(questionsList[currentState.questionC]);
    nextQ.classList.add("current");
  } else {
    var policyContainer = templates.policyTemplate();
    console.log('end of process!');
    utils.render('page', policyContainer);
  }
}
