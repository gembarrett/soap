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
  // get question container
  var qRef = document.getElementById(identifier);
  var answers = getInput(qRef);
  var removeQ = [];
  var includeQ = [];
  var qId = identifier.split("q")[1];
  // TODO work out how to get the aId from element here

  // if there are answers - is this check necessary?
  // if (answers.length > 0) {
    // if it's the question where we get the org name
    if (currentQuestion === 0) {
      orgName = answers[0];
      console.log("this is the org name:" + answers[0]);
    } else {

      // for each of the answers
      for (var j = 0; j < answers.length; j++) {
        // all of these ifs need to be refactored
        if (answers[j]) {
          parseAnswer(qId, answers[j]);

          handleImpact(qId, j, removeQ, includeQ);

          if (questions[qId].answers[aId].policyEntry !== "" ) {
            updatePolicy(questions[qId].answers[aId].policyEntry);
          }
        } else {
          // currently show the policy but this needs to show the final page
          if (policyText !== []) {
            var policyContainer = templates.policyTemplate();
            // show policy content
            // TODO change the url as well as page contents
            console.log('show the policy!');
            console.log(policyRefs);

            utils.render('page', policyContainer);
          } else {
            alert('no policy available!');
          }
        }
      }

    }

    // if it's the first question, add the overlay
    if (currentQuestion === 0) {
      // use this function to add the overlay to the questions page
      injectOverlay();
    }

    updateTheQ(removeQ, includeQ);

    toggleQuestions(qRef);

  // } else {
  //   // display error to user
  //   console.log("there are no answers stored!");
  // }
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
  console.log("questions Q:" + questionQueue);

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
    console.log(questionQueue[currentQuestion]);
    // show new currentQuestion
    // apply new class of current
    var nextQ = document.getElementById(questionQueue[currentQuestion]);

    nextQ.classList.add("current");
  } else {
    console.log('out of questions!');
  }

}

function getInput(el) {
  var answerStore = [];
  // get input fields from the element
  // for each of the elements in that question group
  for (var i = 0; i < el.childNodes.length; i++) {
    // if the element is an input
    // maybe replace with getElementBySelector here
    if (el.childNodes[i].childNodes[0].tagName === "INPUT") {
      var thisInput = el.childNodes[i].childNodes[0];
      // and if the checkboxes or radio buttons are checked
      if (thisInput.checked) {
        // make a note of which ones
        answerStore.push(thisInput.id);
      } else if (thisInput.type === "text") {
        // or if it's a textbox then get the text
        answerStore.push(thisInput.value);
      }
    } else {
      console.log(el.childNodes[i].tagName + " is not an input field");
    }
  }
  // if there are answers in storage then return them
  if (answerStore.length > 0) {
    return answerStore;
  } else {
    // if none of that is true then return false
    return true; // for testing purposes
    //return false;
  }
}
