var feedbackBtn = document.getElementById('feedbackBtn');
feedbackBtn.addEventListener('click', getFeedback, false);

function getFeedback(){
  console.log('get me some feedback!');
  // when this is triggered, display a modal
  // this modal should have 3 options:
    // take a short survey
    // download public key and open new email
    // raise an issue on GitHub
}
