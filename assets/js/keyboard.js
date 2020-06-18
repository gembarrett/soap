const bodyEl = document.getElementsByTagName('body');
// when a key is pressed
document.addEventListener('keyup', reactToPress);
function reactToPress(e){
  elCode = e.code;
  switch (elCode) {
    // open preview = p = 80
    // this key won't be relevant on home page
    case "KeyP":
    console.log('open this preview!');
      break;
    // close preview = esc = 27
    // this key won't be relevant on home page
    case "Escape":
    console.log('close preview or close edit!');
      break;
    // submit answer = return = 13
    case "Enter":
    console.log('submit answer!');
      break;
    // select button or checkbox = s = 83
    // this key won't be relevant on home page
    case "KeyS":
    console.log('select this option!');
      break;
    // edit answers = e = 69
    // this key won't be relevant on home page
    case "KeyE":
    console.log('edit answers!');
      break;
    default:
  }
}
