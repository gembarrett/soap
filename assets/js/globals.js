// this holds the questions and selected answers
// each entry requires the question id, the answer id
var policyRefs = [];

// question currently shown
var currentQuestion = 0;

// // this should be built and changed as the user progresses
var questionQueue = [];

// these are arrays of text pieces
// this one is compiled on the fly when Preview button is clicked and at end
var policyText = [];

// this one is compiled at the end of the process
var appendixText;

var orgName;

// loop through currentQuestion-[i]-answer
// all of this should be split up
function handleSubmit() {
  // get question identifier
  var identifier = questionQueue[currentQuestion];
  console.log("clicked question with id "+identifier);
  // get question container
  var qRef = document.getElementById(identifier);
  // if there is valid input - but how do I access the answer storage?
  var answers = getInput(qRef);
  var removeQ = [];
  var includeQ = [];

  if (answers.length > 0) {
    // if there's only 1 element then it's probably a textbox
    if (answers.length === 1) {
      // currently just assume it's the org name but needs future fix
      orgName = answers[0];
      console.log(orgName);
    } else {
      // for each of the answers
      for (var j = 0; j < answers.length; j++) {
        getIDs(answers[j]);

        // if there are exclusions
        if (questions[qId].answers[aId].excludes[0]) {
          // get the excluded question refs
          removeQ.push(questions[qId].answers[aId].excludes);
        }
        // if there are inclusions
        if (questions[qId].answers[aId].includes[0]) {
          // get included questions based on answers
          includeQ.push(questions[qId].answers[aId].includes);
        }
      }

    }

    updateTheQ(removeQ, includeQ);

    toggleQuestions(qRef);

  } else {
    // display error to user
  }
}

function getIDs(thisAnswer) {
  // first get the question id
  temp = thisAnswer.split("-");
  temp[0] = temp[0].split("q");
  qId = temp[0][1];
  // then get the answer number
  aId = temp[1];
  // store answer in array
  policyRefs.push({
      "q": qId,
      "a": aId,
  });
  return policyRefs;
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

function toggleQuestions(ref) {
  // hide current question
  // remove class of current
  ref.classList.remove("current");

  console.log("current question is "+currentQuestion);

  // change currentQuestion
  currentQuestion++;

  // show new currentQuestion
  // apply new class of current
  var nextQ = document.getElementById(questionQueue[currentQuestion]);
  console.log("next question is "+questionQueue[currentQuestion]);

  nextQ.classList.add("current");

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
    console.log(answerStore);
    return answerStore;
  } else {
    // if none of that is true then return false
    return true; // for testing purposes
    //return false;
  }
}
