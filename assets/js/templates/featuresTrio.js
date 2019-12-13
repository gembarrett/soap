templates.featuresTrio = function(data){
  var text = ros[0].features;
  var features = "";
  for (var i = 0; i<text.length; i++){
    features += `<div class="feature"><i class="fas ` +text[i].icon+ `"></i><div class="feat-wrap"><h3>`+text[i].feat+`</h3><p>`+text[i].desc+`</p></div></div>`;
  }
  var content = `
    <div id='features' class="nav-scroll">`+features+`</div>`;
    return content;
};
