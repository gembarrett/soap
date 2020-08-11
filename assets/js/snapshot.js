function setUpSnapshot(){
  var snapshotBtn = document.getElementById('pausePolicy');
  snapshotBtn.removeAttribute('disabled');
  snapshotBtn.addEventListener('click', getSnapshotURL);
}

function getSnapshotURL(){
  var snapshotUrl = "https://usesoap.app/#b";
  var qNo = "0";
  for (var i = 0; i < currentState.answers.length; i++){
    // if we're on the same question
    if (qNo === currentState.answers[i].q){
      // add the a value to rest of that answer group
      snapshotUrl += currentState.answers[i].a;
    } else if (isCheckableQ(parseInt(currentState.answers[i].q))) {
      // get the new question number
      qNo = currentState.answers[i].q;
      // start new answer group, format appropriately if it's the first answer
      snapshotUrl += snapshotUrl[snapshotUrl.length - 1] === "b" ? "?" : "_";
      // add the question number and first answer for that question
      snapshotUrl += qNo + "-" + currentState.answers[i].a;
    } else {
      // tell the user why they're not getting what they expect
      console.log('either no answers or no questions');
    }
  }
  // show the link to the user
  console.log(snapshotUrl);
}

function isCheckableQ(q){
  var btnsArr = [2, 3, 5, 6, 7, 8, 10, 11, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30, 31, 32, 36, 37, 38, 40, 41, 44, 45, 46, 47];
  return btnsArr.includes(q) ? true : false;
}
