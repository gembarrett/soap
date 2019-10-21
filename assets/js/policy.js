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
  var tempAppendix = [];
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
    var review = "";
    var tip = "";
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
          general = found.appendixContent;
          tempAppendix.push(general);
        }

        var reviewContent = found.answers[currentState.answers[i].a].appendixEntry[0].reviewList;
        var tipContent = found.answers[currentState.answers[i].a].appendixEntry[0].tipList;

        // if there's review content
        if (reviewContent === ""){
          console.log("Empty!");
        } else {
          console.log("Found: "+reviewContent);
          tempAppendix.push(reviewContent);
        }
        if (tipContent === "") {
          console.log("Empty!");
        } else {
          console.log("Found: "+tipContent);
          tempAppendix.push(tipContent);
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }
  console.log(tempAppendix);
  // replace all temporary words with values from dict
  return replaceTemp(tempAppendix);
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
        console.log(policyArr[i]);
      }
    }
    editedArray.push(newString);
  }

  // join all the edited array entries together into a single string
  editedArray = editedArray.join("\n");
  return editedArray;
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
