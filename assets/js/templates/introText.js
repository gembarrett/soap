templates.introText = function(data){
  var text = ros[0];
  var features = "";
  // TODO: refactor this
  var faqs = `<h3>`+text.how[0].head+`</h3>
        <p>`+text.how[0].desc+`</p>
        <h3>`+text.who[0].head+`</h3>
        <p>`+text.who[0].desc+`</p>
        <h3>`+text.why[0].head+`</h3>
        <p>`+text.why[0].desc+`</p>
        <h3>`+text.security[0].head+`</h3>
        <p>`+text.security[0].desc+`</p>
`;
  for (var i = 0; i<text.features.length; i++){
    features += `<div class="feature"><h3>`+text.features[i].feat+`</h3><p>`+text.features[i].desc+`</p></div>`;
  }
  var content = `
    <div id="intro">
      <section>
        <h1>`+text.head+`</h1>
        <h2>`+text.subhead+`</h2>
        <a class="btn btn-prim" href="/#build">Start building!</a>
        <a class="btn btn-seco" href="#features">Find out more</a>
      </section>
      <div id='features'>`+features+`</div>

      <div id='faqs'>`+faqs+`</div>

    </div>
    `;
    return content;
};
