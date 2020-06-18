const bodyEl = document.getElementsByTagName('body');
// when a key is pressed
document.addEventListener('keyup', reactToPress);
function reactToPress(e){
  elCode = e.code;
  // open preview = p = 80
  if (elCode === "KeyP"){
    console.log('open preview!');
  }
  // close preview = esc = 27
  else if (elCode === "Escape"){
    console.log('close preview!');
  }
  // next question = return = 13
  else if (elCode === "Enter"){
    console.log('next question!');
  }
  // select button or checkbox = s = 83
  else if (elCode === "KeyS"){
    console.log('select this option!');
  }
}
