// File for all the overlay-related functions

// function to add the overlay to the page
function injectOverlay() {
  var parent = document.querySelector("#page");
  parent.insertAdjacentHTML('afterend', '<div id="preview" class="modal closed"><button id="closePreview" class="xIcon"><i class="fas fa-plus-circle"></i></button><div id="inner" class="modalScrollbox"><h3>Policy Preview</h3></div></div><div id="overlay" class="modalOverlay closed"></div>');

  var modal = document.querySelector("#preview");
  var scrollbox = document.querySelector("#inner");
  var overlay = document.querySelector("#overlay");
  var close = document.querySelector("#closePreview");
  var open = document.querySelector("#previewPolicy");

  close.addEventListener("click", function() {
    toggleModal(modal, overlay);
  });
  overlay.addEventListener("click", function() {
    toggleModal(modal, overlay);
  });

  open.addEventListener("click", function() {
    collectAnswers(false);
    policyText = compileDoc(true, false);
    scrollbox.innerHTML = policyText.html;
    toggleModal(modal, overlay);
  });
}

// function to show/hide the preview overlay
function toggleModal(m, o) {
  console.log('toggling');
  m.classList.toggle("closed");
  o.classList.toggle("closed");
}

// function to show/hide the info panel
function toggleInfo(id) {
  el = ".panel-"+id;
  panel = document.querySelector(el);
  panel.classList.toggle("closed");
  query = '#info-trigger-'+id;
  document.querySelector(query).classList.toggle("highlight");
}

function setUpFeedback(){
  // listen for click on feedback button
  var feedbackBtn = document.getElementById('feedbackBtn');
  var mod = document.getElementById("feedback");
  var ove = document.getElementById("overlay-feedback");
  // when it happens, toggle the visibility of these elements and generate the mailto link
  feedbackBtn.addEventListener('click', function() {
    // what page are we on
    // if we're on build, which question are we on
    // if can't get either piece of info then leave blank
    // generate the mailto link, containing the info if it exists
    // update the link used in the modal
    // then show the modal and overlay
    toggleModal(mod,ove);
  }, false);
  // listen for click on close button or outside overlay
  var close = document.querySelector("#closeFeedback");
  close.addEventListener("click", function() {
    toggleModal(mod, ove);
  });
  ove.addEventListener("click", function() {
    toggleModal(mod, ove);
  });
}
