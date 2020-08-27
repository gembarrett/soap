function buildSubPolicies(data){
  layout = `<details class="question-panel">
            <summary><h2>`+data.q+`</h2></summary>`;
  // add each of the description paragraphs
  for (var p = 0; p < data.desc.length; p++){
    layout += `<p>`+data.desc[p]+`</p>`;
  }
  layout += `</details><div id="teamContentCols"><div id="teams">`;
  // add each of the default teams
  // TODO: change this from e to avoid confusion
  for (var e = 0; e < data.teams.length; e++){
      layout += `<div class="form-el type-radio">`;
      layout += e === 0 ? `<input type="radio" checked="true" id="`+data.id+`-0`+e+`-answer" name="`+data.id+`-el">` : `<input type="radio" id="`+data.id+`-0`+e+`-answer" name="`+data.id+`-el">`;
      layout += `<label for="`+data.id+`-0`+e+`-answer" contenteditable="true" class="btn-edit">`+data.teams[e].name+`</label></div>`;
  }
  layout += `<button id="`+data.id+`-addTeam" class="btn btn-seco">+ add team (up to 10)</button></div><div id="policyAreas">`;
  // add all of the content areas
  for (var t = 0; t < data.areas.length; t++){
    layout += `<div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-1`+t+`-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-1`+t+`-answer">`+data.areas[t].name+` <span>`+data.areas[t].desc+`</span></label></div>`;
  }
  // close the columns and add the summary
  layout += `</div></div>
  <div id="expectedOutput">
    <p>Here's what you'll get when you hit Next:
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
          <input type="radio" id="`+lastQid+`-0`+allEls.length+`-answer" name="`+lastQid+`-el">
          <label for="`+lastQid+`-0`+allEls.length+`-answer" contenteditable="true" class="btn-edit">New team</label>
        </div>`;
    // then add it to the screen
    e.target.insertAdjacentHTML('beforebegin', thingToAdd);
    // add this team to teamContent
    teamContent.push({
      "name": lastQid+`-0`+allEls.length+`-answer`,
      "areas": []
    });

    // store the currently selected things
    // get the currently selected team
    // find it in the array
    // compare the stored areas with these selections
    // if they're the same, do nothing
    // else replace the stored values with the selections

    // then clear all those selections
    // and select the thingToAdd team

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
  // use teamContent to store the pairs as array of objects

  // if user clicked a team and its now checked
  if ((e.target.type === "radio") && (e.target.checked)){
    // if its stored already
    if (teamContent.includes(e.target.id)){
      // compare the stored areas with the currently selected ones
      // get the current selections
      currentAreas = document.querySelectorAll('#policyAreas input:checked');
      // get the match from the array
      console.log(teamContent[e.target.id]);

      // if there are current selections and stored areas
      if (currentAreas.length > 0){
        console.log(currentAreas);
      }
      // if they're the same, do nothing
      // else de/select the correct options
    } else { // if they selected a team that isn't currently stored
      // grab the name
      // teamContent.push({
      //
      // });
      // store it in teamContent, along with any currently selected content areas
      // or clear the selections?
    }

  } else if (e.target.type === "checkbox"){   // if user clicked a content area
    // which team is selected
    thisTeam = document.querySelector('#teams input:checked'); // returns a radio button
    // get all selected areas
    theseAreas = document.querySelectorAll('#policyAreas input:checked'); // returns multiple checkboxes
    areaRefs = [];
    // for each of the elements, get the id, then split it down to single figure
    for (var ta = 0; ta < theseAreas.length; ta++){
      areaRefs[ta] = parseInt(theseAreas[ta].id.split('-')[1].split('')[1]);
    }
    // for each of the stored objects
    for (var tc = 0; tc < teamContent.length; tc++){
      // check the id against currently selected team
      if (teamContent[tc].tId === thisTeam.id){
        // update the stored name if needs be
        teamContent[tc].name = thisTeam.labels[0].textContent;
        // update the stored values if needed
        teamContent[tc].areas = areaRefs;
        // then break the loop
        tc = teamContent.length;
      } else {
        // if it isn't stored then log it
        console.log(teamContent[tc].tId, thisTeam.id);
      }
    }
  } else {
    console.log(e.target);
  }
}

function setUpTeamContent(){
  // get all the default teams on the page
  teams = document.querySelectorAll('#teams input');
  // for each of those defaults
  for (var a = 0; a < teams.length; a++){
    // store the id in the teamContent
    teamContent.push({
      "tId" : teams[a].id,
      "name" : "",
      "areas" : []
    });
  }
}
