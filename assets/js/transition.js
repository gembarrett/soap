function getNameFromHome(){
  // find the input field
  var homeOrgName = document.getElementById('home-q1-0-answer');
  // if there's an Org Name entered
  if (homeOrgName.value !== ""){
    // collect the name and store it in a variable
    var homeName = homeOrgName.value;
    // show tips somehow
    // autofill q1 input field with the variable
    // skip to q2
  } else {
    console.log('no org name provided');
  }
}
