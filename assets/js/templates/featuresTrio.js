templates.featuresTrio = function(data){
  var text = ros[0].features;
  var features = "";
  for (var i = 0; i<text.length; i++){
    features += `
      <div class="feature">
        <i class="fas ` +text[i].icon+ `"></i>
        <div class="feat-wrap">
          <h3>`+text[i].feat+`</h3>
          <p>`+text[i].desc+`</p>
          <ul><li>`+text[i].points[0]+`</li>
            <li>`+text[i].points[1]+`</li>
            <li>`+text[i].points[2]+`</li>
          </ul>
        </div>
      </div>
      `;
  }
  var content = `
    <div id='features' class="nav-scroll">`+features+`<a class="btn btn-prim" href="#build">Build your security policy</a></div>`;
    return content;
};
