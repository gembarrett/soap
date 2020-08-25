function buildSubPolicies(data){
  console.log(data);
  layout = `<h2>`+data.q+`</h2>
  <p>`+data.desc[0]+`</p>
  <p>`+data.desc[1]+`</p>
  <p>`+data.desc[2]+`</p>
  <div id="teams">
  <button id="addTeam">+ add team (up to 10)</button>
    <input type="radio" class="team-btn">
    <label contenteditable="true" class="btn-edit">`+data.teams[0].name+`</label>
    <input type="radio" class="team-btn">
    <label contenteditable="true" class="btn-edit">`+data.teams[1].name+`</label>
  </div>

  <div id="content">
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[0].name+`</label>
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[1].name+`</label>
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[2].name+`</label>
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[3].name+`</label>
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[4].name+`</label>
    <input type="checkbox" class="area-btn">
    <label>`+data.areas[5].name+`</label>
  </div>

  <p>What you'll get when you hit Next:
  <ul><li>Organizational Security Policy (full version)</li>
  <li>Appendix (inc. tips, links and Everyday Practices document)</li>
  </ul></p>`;

  // return the complete page
  return layout;
}
