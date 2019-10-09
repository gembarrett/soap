// this needs to be applied to textareas too
function resizingBoxes() {
  var boxes = document.querySelectorAll("input[type=text]");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute('style', 'width:' + (boxes[i].scrollWidth) + 'px;overflow-x:hidden;');
    boxes[i].addEventListener("input", onInput, false);
  }
}

function onInput() {
  this.style.width = 'auto';
  this.style.width = (this.scrollWidth) + 'px';
}
