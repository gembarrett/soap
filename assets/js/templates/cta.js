templates.cta = function(data){
  // get cta text from rest of site content
  var text = ros[0].cta;
  var content = `
    <div id="cta" class="nav-scroll">
      <h1>`+text+`</h1>
      <a class="btn btn-seco" href="#build">Build a policy</a>
    </div>
    `;
    return content;
};
