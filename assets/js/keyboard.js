const bodyEl = document.getElementsByTagName('body');
// user presses a key
document.addEventListener('keydown', reactToPress);

function reactToPress(e){
  // is the key code a S, E, W, P or Space
  var keyNavArr = ['KeyS', 'KeyE', 'KeyP', 'Space', 'Enter'];

  if (keyNavArr.includes(e.code)){
    // get the element in focus
    var focusEl = document.activeElement;
    // is text field or textarea in focus
    if (focusEl.type === "textarea" || focusEl.type === "text" || focusEl.isContentEditable){
      // stop the form submitting and reloading
      if (e.code === keyNavArr[4]){
        e.preventDefault();
      }
      // do nothing
      return;
    } else {
      switch (e.code) {
        // S to select
        case keyNavArr[0]:
          // is radio or checkbox in focus
          if (focusEl.type === "radio" || focusEl.type === "checkbox"){
            // click it
            focusEl.click();
            break;
          }else{
            // do nothing
            break;
          }
        // E to edit
        case keyNavArr[1]:
          // is edit button visible
          if (document.querySelector("#editBtn").classList.contains('disabled')){
            // do nothing
            break;
          }else{
            // click it
            editBtn.click();
            break;
          }
        // P to preview
        case keyNavArr[2]:
          // is preview button visible
          if (document.querySelector("#previewPolicy").disabled){
            // do nothing
            break;
          }else{
            // click it
            document.querySelector("#previewPolicy").click();
            break;
          }
        // Space to submit
        case keyNavArr[3]:
          // is submit button enabled (it's disabled when in edit mode)
          if (document.querySelector("#submitAnswers").disabled){
            // do nothing
            break;
          }else{
            // click it
            document.querySelector("#submitAnswers").click();
            // reset focus
            document.getElementById('homeLink').focus();
            // FIXME: investigate why q4 scrolls down on load
            window.scrollTo(0,0);
            break;
          }
      }
    }
  }
}
