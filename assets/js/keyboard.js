const bodyEl = document.getElementsByTagName('body');
// user presses a key
document.addEventListener('keydown', reactToPress);

function reactToPress(e){
  // is the key code a S, E, P, Space or Enter
  var keyNavArr = ['KeyS', 'KeyE', 'KeyP', 'Space', 'Enter'];
  // first up, stop users from skipping through all the questions by sitting on the Enter key
  if ((e.code === keyNavArr[4]) && (onRepeat(e) === true)){
    e.preventDefault();
    return false;
  }

  // if the key is one we are interested in and we're not on repeat
  if ((keyNavArr.includes(e.code)) && (onRepeat(e) === false)){
    // get the element in focus
    var focusEl = document.activeElement;
    // is text field or textarea in focus
    if (focusEl.type === "textarea" || focusEl.type === "text" || focusEl.isContentEditable){
      // when you press Enter inside text fields
      if (e.code === keyNavArr[4]){
        // stop the form submitting and reloading
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
  return false;
}

function onRepeat(e){
  if (e.repeat){
    return true;
  } else {
    return false;
  }
}
