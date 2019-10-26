// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc;
  // create the temporary values
  var tempPolicy = [];
  var tempGeneralA = [];
  var tempReviewA = [];
  var tempTipsA = [];

  // set up prevQ currentState.answers[0].q
  var prevQ = currentState.answers[0].q;

  // for each of the answer references
  for (var i = 0; i < currentState.answers.length; i++){
    // get the qRef currentState.answers[i].q
    qRef = currentState.answers[i].q;

    // set up question name
    var thisQ = 'q'+qRef;

    // search for the relevant data using the answer reference
    for (var j = 0; j < sections.length; j++){
      // store if the data is found
      var found = sections[j].find(ans => ans.id === thisQ);
      // if there's data
      if (found){

        // if the qRef is between 0 and 4,
        // put in context array
        // if 5-9,
        // put in device array
        // if 10-12,
        // put in comms array
        // if 13
        // put in incident response array
        // if 14-18
        // put in account array
        // if 19
        // put in incident response array

        // for each of the items in each of the arrays
        // get the general and specific policy content,
        // replace the placeholder words
        // assign back to this array
        // if appendix is requested
        // get the general and specific appendix contents
        // replace the placeholder words
        // assign to separate arrays

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
        if (p){
          // if there is general content and we don't already have it
          if ((qRef != prevQ) && (found.policyContent !== "")){
            console.log(found.policyContent);
            // store it
            tempPolicy.push(found.policyContent);
          }
          // if there is specific content
          if (found.answers[currentState.answers[i].a].policyEntry){
            // store it
            tempPolicy.push(found.answers[currentState.answers[i].a].policyEntry);
          }
        }
        // if we're building an appendix
        if (a){
          // if there is general content and we don't already have it
          if ((qRef != prevQ) && (found.appendixContent !== "")){
            // store it
            tempGeneralA.push(found.appendixContent);
          }
          // create an easy reference for the specific appendix content
          var appendix = found.answers[currentState.answers[i].a].appendixEntry[0];
          // if there's review or tip content
          if (appendix.reviewList.length > 0){
            // store it
            tempReviewA.push(appendix.reviewList);
          }
          if (appendix.tipList.length > 0){
            // store it
            tempTipsA.push(appendix.tipList);
          }
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }
  // sort and format then replace placeholder words
  // replace placeholder words then sort and format
  if (p){
    console.log(tempPolicy[0]);
    doc = replaceTemp(tempPolicy);
  }
  if (a){
    doc += '-----Appendix-----'+'\n';
    if (tempGeneralA.length > 0) {
      doc += replaceTemp(tempGeneralA)+'\n';
    }
    if (tempReviewA.length > 0){
      doc += '-----Review checklist-----'+'\n'+replaceTemp(tempReviewA)+'\n';
    }
    if (tempTipsA.length > 0){
      doc += '-----Implementation tips-----'+'\n'+replaceTemp(tempTipsA);
    }
  }
  return doc;
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
function formatArray(array){
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
