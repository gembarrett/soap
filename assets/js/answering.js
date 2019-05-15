// this holds the questions and selected answers
// each entry requires the question id, the answer id
var policyRefs = [];

// question currently shown
var currentQuestion = 0;

// // this should be built and changed as the user progresses
var questionQueue = [];

var orgName;

// loop through currentQuestion-[i]-answer
// all of this should be split up
function handleSubmit() {
  // get question identifier
  var identifier = questionQueue[currentQuestion];
  console.log('the identifier is '+identifier);
  // get question container
  var qRef = document.getElementById(identifier);
  console.log(qRef);
  var removeQ = [];
  var includeQ = [];
  var qId = identifier.split("q")[1];
  var answers = getInput(qRef, qId);
  console.log(answers);
  // TODO work out how to get the aId from element here

  // for each of the answers
  for (var j = 0; j < answers.length; j++) {
    // if (answers[j]) {
    // parseAnswer(qId, answers[j]);
    console.log(answers[j]);
    handleImpact(qId, j, removeQ, includeQ);
  }

  // if (policyText !== []) {
  //   // currently show the policy but this needs to show the final page
  //     var policyContainer = templates.policyTemplate();
  //     console.log('end of process!');
  //     // show policy content
  //     // TODO change the url as well as page contents
  //     utils.render('page', policyContainer);
  //   }

  // if it's the first question, add the overlay
  if (currentQuestion === 0) {
    // use this function to add the overlay to the questions page
    injectOverlay();
  }

  updateTheQ(removeQ, includeQ);
  toggleQuestions(qRef);

}


function updateTheQ(exc, inc) {
  // remove all the exclusions from the queue
  if (exc != "") {
    // for each question to be removed
    for (var k = 0; k < exc.length; k++) {
      // is the number in the queue?
      // update questionQueue
      var index = questionQueue.indexOf("q"+exc[k]);
      // if it's in the queue, remove it
      if(index != -1) {
        questionQueue.splice(index, 1);
      }
    }
  }
  // add all the inclusions to the queue, if they aren't already there
  if (inc != "") {
    // for each question to be removed
    for (var m = 0; m < inc.length; m++) {
      // is the number in the queue?
      // update questionQueue
      var index = questionQueue.indexOf(inc[m][0]);
      // if it's not in the queue, add it
      if(index === -1) {
        questionQueue.splice(inc[m][0], 0, inc[m][0]);
      } else {
        console.log('element already in queue');
      }
    }
  }

  // sort queue to ensure continuity
  return questionQueue.sort();
}

// TODO: change these classList references to toggle
function toggleQuestions(ref) {
  // hide current question
  // remove class of current
  ref.classList.remove("current");

  // change currentQuestion
  currentQuestion++;

  // if there is a next question
  if (questionQueue[currentQuestion]) {
    // show new currentQuestion
    // apply new class of current
    var nextQ = document.getElementById(questionQueue[currentQuestion]);
    nextQ.classList.add("current");
  } else {
    // currently show the policy but this needs to show the final page
    var policyContainer = templates.policyTemplate();
    console.log('end of process!');
    // TODO change the url as well as page contents
    utils.render('page', policyContainer);
  }

}

// this function returns an array of the selected or typed answers
function getInput(el, qId) {
  console.log(el);
  console.log('the qId is' + qId);
  var tempRefs =[];
  // get input fields from the element
  // for each of the elements in that question group
  for (var i = 0; i < el.childNodes.length; i++) {
    var input = el.childNodes[i].childNodes[0];
    // if the element is an input
    // maybe replace with getElementBySelector here
    // if the element is an input field and is checked or a used textbox
    if (input.tagName === "INPUT") {
      // if it's a checkbox
      if (input.checked) {
        policyRefs.push({
          "q": qId,
          "a": input.id
        });
      }
      // if it's a textbox
      else if (input.type === "text" && input.value !== "") {
        policyRefs.push({
          "q": qId,
          "a": input.id,
          "t": input.value
        });
      }
      tempRefs.push({
        "q": qId,
        "a": input.id,
      });
    } else {
      console.log(el.childNodes[i].tagName + " is not an input field");
    }
  }
  return tempRefs;
}
