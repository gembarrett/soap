// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc;
  // create the temporary values
  var tempPolicy = [];
  var tempGeneralA = [];
  var tempReviewA = [];
  var tempTipsA = [];

  var contextP = [];
  var deviceP = [];
  var commsP = [];
  var acctsP = [];
  var incResP = [];
  var appContent = {
    general: [],
    review: [],
    tips: []
  }

  // set up prevQ currentState.answers[0].q
  var prevQ = currentState.answers[0].q;

  // for each of the answer references
  for (var i = 0; i < currentState.answers.length; i++){
    // get quick ref for answers
    aRef = currentState.answers[i].a;
    // get quick ref for question number
    qRef = currentState.answers[i].q;
    // set up question name
    var thisQ = 'q'+qRef;

    // search for the relevant data using the answer reference
    for (var j = 0; j < sections.length; j++){
      // store if the data is found
      var found = sections[j].find(ans => ans.id === thisQ);
      // if there's data
      if (found){
        switch (true) {
          case qRef < 5:
            contextP = getPolicyContent(qRef, prevQ, aRef, contextP, found);
            // if we need the appendix too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
            }
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef < 10:
            deviceP = getPolicyContent(qRef, prevQ, aRef, deviceP, found);
            // if we need the appendix too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
            }
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef < 13:
            commsP = getPolicyContent(qRef, prevQ, aRef, commsP, found);
            // if we need the appendix too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
            }
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef === 13:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef < 19:
            commsP = getPolicyContent(qRef, prevQ, aRef, commsP, found);
            // if we need the appendix too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
            }
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef === 19:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          default:
            console.log(qRef + ' not found');
        }

        console.log(contextP, deviceP, commsP, acctsP, incResP);
        console.log(appContent);

        // at this point there should be 6 policy arrays and 3 appendix arrays, sorted and placeholders removed

        // for each array
        // add a headline at the start of the array, with appropriate markdown (\n for txt, ## for md, <h2></h2>for html)
        // for each of the items in the array
        // if it's a policy array, join with appropriate markdown (\n for text, <br> for md, <p></p> for html)
        // if appendix is requested
        // if it's a general or tips appendix array, join with appropriate markdown (\n - for txt, * for md, <ul></li></li></ul> for html)
        // if it's a review checklist, join with appropriate markdown (\n - for txt, - [] for md, <ul><li></li></ul> for html)

        // if appendix is requested, join the policy and appendix arrays together
        // if policy only, join the policy arrays together

        // if we're building a policy
        // if (p){
        //   // if there is general content and we don't already have it
        //   if ((qRef != prevQ) && (found.policyContent !== "")){
        //     console.log(found.policyContent);
        //     // store it
        //     tempPolicy.push(found.policyContent);
        //   }
        //   // if there is specific content
        //   if (found.answers[currentState.answers[i].a].policyEntry){
        //     // store it
        //     tempPolicy.push(found.answers[currentState.answers[i].a].policyEntry);
        //   }
        // }
        // if we're building an appendix
        // if (a){
        //   // if there is general content and we don't already have it
        //   if ((qRef != prevQ) && (found.appendixContent !== "")){
        //     // store it
        //     tempGeneralA.push(found.appendixContent);
        //   }
        //   // create an easy reference for the specific appendix content
        //   var appendix = found.answers[currentState.answers[i].a].appendixEntry[0];
        //   // if there's review or tip content
        //   if (appendix.reviewList.length > 0){
        //     // store it
        //     tempReviewA.push(appendix.reviewList);
        //   }
        //   if (appendix.tipList.length > 0){
        //     // store it
        //     tempTipsA.push(appendix.tipList);
        //   }
        // }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }
  // sort and format then replace placeholder words
  // replace placeholder words then sort and format
  // if (p){
  //   doc = replaceTemp(tempPolicy);
  // }
  // if (a){
  //   doc += '-----Appendix-----'+'\n';
  //   if (tempGeneralA.length > 0) {
  //     doc += replaceTemp(tempGeneralA)+'\n';
  //   }
  //   if (tempReviewA.length > 0){
  //     doc += '-----Review checklist-----'+'\n'+replaceTemp(tempReviewA)+'\n';
  //   }
  //   if (tempTipsA.length > 0){
  //     doc += '-----Implementation tips-----'+'\n'+replaceTemp(tempTipsA);
  //   }
  // }
  doc = contextP.join('\n');
  doc += '*Device security*\n' + deviceP.join('\n');
  doc += '*Communications security*\n' + commsP.join('\n');
  doc += '*Accounts security*\n' + acctsP.join('\n');
  doc += '*Incident response*\n' + incResP.join('\n');
  if (a) {
    doc += '*Appendix*\n' + appContent.general.join('\n');
    doc += '*Review checklist*\n' + appContent.review.join('\n');
    doc += '*Tips list*\n' + appContent.tips.join('\n');
  }
  return doc;
}

// function to replace temporary placeholder text in policy
function replaceStr(string) {
  var editedStr = string;
  // for each of the stored keys
  for (var key in dict){
    var regexKey = key.replace('[', '\\[').replace(']', '\\]');
    var regex = new RegExp(regexKey, 'gi');
    // check if that key exists in the string and replace it with value from dict
    editedStr = editedStr.replace(regex, dict[key]);
  }
  return editedStr;
}


// function to replace temporary placeholder text in policy
// modify this to just handle one replacement at a time
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
      if (newString){
        // add this new string to the array
        newString = newString.replace(regex, dict[key]);
      } else {
        console.log(policyArr[i].length);
      }
    }
    editedArray.push(newString);
  }

  // join all the edited array entries together into a single string
  // just return array?
  editedArray = editedArray.join("\n");
  return editedArray;
}

// takes all the array items (policy and incident response) and puts them in the right order and groupings
// takes tempPolicy, tempGeneralA, tempReviewA and tempTipsA arrays
function editArray(array){
// at the start, title Organisational Security Policy
// for each item in the array
// at q6, subheading Device Security
// at q10, subheading Communications Security
// at q15, subheading Account Security
// place q13 and q19 with heading "What to do if"
}

// takes all the general, review and tip items and organises them
function sortAppendix(gen, rev, tip){
// at the start, title Appendix
// at gen, subheading General advice
// at rev, subheading Review checklist
// at tip, subheading Implementation tips
}

function dateStamp(){
  // get the current date
  var today = new Date();
  // start creating the date stamp
  var fullDate = today.getDate();
  var options = {month:'long'};
  fullDate += ' ' + new Intl.DateTimeFormat('en-UK', options).format(today);
  fullDate += ' ' + today.getFullYear();
  return fullDate; // is there a way to return date + 3 months (no day)?
}

// function to download data to a file
function downloadPolicy(type) {
    var data = policyText+appendixText+'Created '+dateStamp();
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


function getPolicyContent(question, previous, answer, policy, content){
  if ((question !== previous) && (content.policyContent !== "")) {
    thisContent = replaceStr(content.policyContent);
    policy.push(thisContent);
  }
  if (content.answers[answer].policyEntry !== ""){
    thisContent = replaceStr(content.answers[answer].policyEntry);
    policy.push(thisContent);
  }
  return policy;
}
function getAppendixContent(question, previous, answer, appDoc, content){
  if ((question !== previous) && (content.appendixContent !== "")) {
    thisContent = replaceStr(content.appendixContent);
    appDoc.general.push(thisContent);
  }
  appEntry = content.answers[answer].appendixEntry[0];
  if (appEntry.reviewList.length > 0){
    thisContent = replaceStr(appEntry.reviewList);
    appDoc.review.push(thisContent);
  }
  if (appEntry.tipList.length > 0){
    thisContent = replaceStr(appEntry.tipList);
    appDoc.tips.push(thisContent);
  }
  return appDoc;
}
