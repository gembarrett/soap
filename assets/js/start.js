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
// for storing the storeAs names and values
var dict = {};


// delete and replace
var policyText = [];

// delete and replace
var appendixText = [];
// function that compiles the policy based on what's in the answer storage at that time
function compilePolicy() {
    // create local policy variable
    var tempPolicy = [];
    // for each of the stored answers
    for (var i = 0; i < currentState.answers.length; i++) {
      // grab the question and answer
      qRef = currentState.answers[i].q;
      aRef = currentState.answers[i].a;
      // set up current question, general content, specific content and answer text storage
      var thisQ = 'q'+qRef;
      var general = "";
      var specific = "";
      var answer = "";

      // check each section for the question with the right id
      for (var j = 0; j < sections.length; j++) {
        // search for question with correct id
        var found = sections[j].find(ans => ans.id === thisQ);
        // when it's found, check for policyContent
        if (found) {
          // ring the bell, we got ourselves a winner!

          j === 10;
          // check if there's a general policyContent to grab
          if (found.policyContent !== "") {
            general = found.policyContent;
            console.log(general);
            tempPolicy.push(general);
          }
          // use the answer reference to grab the policyEntry, if it exists
          if (found.answers[currentState.answers[i].a].policyEntry) {
            specific = found.answers[currentState.answers[i].a].policyEntry;
            tempPolicy.push(specific);
          }
        }
      }
    }
    // replace all temporary words with values from dict
    // return the compiled policy to injectOverlay or the end of the process
    return replaceTemp(tempPolicy);
    // is injectOverlay the best place to return it if that's for a onetime injection of html?
}

function replaceTemp(policyArr) {
  var editedArray = [];
  // for each entry in the array
  for (var i=0; i<policyArr.length; i++) {
    var newString = policyArr[i];
    // for each of the stored keys
    for (var key in dict) {
      var regexKey = key.replace('[', '\\[').replace(']', '\\]');
      var regex = new RegExp(regexKey, 'gi');
      // replace any matches and put them in a new string
      newString = newString.replace(regex, dict[key]);
      // add this new string to the array
    }
    editedArray.push(newString);
  }

  // join all the edited array entries together into a single string
  editedArray = editedArray.join("\n");
  return editedArray;
}


// this is the function that's called when a user submits an answer - could the question ID be passed through?
function handleSubmit() {
  console.log(currentState.questionQ + ' answering - handleSubmit');

  // search for the currently shown element
  var match = document.querySelector('.current');
  // this gets the current question id number e.g. q0
  var id = currentState.questionQ.split('q')[1];
  // use the form element and the question id to get the inputs
  // maybe also grab the section id here
  var answers = getInput(match, id);

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

  // if the position is not beyond the total number of questions for the current section
  if (currentState.questionP < currentState.sectionQ.length) {
    console.log('moving to next question!');
    // grab the next question's element and add class of current
    var nextQ = document.getElementById(currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if the sections have not run out (using the counter because it isn't changed)
  // consider whether I want this to happen here, before the last q, or after it
  else if (currentState.sectionC < sections.length-1) {
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
  // for every input in the form
  for (var i = 0; i < inputs.length; i++) {
    // split up the input's id to get the number
    var answerID = inputs[i].id.split("-")[1];

    // unsplit the question ID
    var tempQId = 'q'+qId;
    const result = currentState.sectionQ.find(question => question.id === tempQId);

    // if the input is a textbox containing value
    // does this work with textareas?
    if (inputs[i].type === "text" && inputs[i].value !== "") {
      // push the text value object to the currentState
      currentState.answers.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID,
        t: inputs[i].value
      });
      // store the inputted value in the dictionary
      dict[result.answers[answerID].storeAs] = inputs[i].value;
    }

    // if the input is a checked checkbox or selected radio button
    if (inputs[i].checked) {
      // if there's a storeAs value
      if (result.answers[answerID].storeAs !== "") {

        // should this check only be done with non-inputs?
        // if the storeAs key already exists in the dictionary
        if (result.answers[answerID].storeAs in dict) {
          // copy its current value into a temp array with the new value
          temp = [dict[result.answers[answerID].storeAs], result.answers[answerID].answerText];
          // then assign this temp array back to the key, overwriting the old value
          dict[result.answers[answerID].storeAs] = temp;
        } else {
          // add the new key and value
          dict[result.answers[answerID].storeAs] = result.answers[answerID].answerText;
        }
      }
      // push the question and answer object to the currentState
      currentState.answers.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID
      });
    }
  }
  return currentState.answers;
}


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
  query = '#info-trigger-'+id;
  document.querySelector(query).classList.toggle("highlight");
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

// Function to download data to a file
function downloadPolicy(type) {
    var data = policyText;
    var filename = "policyDoc";
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
