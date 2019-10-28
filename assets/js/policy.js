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
        console.log('matching question '+qRef);
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
          case qRef < 14:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef < 19:
            acctsP = getPolicyContent(qRef, prevQ, aRef, acctsP, found);
            // if we need the appendix too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
            }
            // set the prevQ for next comparison
            // prevQ = qRef;
            break;
          case qRef < 20:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          default:
            console.log(qRef + ' not found');
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }

  // add a headline at the start of the array, with appropriate markdown (\n for txt, ## for md, <h2></h2>for html)
  // for each of the items in the array
  // if it's a policy array, join with appropriate markdown (\n for text, <br> for md, <p></p> for html)
  // if appendix is requested
  // if it's a general or tips appendix array, join with appropriate markdown (\n - for txt, * for md, <ul></li></li></ul> for html)
  // if it's a review checklist, join with appropriate markdown (\n - for txt, - [] for md, <ul><li></li></ul> for html)


  doc = 'Organisational Security Policy\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
  switch (true) {
    case deviceP.length > 0:
      doc += '\n\n*Device Security*\n' + deviceP.join('\n');
    case commsP.length > 0:
      doc += '\n\n*Communications Security*\n' + commsP.join('\n');
    case acctsP.length > 0:
      doc += '\n\n*Accounts Security*\n' + acctsP.join('\n');
    case incResP.length > 0:
      doc += '\n\n*What to do if...*\n' + incResP.join('\n');
    default:
      console.log('empty section');
  }
  // if appendix is requested, join the policy and appendix arrays together
  if (a) {
    doc += '\n\n*Appendix*\n';
    switch (true) {
      case appContent.general.length > 0:
        doc += '\n\n*General Advice*\n' + appContent.general.join('\n');
      case appContent.review.length > 0:
        doc += '\n\n*Review Checklist*\n' + appContent.review.join('\n');
      case appContent.tips.length > 0:
        doc += '\n\n*Implementation Tips*\n' + appContent.tips.join('\n');
      default:
        console.log('empty section');
    }
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
