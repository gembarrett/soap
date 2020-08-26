function buildSubPolicies(data){
  layout = `<details class="question-panel"><summary><h2>`+data.q+`</h2></summary>
  <p>`+data.desc[0]+`</p>
  <p>`+data.desc[1]+`</p>
  <p>`+data.desc[2]+`</p></details>
  <div id="teams">
    <button id="addTeam">+ add team (up to 10)</button>
    <div class="form-el type-radio">
      <input type="radio" id="`+data.id+`-00-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-00-answer" contenteditable="true" class="btn-edit">`+data.teams[0].name+`</label>
    </div>
    <div class="form-el type-radio">
      <input type="radio" id="`+data.id+`-01-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-01-answer" contenteditable="true" class="btn-edit">`+data.teams[1].name+`</label>
    </div>
  </div>

  <div id="content">
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-10-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-10-answer" class="btn-edit">`+data.areas[0].name+`</label>
    </div>
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-11-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-11-answer" class="btn-edit">`+data.areas[1].name+`</label>
    </div>
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-12-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-12-answer" class="btn-edit">`+data.areas[2].name+`</label>
    </div>
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-13-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-13-answer" class="btn-edit">`+data.areas[3].name+`</label>
    </div>
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-14-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-14-answer" class="btn-edit">`+data.areas[4].name+`</label>
    </div>
    <div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-15-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-15-answer" class="btn-edit">`+data.areas[5].name+`</label>
    </div>
  </div>

  <p>What you'll get when you hit Next:
  <ul><li>Organizational Security Policy (full version)</li>
  <li>Appendix (inc. tips, links and Everyday Practices document)</li>
  </ul></p>`;

  // return the complete page
  return layout;
}

// TODO change the data references to something based on what can be grabbed from the e values
function updateTeams(e){
  //if button pressed was add button then
  console.log(e);
  // count the number of input-label pairs in the teams column
  allEls = document.querySelectorAll('#teams input');
  if (allEls.length < 11){
    thingToAdd = `<div class="form-el type-radio">
          <input type="radio" id="`+data.id+`-`+allEls.length+`-answer" name="`+data.id+`-el">
          <label for="`+data.id+`-`+allEls.length+`-answer" contenteditable="true" class="btn-edit">`+data.teams[0].name+`</label>
        </div>`;
    e.target.insertAdjacentHTML('afterend', thingToAdd);
    e.preventDefault();
  } else {
    // if it's more than 10, do nothing (maybe show error text)
    console.log('too many teams');
  }

  // if changed element was a radio button then
  // does this element have stored policy areas
  // if so, toggle the selections on/off accordingly
  // if not, deselect all the areas

}
