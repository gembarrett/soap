// update current SOAP version here
var soapv = "1.2.0";
var thisEnv = window.location.origin;

var templates = {};
var controllers = {};
var views = {};

//        var textStore = {
//            qs : {},
//            rs : {},
//            oc : {}
//        }
//
//        async function loadContentFromJSON(lang) {
//            const response = await fetch(`${thisEnv}/content/${lang}-content.json`);
//            const json = await response.json();
//                textStore.qs = json.qs;
//                textStore.rs = json.rs;
//                textStore.oc = json.oc;
//        }

window.onload = function(){
  document.querySelector('#no-js').remove();
    
//        loadContentFromJSON('en').then(()=>{
//        buildMobileMenu(sections);        
//        window.addEventListener(
//              "hashchange",
//              function(){utils.router()}
//        );
//        //  setUpMenu();
//        buildCatRefLib();
//        utils.router();    
//    });

  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );
  setUpFeedback();
  utils.router();
};

// initialise counters with the first section and question, this is updated at the end of questions and sections

//  list of sections
var sections = [section0, section1, section2, section3, section4, section5, section6, section7];
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
// for storing the team-content names and values
var teamContent = [];

// for storing the orgName when it's entered on the home page
var homeName = "";

// for holding the end result
var policyText = [];
var appendixText = [];
var output;
