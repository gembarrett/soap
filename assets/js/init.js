// update current SOAP version here
const soapv = "1.2.0";
const thisEnv = window.location.origin;

const templates = {};
const controllers = {};
const views = {};

let textStore = {
    qs : {},
    ros : {},
}

// set up progress tracking
let currentState = {
  // which number in the section queue are we?
  sectionC: 0,
  // which section's data is in use?
  sectionQ: null,
  // which number in the question queue are we?
  questionC: 0,
  // which question's data is in use?
  questionQ: null,
  // position in section
  questionP: 0,
  // which answers have been given for which questions?
  answers: [],
  // list of exclusions, updated on every submission and checked on every question load
  exclusions: []
}

let sections = [];
let questionsList = [];

// for storing the storeAs names and values
let dict = {};
// for storing the team-content names and values
let teamContent = [];

// for storing the orgName when it's entered on the home page
let homeName = "";

// for holding the end result
let policyText = [];
let appendixText = [];
let output;

async function loadContentFromJSON(lang) {
    const response = await fetch(`${thisEnv}/content/${lang}-content.json`);
    const json = await response.json();
        textStore.qs = json.qs;
        textStore.ros = json.ros;
    buildTheQuestionsQueue(textStore.qs);
}

window.onload = function(){
//  document.querySelector('#no-js').remove();
    
    loadContentFromJSON('en').then(()=>{
//        buildMobileMenu(sections);        
        window.addEventListener(
              "hashchange",
              function(){utils.router()}
        );
        utils.router();    
//        setUpFeedback();
    });

};

// initialise counters with the first section and question, this is updated at the end of questions and sections

function buildTheQuestionsQueue(qjson){
    //  list of sections
    sections = [qjson.section0, qjson.section1, qjson.section2, qjson.section3, qjson.section4, qjson.section5, qjson.section6, qjson.section7];
    // loop through and create list of questions
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
    startProgress(sections[0], questionsList[0]);
}

function startProgress(startingSection, startingQuestion){
  currentState.sectionQ = startingSection;
  currentState.questionQ = startingQuestion;
}


