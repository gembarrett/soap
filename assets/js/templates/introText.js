templates.introText = function(data){
  var text = ros[0];
  var features = "";
  var faqs = `<h3>`+text.who[0].head+`</h3>
        <p>`+text.who[0].desc+`</p>
        <h3>`+text.why[0].head+`</h3>
        <p>`+text.why[0].desc+`</p>
        <h3>`+text.how[0].head+`</h3>
        <p>`+text.how[0].desc+`</p>
        <h3>`+text.security[0].head+`</h3>
        <p>`+text.security[0].desc+`</p>
`;
  for (var i = 0; i<text.features.length; i++){
    features += `<h3>`+text.features[i].feat+`</h3><p>`+text.features[i].desc+`</p>`;
  }
  var content = `
    <div id="intro">
      <h1>`+text.head+`</h1>
      <h2>`+text.subhead+`</h2>

      <div id='features'>`+features+`</div>

      <div id='faqs'>`+faqs+`</div>

    </div>
    `;
    return content;
};
