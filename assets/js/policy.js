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
  var travelP = [];
  var appContent = {
    general: [],
    review: [],
    tips: [],
    links: []
  };
  var routineDoc = [];

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
          // questions 0-5 are for context
          case qRef < 6:
            contextP = getPolicyContent(qRef, prevQ, aRef, contextP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found); // TODO: instead of repeating this is should just be a function call each time
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // add case for teaming name & pos @ 9
          // questions 6-8 are for devices
          case qRef < 9:
            deviceP = getPolicyContent(qRef, prevQ, aRef, deviceP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // questions 9-12 are for comms
          case qRef < 13:
            commsP = getPolicyContent(qRef, prevQ, aRef, commsP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // question 13 is inc resp
          case qRef < 14:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          // questions 14-19 are for accounts
          case qRef < 20:
            acctsP = getPolicyContent(qRef, prevQ, aRef, acctsP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // question 20 is for inc resp
          case qRef < 21:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          // add case for inserting Backups heading @ 22
          // questions 20-26 are for devices
          case qRef < 27:
            deviceP = getPolicyContent(qRef, prevQ, aRef, deviceP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // question 27 is for inc resp
          case qRef < 28:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          // add case for teaming name & pos @ 33
          // questions 28-33 are for travel
          case qRef < 34:
            travelP = getPolicyContent(qRef, prevQ, aRef, travelP, found);
            // if we need the appendix and routines too
            if (a) {
              appContent = getAppendixContent(qRef, prevQ, aRef, appContent, found);
              routineDoc = getRoutineEntry(qRef, prevQ, aRef, routineDoc, found);
            }
            break;
          // question 34 is for inc resp
          case qRef < 35:
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

  doc.plain = 'Organisational Security Policy\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.markdown = '# Organisational Security Policy \n#### Created '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.html = '<!DOCTYPE html><html><head><title>Cleaned with SOAP on '+dateStamp()+'</title></head><body><h1>Organisational Security Policy</h1><h4>Created '+dateStamp()+'</h4><p>'+contextP.join('</p><p>')+'</p>';

  if (deviceP.length > 0){
    doc.plain += '\n\nDevice Security\n' + deviceP.join('\n');
    doc.markdown += '\n\n### Device Security \n' + deviceP.join('\n');
    doc.html += '<h3>Device Security</h3><p>' + deviceP.join('</p><p>')+'</p>';
  }
  if (commsP.length > 0){
    doc.plain += '\n\nCommunications Security\n' + commsP.join('\n');
    doc.markdown += '\n\n### Communications Security \n' + commsP.join('\n');
    doc.html += '<h3>Communications Security</h3><p>' + commsP.join('</p><p>')+'</p>';
  }
  if (acctsP.length > 0){
    doc.plain += '\n\nAccounts Security\n' + acctsP.join('\n');
    doc.markdown += '\n\n### Accounts Security \n' + acctsP.join('\n');
    doc.html += '<h3>Accounts Security</h3><p>' + acctsP.join('</p><p>')+'</p>';
  }
  if (travelP.length > 0){
    doc.plain += '\n\Travel Security\n' + travelP.join('\n');
    doc.markdown += '\n\n### Travel Security \n' + travelP.join('\n');
    doc.html += '<h3>Travel Security</h3><p>' + travelP.join('</p><p>')+'</p>';
  }
  if (incResP.length > 0){
    doc.plain += '\n\nWhat to do if...\n' + incResP.join('\n\n');
    doc.markdown += '\n\n### What to do if...\n' + incResP.join('\n\n');
    doc.html += '<h3>What to do if...</h3><p>' + incResP.join('</p><p>')+'</p>';
  }

  // if appendix is requested, join the policy, appendix and routines arrays together
  if (a) {
    doc.plain += '\n\nAppendix\n';
    doc.markdown += '\n\n## Appendix\n';
    doc.html += '<h2>Appendix</h2>';
    if (appContent.general.length > 0){
      doc.plain += '\n\nGeneral Advice\n- ' + appContent.general.join('\n- ');
      doc.markdown += '\n\n### General Advice \n\n* ' + appContent.general.join('\n* ');
      doc.html += '<h3>General Advice</h3><ul><li>' + appContent.general.join('</li><li>')+'</li></ul>';
    }
    if (appContent.review.length > 0){
      doc.plain += '\n\nReview Checklist\n- ' + appContent.review.join('\n- ');
      doc.markdown += '\n\n### Review Checklist \n\n- [ ] ' + appContent.review.join('\n- [ ] ');
      doc.html += '<h3>Review Checklist</h3><ol><li>' + appContent.review.join('</li><li>')+'</li></ol>';
    }
    if (appContent.tips.length > 0){
      doc.plain += '\n\nImplementation Tips\n- ' + appContent.tips.join('\n- ');
      doc.markdown += '\n\n### Implementation Tips \n\n* ' + appContent.tips.join('\n* ');
      doc.html += '<h3>Implementation Tips</h3><ul><li>' + appContent.tips.join('</li><li>')+'</li></ul>';
    }
    if (appContent.links.length > 0){
      doc.plain += '\n\nUseful Links \n- ' + appContent.links.join('\n- ');
      doc.markdown += '\n\n### Useful Links \n\n* ' + appContent.links.join('\n* ');
      doc.html += '<h3>Useful Links</h3><ul><li>' + appContent.links.join('</li><li>')+'</li></ul>';
    }
    if (routineDoc.length > 0){
      doc.plain += '\n\nEveryday practices \n+ ' + routineDoc.join('\n+ ');
      doc.markdown += '\n\n## Everyday practices \n\n* ' + routineDoc.join('\n* ');
      doc.html += '<h2>Everyday practices</h2><ul><li>' + routineDoc.join('</li><li>')+'</li></ul>';
    }
  }
  doc.plain += '\n\nPlease note: it is recommended that this policy undergoes a legal review prior to being implemented in your organisation.';
  doc.markdown += '\n\n#### *Please note: it is recommended that this policy undergoes a legal review prior to being implemented in your organisation.*';
  doc.html += '<h4>Please note: it is recommended that this policy undergoes a legal review prior to being implemented in your organisation.</h4></body></html>';
  output = doc;
  return doc;
}

// function to replace temporary placeholder text in policy
function replaceStr(string) {
  var editedStr = string;
  // for each of the stored keys
  for (var key in dict){
    // if it's a list of things and the last item does not start with an " and "
    if ((Array.isArray(dict[key])) && (!dict[key][dict[key].length-1].startsWith(" and "))){
      last = dict[key][dict[key].length-1];
      // add "and" plus a full stop to the last item
      dict[key][dict[key].length-1] = "and " + last;
      // prepend each item in the array with a space
      for (var i = 0; i < dict[key].length; i++){
        dict[key][i] = " " + dict[key][i];
      }
    }
    var regexKey = key.replace('[', '\\[').replace(']', '\\]');
    var regex = new RegExp(regexKey, 'gi');
    // check if that key exists in the string and replace it with value from dict
    editedStr = editedStr.replace(regex, dict[key]);
  }
  // if string contains items that start [date+
  if (editedStr.match(/\[date\+[\.\d]+\]/g)){
    // grab all instances in this string
    dates = editedStr.match(/\[date\+[\.\d]+\]/g);
    // for each instance
    for (var d = 0; d < dates.length; d++){
      // take the number after the +
      num = dates[d].split('+');
      num = num[1].split(']');
      num = num[0];

      // get the current date
      start = new Date();
      // add the appropriate number of months/years to it
      start.setMonth(start.getMonth()+parseInt(num, 10));

      future = start.getDate();
      var options = {month:'long'};
      future += ' ' + new Intl.DateTimeFormat('en-UK', options).format(start);
      future += ' ' + start.getFullYear();

      // update the edited string
      editedStr = editedStr.replace(dates[d], future);
    }
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

function clearData(){
  console.log('reset all the things!');
  currentState = null;
  dates  = null;
  dict = null;
  output = null;
  qRef = null;
  tmpContent = null;
  window.location.reload(true);
}


// function to download data to a file
function downloadPolicy(type) {
    var data = output[type];
    var format = 'text/'+type;
    var filename = "SOAP-policy";
    if (type === 'markdown'){
      filename += '.md';
    } else if (type === 'plain'){
      filename += '.txt';
    } else {
      filename += '.'+type;
    }

    var file = new File([data], filename, {
      type: format,
    });

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

// TODO: consider merging these three into one function
function getPolicyContent(question, previous, answer, policy, content){
  // if it's a new question and there's policyContent
  if ((question !== previous) && (content.policyContent !== "")) {
    // edit the policyContent and push it to the policy
    thisContent = replaceStr(content.policyContent);
    policy.push(thisContent);
  }
  // if the answer has a policyEntry
  if (content.answers[answer].policyEntry !== ""){
    // edit the policyEntry and push it to the policy
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
  if (appEntry.linksList.length > 0){
    thisContent = replaceStr(appEntry.linksList);
    appDoc.links.push(thisContent);
  }
  return appDoc;
}

function getRoutineEntry(question, previous, answer, routines, content){
  // if it's a new question and there's a general routine entry
  if ((question !== previous) && (content.routineEntry !== "")) {
    // edit the entry and push it to the doc
    thisContent = replaceStr(content.routineEntry);
    routines.push(thisContent);
  }
  // if the answer has a specific routine entry
  if (content.answers[answer].routineEntry !== ""){
    // edit that entry and push it to the doc
    console.log(content.answers[answer].routineEntry);
    thisContent = replaceStr(content.answers[answer].routineEntry);
    routines.push(thisContent);
  }
  return routines;
}
