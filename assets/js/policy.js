// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc = {
    plain: "",
    markdown: "",
    html: ""
  };
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
  };

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

  // if it's a policy array, join with appropriate markdown (\n for text, <br> for markdown, <p></p> for html)
  // if appendix is requested
  // if it's a general or tips appendix array, join with appropriate markdown (\n - for plain, * for markdown, <ul></li></li></ul> for html)
  // if it's a review checklist, join with appropriate markdown (\n - for plain, - [] for markdown, <ul><li></li></ul> for html)

  doc.plain = 'Organisational Security Policy\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.markdown = '#Organisational Security Policy ####Created '+dateStamp()+contextP.join('<br>');
  doc.html = '<h1>Organisational Security Policy</h1><h4>Created '+dateStamp()+'</h4><p>'+contextP.join('</p><p>')+'</p>';

  switch (true) {
    case deviceP.length > 0:
      doc.plain += '\n\nDevice Security\n' + deviceP.join('\n');
      doc.markdown += '###Device Security <br>' + deviceP.join('<br>');
      doc.html += '<h3>Device Security</h3><p>' + deviceP.join('</p><p>')+'</p>';
    case commsP.length > 0:
      doc.plain += '\n\nCommunications Security\n' + commsP.join('\n');
      doc.markdown += '###Communications Security <br>' + commsP.join('<br>');
      doc.html += '<h3>Communications Security</h3><p>' + commsP.join('</p><p>')+'</p>';
    case acctsP.length > 0:
      doc.plain += '\n\nAccounts Security\n' + acctsP.join('\n');
      doc.markdown += '###Accounts Security <br>' + acctsP.join('<br>');
      doc.html += '<h3>Accounts Security</h3><p>' + acctsP.join('</p><p>')+'</p>';
    case incResP.length > 0:
      doc.plain += '\n\nWhat to do if...\n' + incResP.join('\n');
      doc.markdown += '###What to do if...<br>' + incResP.join('<br>');
      doc.html += '<h3>What to do if...</h3><p>' + incResP.join('</p><p>')+'</p>';
    default:
      console.log('empty section');
  }
  // if appendix is requested, join the policy and appendix arrays together
  if (a) {
    doc.plain += '\n\nAppendix\n';
    doc.markdown += '##Appendix <br>';
    doc.html += '<h2>Appendix</h2>';
    switch (true) {
      case appContent.general.length > 0:
        doc.plain += '\n\nGeneral Advice\n' + appContent.general.join('\n');
        doc.markdown += '###General Advice <br>* ' + appContent.general.join('<br>* ');
        doc.html += '<h3>General Advice</h3><ul><li>' + appContent.general.join('</li><li>')+'</li></ul>';
      case appContent.review.length > 0:
        doc.plain += '\n\nReview Checklist\n' + appContent.review.join('\n');
        doc.markdown += '###Review Checklist <br>- [ ] ' + appContent.review.join('<br>- [ ] ');
        doc.html += '<h3>Review Checklist</h3><ol></li>' + appContent.review.join('</li><li>')+'</li></ol>';
      case appContent.tips.length > 0:
        doc.plain += '\n\nImplementation Tips\n' + appContent.tips.join('\n');
        doc.markdown += '###Implementation Tips <br>*' + appContent.tips.join('<br>* ');
        doc.html += '<h3>Implementation Tips</h3><ul><li>' + appContent.tips.join('</li><li>')+'</li></ul>';
      default:
        console.log('empty section');
    }
  }
  output = doc;
  console.log(output);
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
    // do this differently
    var data = output[type];
    console.log(data);
    var filename = "policyDoc";
    var format = 'text/'+type;
    console.log(format);
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
