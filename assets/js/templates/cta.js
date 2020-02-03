templates.cta = function(data){
  // get cta text from rest of site content
  var text = ros[0].cta;
  var content = `
    <div id="cta" class="nav-scroll">
      <h2>`+text+`</h2>
      <a class="btn btn-prim" href="#build">Build policy</a>
    </div>
    `;
    return content;
};
