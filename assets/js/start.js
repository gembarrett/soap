// // initialise with the first section, update at the end of each section
// var currentS, currentQ = 0;
// console.log('start - initialising');
//
// // this will be a multidimentional array holding section, question and answer IDs and user input
// var answerRefs = [];
// /////////////////////////////////////////////////
// ////SECTION:0///////SECTION:0///////SECTION:1////
// ///////Q:1/////////////Q:2////////////Q:1////////
// /////ANSWER:1////////ANSWER:0//////ANSWER:"OTF"//
// /////ANSWER:3/////ANSWER:"Trello"////////////////
// /////////////////////////////////////////////////
//
// // create the queue here, add/remove elements after each question, add new array at start of each section
// var questionQueue = [];
//
// // get the section0 data
// // get the length of the array
// // add the numbers individually to the question Queue - different order on >1
// // for each item, check if it's a question
// // if it isn't then push all the paragraphs to the first slot of temporary array
// // if it is then push section id, question id, question text, answer refs, answer text and tips
//
//

var thisSection = section0;
console.log('building - initialising thisSection');
var policyText = [];
var appendixText = [];
var policyRefs = [];
var currentQuestion = 0;
var questionQueue = [];
var orgName;
var contact = [];

function handleSubmit() {
  console.log('answering - handleSubmit');
  var identifier = questionQueue[currentQuestion];
  var qRef = document.getElementById(identifier);
  var removeQ = [];
  var includeQ = [];
  var qId = parseInt(identifier.split("q")[1]) + 1;
  var answers = getInput(qRef, qId);
  for (var j = 0; j < answers.length; j++) {
    handleImpact(qId, j, removeQ, includeQ);
  }
  if (currentQuestion === 0) {
    injectOverlay();
  }
  updateTheQ(removeQ, includeQ);
  toggleQuestions(qRef);
}
function getInput(el, qId) {
  console.log('answering - getInput');
  var tempRefs =[];
  for (var i = 0; i < el.childNodes.length; i++) {
    var input = el.childNodes[i].childNodes[0];
    if (input.tagName === "INPUT") {
      var answerID = input.id.split("-")[1];
      if (input.checked) {
        policyRefs.push({
          "q": qId,
          "a": input.id
        });
        tempRefs.push({
          "q": qId,
          "a": input.id,
        });
        if (thisSection[qId].answers[answerID].policyEntry !== "" ) {
          updatePolicy(thisSection[qId].answers[answerID].policyEntry);
        }
      }
      else if (input.type === "text" && input.value !== "") {
        var answerID = input.id.split("-")[1];
        checkValue(qId, input.id, input.value);
        policyRefs.push({
          "q": qId,
          "a": input.id,
          "t": input.value
        });
        tempRefs.push({
          "q": qId,
          "a": input.id,
        });
        if (thisSection[qId].answers[answerID].policyEntry !== "" ) {
          updatePolicy(thisSection[qId].answers[answerID].policyEntry);
        }
      }
    }
  }
  return tempRefs;
}

function checkValue(question, answer, val) {
    console.log('building - checkValue');
    var temp = answer.split("-")[1];
    switch (question) {
      case "1":
        orgName = val;
        thisSection[question].answers[temp].policyEntry += orgName;
        break;
      case "2":
        contact.push({
          "answer":answer,
          "value":val
        });
        thisSection[question].answers[temp].policyEntry += val;
        break;
      default:
    }
}

function updatePolicy(entry) {
  entry = '<p>' + entry + '</p>';
  policyText.push(entry);
}

function handleImpact(thisQ, thisA, exc, inc) {
  if (thisSection[thisQ].answers[thisA].excludes[0]) {
    exc.push(thisSection[thisQ].answers[thisA].excludes);
  }
  if (thisSection[thisQ].answers[thisA].includes[0]) {
    inc.push(thisSection[thisQ].answers[thisA].includes);
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
      var index = questionQueue.indexOf("q"+exc[k]);
      if(index != -1) {
        questionQueue.splice(index, 1);
      }
    }
  }
  if (inc != "") {
    for (var m = 0; m < inc.length; m++) {
      var index = questionQueue.indexOf(inc[m][0]);
      if(index === -1) {
        questionQueue.splice(inc[m][0], 0, inc[m][0]);
      } else {
        console.log('element already in queue');
      }
    }
  }
  return questionQueue.sort();
}

function toggleQuestions(ref) {
  console.log('answering - toggleQuestions');
  ref.classList.remove("current");
  currentQuestion++;
  if (questionQueue[currentQuestion]) {
    var nextQ = document.getElementById(questionQueue[currentQuestion]);
    nextQ.classList.add("current");
  } else {
    var policyContainer = templates.policyTemplate();
    console.log('end of process!');
    utils.render('page', policyContainer);
  }
}
