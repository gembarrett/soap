function buildSubPolicies(data){
  layout = `<details class="question-panel">
            <summary><h2>`+data.q+`</h2></summary>`;
  // add each of the description paragraphs
  for (var p = 0; p < data.desc.length; p++){
    layout += `<p>`+data.desc[p]+`</p>`;
  }
  layout += `</details><div id="teamContentCols">
            <div id="teams"><button id="addTeam">+ add team (up to 10)</button>`;
  // add each of the default teams
  for (var e = 0; e < data.teams.length; e++){
      layout += `<div class="form-el type-radio">
                <input type="radio" id="`+data.id+`-0`+e+`-answer" name="`+data.id+`-el">
                <label for="`+data.id+`-0`+e+`-answer" contenteditable="true" class="btn-edit">`+data.teams[e].name+`</label></div>`;
  }
  layout += `</div><div id="content">`;
  // add all of the content areas
  for (var t = 0; t < data.areas.length; t++){
    layout += `<div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-1`+t+`-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-1`+t+`-answer">`+data.areas[t].name+`</label></div>`;
  }
  // close the columns and add the summary
  layout += `</div></div>
  <div id="expectedOutput">
    <p>What you'll get when you hit Next:
    <ul><li>Organizational Security Policy (full version)</li>
    <li>Appendix (inc. tips, links and Everyday Practices document)</li>
    </ul></p></div>`;

  // return the complete page
  return layout;
}

function addTeam(e){
  // get the id of this last question
  lastQid = e.target.id.split('-')[0];
  // count the number of input-label pairs in the teams column
  allEls = document.querySelectorAll('#teams input');
  // if it won't exceed the maximum
  if (allEls.length < 10){
    // build another team element
    thingToAdd = `<div class="form-el type-radio">
          <input type="radio" id="`+lastQid+`-`+allEls.length+`-answer" name="`+lastQid+`-el">
          <label for="`+lastQid+`-`+allEls.length+`-answer" contenteditable="true" class="btn-edit">New team</label>
        </div>`;
    // then add it to the screen
    e.target.insertAdjacentHTML('afterend', thingToAdd);
    // don't do any other buttony stuff
    e.preventDefault();
  } else {
    // if it's more than 10, do nothing (maybe show error text)
    console.log('too many teams');
    // don't do any other buttony stuff
    e.preventDefault();
  }

}

// TODO change the data references to something based on what can be grabbed from the e values
function updateTeams(e){
  console.log(e);
  // use teamContentDict to store the pairs
  // if changed element was a radio button then
  // does this element have stored policy areas
  // if so, toggle the selections on/off accordingly
  // if not, deselect all the areas

}
