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
}

function getInput(el, qId) {
  console.log('answering - getInput');
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
      t: textareas[0].value
    });
    // store the inputted value in the dictionary
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
        // if the storeAs key already exists in the dictionary because it's a continuation of a list
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
  // TODO: fix the nesting that's occurring in dict and duplicating the content
  console.log(dict);
  return currentState.answers;
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
