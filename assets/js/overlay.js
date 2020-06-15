// File for all the overlay-related functions

// function to add the overlay to the page
function injectOverlay() {
  var parent = document.querySelector("#page");
  parent.insertAdjacentHTML('afterend', '<div id="preview" class="modal closed"><button id="closePreview"><i class="fas fa-plus-circle"></i></button><div id="inner" class="modalScrollbox"><h3>Policy Preview</h3></div></div><div id="overlay" class="modalOverlay closed"></div>');
  var modal = document.querySelector("#preview");
  var scrollbox = document.querySelector("#inner");
  var overlay = document.querySelector("#overlay");
  var close = document.querySelector("#closePreview");
  var open = document.querySelector("#previewPolicy");

  close.addEventListener("click", function() {
    togglePreview(modal, overlay);
  });
  overlay.addEventListener("click", function() {
    togglePreview(modal, overlay);
  });

  open.addEventListener("click", function() {
    collectAnswers(false);
    policyText = compileDoc(true, false);
    scrollbox.innerHTML = policyText.html;
    togglePreview(modal, overlay);
  });
}

// function to show/hide the preview overlay
function togglePreview(m, o) {
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
