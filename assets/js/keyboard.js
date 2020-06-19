const bodyEl = document.getElementsByTagName('body');
// when a key is pressed
document.addEventListener('keyup', reactToPress);

// when new question is shown, should the focus be moved to the first element rather than leaving it on Next?
// when the focused element is an input, find out if the label next door isContentEditable = true
// if it is editable, then decide on how to handle that

function reactToPress(e){
  var focusEl = whereIsFocus();
  console.log(focusEl);
  // before reacting, check whether the response is needed (e.g. is a text field in focus)
  if (isItInput(focusEl)) {
    console.log("it's an input");
    // if it's an input field we don't need preview or edit reactions
    // if it's next to a contentEditable label then do something with text entry and S to select
  } else {
    elCode = e.code;
    switch (elCode) {
      // this key won't be relevant on home page
      case "KeyP":
        // simulate a click on the preview button
        var prevBtn = document.querySelector("#previewPolicy");
        prevBtn.click();
        // pressing the key again dismisses the overlay
        break;
      // this key won't be relevant on home page
      case "Enter":
        // simulate a click on the edit button
        var subBtn = document.querySelector("#submitAnswers");
        subBtn.click();
        break;
      // this key won't be relevant on home page
      case "KeyS":
      console.log('select this option!');
        // get the button currently in focus
        var inputBtn = whereIsFocus();
        console.log(inputBtn);
        // if the returned element is an input element
        if (inputBtn.type === "radio" || inputBtn.type === "checkbox"){
          // click it
          inputBtn.click();
        }
        break;
      // this key won't be relevant on home page
      case "KeyE":
        // simulate a click on the edit button
        var editBtn = document.querySelector("#editBtn");
        console.log(editBtn);
        editBtn.click();
        break;
      default:
    }
  }
}

function isEditEnabled(){
  if (document.querySelector("#editBtn")){
    return true;
  } else {
    return false;
  }
}

function isPreviewEnabled(){
  if (document.querySelector("#previewPolicy")){
    return true;
  } else {
    return false;
  }
}

function isItInput(el) {
  // if it's a radio, checkbox or textarea
  if (el.type === "radio" || el.type === "checkbox" || el.type === "textarea"){
    return true;
  } else {
    return false;
  }
}

function whereIsFocus() {
  var focused_element = null;
  if (
      document.hasFocus() &&
      document.activeElement !== document.body &&
      document.activeElement !== document.documentElement
  ) {
      focused_element = document.activeElement;
  }
  return focused_element;
}
