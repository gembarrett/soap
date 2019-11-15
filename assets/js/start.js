// initialise counters with the first section and question, this is updated at the end of questions and sections

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
var appendixText = [];


var output;


function addChangeListeners() {
  var notice = document.querySelector('.notice');
  // TODO: investigate why this is triggered on q1, rather than onclick
  notice.onclick = notice.remove();

  // grab all the form inputs
  var radios = Array.from(document.querySelectorAll('.form-el > input[type="radio"]'))
  var checks = Array.from(document.querySelectorAll('.form-el > input[type="checkbox"]'));

  var elements = Array.from(document.querySelectorAll('.form-el > input'));
  var boxes = Array.from(document.querySelectorAll('.form-el > textarea'));
  elements = elements.concat(boxes);
  for (var e = 0; e < elements.length; e++) {
    // if it's a radio or checkbox
    if ((elements[e].type === "radio") || (elements[e].type === "checkbox")){
      elements[e].addEventListener('change', toggleSkip);
    } else {
      elements[e].oninput = toggleSkip;
    }
  }
}

function updateValue(e) {
  log.textContent = e.target.value;
}

function toggleSkip(e){
  var button =  document.getElementById('submitAnswers');
  // if the box contains text and the button is currently "Skip"
  if ((e.data !== null) && (button.innerText === "Skip")){
    // change button text
    button.innerText = "Next";
    button.disabled = false;
  } else if ((e.data === null) && (button.innerText === "Next")){
    button.innerText = "Skip";
    button.disabled = true;
  }
}

function moveForward(id) {
  // this increases the counter
  currentState.questionC++;
  // start looking at the next question
  // increase the question id number
  id++;
  currentState.questionQ = 'q' + id;
  // increase position in the array
  currentState.questionP++;
  var el = document.querySelector('progress');
  el.value++;
  return id;
}

function isExcludedQ(id) {
  // start looking at the next question
  id = moveForward(id);
  // for each of the questions remaining
  for (var q = id; q < questionsList.length; q++) {
    // if the question isn't on the list
    if (currentState.exclusions.indexOf(parseInt(id)) === -1) {
      // if the question is not excluded
      // break the loop
      return false;
    } else {
      // update everything to the next question
      id = moveForward(id);
    }
  }
}

// this updates the progress bar
function updateProgressBar(){
  var el = document.querySelector('progress');
  el.value++;
}

// this is the function that's called when a user submits an answer
function handleSubmit() {
  // search for the currently shown element - question and answer
  var match = document.querySelector('.current');
  // this gets the current question id number e.g. q0
  var id = currentState.questionQ.split('q')[1];

  beforeSize = currentState.answers.length;
  // use the form element and the question id to get the inputs
  var answers = getInput(match, id);

  canProceed = true;

  // before doing anything else, check if this is a required question
  isRequired = match[0] ? match[0].required : false;
  // compare the size of answers array to find out if answers have been provided for this question
  if (id > 0){
    // have answers been provided for this question?
    noAnswers = beforeSize === answers.length ? true : false;

    // if it's required and there are no answers provided
    if (isRequired && noAnswers){
      canProceed = false;
    }

    // if there's at least one answer returned and the button is disabled
    // get the preview button
    prev = document.querySelector('#previewPolicy');
    if (!noAnswers && prev.disabled){
      prev.removeAttribute('disabled');
    }

  }

  if (canProceed){

      setUpPage(id);

      // this hides the current question,
      match.classList.remove("current");

      // go to next question
      id = isExcludedQ(id);

      // TODO reset the skip/next button here
      document.getElementById('submitAnswers').innerText = "Skip";

      nextQuestion();
      window.scrollTo(0,0);
  }
}

function setUpPage(id){
  // add the additional stuff after everything else has loaded
  if (parseInt(id) === 0) {
    injectOverlay();
    // sneaking this in here so it's done when textboxes exist
    resizingBoxes();
    addChangeListeners();
  }
}

function nextQuestion(){
  // if the position is not beyond the total number of questions for the current section
  if (currentState.questionP < currentState.sectionQ.length) {
    // grab the next question's element and add class of current
    var nextQ = document.getElementById(currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if the sections have not run out (using the counter because it isn't changed)
  // consider whether I want this to happen here, before the last q, or after it
  else if (currentState.sectionC < sections.length-1) {
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
    // if there are answers
    if (currentState.answers.length > 0) {
      var policyContainer = templates.policyTemplate();
      utils.render('page', policyContainer);
    } else {
      if (window.confirm("Oh no! It seems you haven't answered enough questions to build a policy. Start again?")) {
        location.reload(false);
      } else {
        window.location.href = "/";
      }
    }
  }
  if (nextQ){
    // if there's a next question and it's required
    if (nextQ[0] && nextQ[0].required){
      // get and set the submit button to disabled
      submit = document.querySelector('#submitAnswers');
      submit.setAttribute("disabled", "");
    }
  }
}

function getInput(el, qId) {
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

    // push the text value object to the currentState
    currentState.answers.push({
      s: currentState.sectionC,
      q: qId,
      a: answerID,
      t: textareas[0].value,
    });
    // store the inputted value in the dictionary
    // should this be addToDictionary?
    dict[result.answers[answerID].storeAs] = textareas[0].value;
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
        addToDictionary(result.answers[answerID].storeAs, inputs[i].value);
      }

      // push the text value object to the currentState
      currentState.answers.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID,
        t: inputs[i].value,
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
        addToDictionary(result.answers[answerID].storeAs, result.answers[answerID].answerText);
      }
      // push the question and answer object to the currentState
      currentState.answers.push({
        s: currentState.sectionC,
        q: qId,
        a: answerID,
      });
    }
  }
  return currentState.answers;
}

function addToDictionary(storeAs, answerText) {
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

// function to add formatting to array
function formatArray(arr, storage) {
  if (Array.isArray([arr])) {
    for (var i=0; i<arr.length; i++) {
      storage += '<p>'+arr[i] + '</p>';
    }
    return storage;
  }
}
