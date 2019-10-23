// File for all the policy-related functions

// function that compiles the policy based on what's in the answer storage at that time
function compilePolicy() {
    // create local policy variable
    var tempPolicy = [];
    // initialise prevQ
    var prevQ = currentState.answers[0].q;
    // for each of the stored answers
    for (var i = 0; i < currentState.answers.length; i++) {
      // grab the question and answer
      qRef = currentState.answers[i].q;
      aRef = currentState.answers[i].a;
      // set up current question, general content, specific content and answer text storage
      var thisQ = 'q'+qRef;
      var general = ""; // does this have to be created here?
      var specific = "";
      var answer = "";
      // check each section for the question with the right id
      for (var j = 0; j < sections.length; j++) {

        // search for question with correct id
        var found = sections[j].find(ans => ans.id === thisQ);
        // when it's found, check for policyContent
        if (found) {
          // ring the bell, we got ourselves a winner!

          // if this question number is not the same as the prevQ
          if (qRef != prevQ) {
            // if general hasn't already been created then create and grab general policy content
            general = found.policyContent;
            tempPolicy.push(general);
          }
          // use the answer to grab the policyEntry, if it exists
          if (found.answers[currentState.answers[i].a].policyEntry) {
            specific = found.answers[currentState.answers[i].a].policyEntry;
            tempPolicy.push(specific);
          }
        }
      }
      // store this question's ID for comparison in the next loop
      prevQ = qRef;
    }
    // replace all temporary words with values from dict
    return replaceTemp(tempPolicy);
}

// function that compiles the appendix based on what's in the answer storage at that time
function compileAppendix() {
  // create local policy variable
  var tempGeneral = [];
  var tempReview = [];
  var tempTips = [];

  // initialise prevQ
  var prevQ = currentState.answers[0].q;
  // for each of the stored answers
  for (var i = 0; i < currentState.answers.length; i++) {
    // grab the question and answer
    qRef = currentState.answers[i].q;
    aRef = currentState.answers[i].a; // TODO: either use this or delete

    // set up question name
    var thisQ = 'q'+qRef;
    // var answer = "";

    // find the section that has this question
    for (var j = 0; j < sections.length; j++) {

      // search for question with correct id
      var found = sections[j].find(ans => ans.id === thisQ);
      // when it's found, check for appendix content
      if (found) {
        // if we haven't already got the general content from this question
        if (qRef != prevQ) {
          // check the general content isn't empty!
          if (found.appendixContent !== "") {
            // grab the general appendix content for this question
            tempGeneral.push(found.appendixContent);
          }
        }
        console.log(found);
        // create an easy reference for the specific appendix content
        var appendix = found.answers[currentState.answers[i].a].appendixEntry[0];
        console.log(appendix);
        // if there's review or tip content
        if (appendix.reviewList.length > 0){
          tempReview.push(appendix.reviewList);
        }
        if (appendix.tipList.length > 0){
          tempTips.push(appendix.tipList);
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }
  console.log(tempGeneral.length, tempReview.length, tempTips.length);
  // replace all temporary words with values from dict
  tempGeneral = replaceTemp(tempGeneral);
  tempReview = replaceTemp(tempReview);
  tempTips = replaceTemp(tempTips);

  tempAppendix = '-----Appendix-----'+'\n'
  if (tempGeneral.length > 0) {
    tempAppendix += tempGeneral+'\n';
  }
  if (tempReview.length > 0){
    tempAppendix += '-----Review checklist-----'+'\n'+tempReview+'\n';
  }
  if (tempTips.length > 0){
    tempAppendix += '-----Implementation tips-----'+'\n'+tempTips;
  }
  console.log(tempAppendix)
  return tempAppendix;
}

// function to replace placeholder text in policy
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
  editedArray = editedArray.join("\n");
  return editedArray;
}

// takes all the array items and puts them in the right order and groupings
function formatPolicy(pol){

}

// takes all the review and tip items and organises them
function formatAppendix(app){

}

// function to download data to a file
function downloadPolicy(type) {
    var today = new Date();
    today.setHours(0,0,0,0);
    var data = policyText+appendixText+'Created '+today;
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
