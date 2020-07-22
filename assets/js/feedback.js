

// listen for click on feedback button
var feedbackBtn = document.getElementById('feedbackBtn');
feedbackBtn.addEventListener('click', getFeedback, false);

// listen for click on close button or outside overlay
var close = document.querySelector("#close-feedback");
close.addEventListener("click", function() {
  togglePreview(modal, overlay);
});
overlay.addEventListener("click", function() {
  togglePreview(modal, overlay);
});

function getFeedback(){
  console.log('get me some feedback!');
  // when this is triggered, display a modal
  var modal = document.querySelector("#feedback");
  var overlay = document.querySelector("#overlay-feedback");

  toggleModal(modal, overlay);
}
