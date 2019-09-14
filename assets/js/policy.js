// File for all the policy-related functions

// function that compiles the policy based on what's in the answer storage at that time
function compilePolicy() {
    // create local policy variable
    var tempPolicy = [];
    // for each of the stored answers
    for (var i = 0; i < currentState.answers.length; i++) {
      // grab the question and answer
      qRef = currentState.answers[i].q;
      aRef = currentState.answers[i].a;
      // set up current question, general content, specific content and answer text storage
      var thisQ = 'q'+qRef;
      var general = "";
      var specific = "";
      var answer = "";

      // check each section for the question with the right id
      for (var j = 0; j < sections.length; j++) {
        // search for question with correct id
        var found = sections[j].find(ans => ans.id === thisQ);
        // when it's found, check for policyContent
        if (found) {
          // ring the bell, we got ourselves a winner!

          j === 10;
          // check if there's a general policyContent to grab
          if (found.policyContent !== "") {
            general = found.policyContent;
            console.log(general);
            tempPolicy.push(general);
          }
          // use the answer referencpolicyTexte to grab the policyEntry, if it exists
          if (found.answers[currentState.answers[i].a].policyEntry) {
            specific = found.answers[currentState.answers[i].a].policyEntry;
            tempPolicy.push(specific);
          }
        }
      }
    }
    // replace all temporary words with values from dict
    // return the compiled policy to injectOverlay or the end of the process
    return replaceTemp(tempPolicy);
    // is injectOverlay the best place to return it if that's for a onetime injection of html?
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
      newString = newString.replace(regex, dict[key]);
      // add this new string to the array
    }
    editedArray.push(newString);
  }

  // join all the edited array entries together into a single string
  editedArray = editedArray.join("\n");
  return editedArray;
}

// function to download data to a file
function downloadPolicy(type) {
    var data = policyText;
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
