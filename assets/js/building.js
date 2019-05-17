// these are arrays of text pieces
// this one is compiled on the fly when Preview button is clicked and at end
var policyText = [];

// this one is compiled at the end of the process
var appendixText;

function updatePolicy(entry) {
  entry = '<p>' + entry + '</p>';
  policyText.push(entry);
  console.log(policyText);
}

function injectOverlay() {
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

// function parseAnswer (thisQ, thisA) {
//   // if it's a checkbox answer
//   if (thisA.includes("-answer")) {
//     temp = thisA.split("-");
//     // get the answer number
//     aId = temp[1];
//     // store answer in array
//     policyRefs.push({
//         "q": thisQ,
//         "a": aId,
//     });
//   } else {
//     // handle it like a textbox
//     // TODO still need to get the ID of the answer though
//     // can this make better use of answerStore?
//     policyRefs.push({
//       "q": thisQ,
//       "a": thisA
//     });
//   }
//   console.log(policyRefs);
//   return policyRefs;
// }

function handleImpact(thisQ, thisA, exc, inc) {
  console.log("examining question " + thisQ);
  console.log("examining answer " + thisA);

  // if there are exclusions
  if (questions[thisQ].answers[thisA].excludes[0]) {
    // get the excluded question refs
    exc.push(questions[thisQ].answers[thisA].excludes);
  }
  // if there are inclusions
  if (questions[thisQ].answers[thisA].includes[0]) {
    // get included questions based on answers
    inc.push(questions[thisQ].answers[thisA].includes);
  }
  // move this next statement into a full function for building the policy
  // if there is policy text
  if (questions[thisQ].answers[thisA].policyEntry !== "" ) {
    updatePolicy(questions[thisQ].answers[thisA].policyEntry);
  }

}

// this function checks whether a value is needed for later and updates the global variable
function checkValue(question, answer, val) {
    var temp = answer.split("-")[1];
    switch (question) {
      case "0":
        orgName = val;
        // TODO change this to keep a backup of the original text in case user goes back to change
        questions[question].answers[temp].policyEntry += orgName;
        break;
      case "1":
        contact.push({
          "answer":answer,
          "value":val
        });
        questions[question].answers[temp].policyEntry += val;
        break;
      default:
    }
}
