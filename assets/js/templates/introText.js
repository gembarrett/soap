templates.introText = function(data){
  var text = ros[0];
  var features = "";
  var who  = "";
  who = formatArray(text.who[0].desc, who);
  var sec = "";
  sec = formatArray(text.security[0].desc, sec);
  // TODO: refactor this
  var faqs = `<h3>`+text.how[0].head+`</h3>
        <p>`+text.how[0].desc+`</p>
        <h3>`+text.who[0].head+`</h3>`+who+
        `<h3>`+text.security[0].head+`</h3>`+sec;
  for (var i = 0; i<text.features.length; i++){
    features += `<div class="feature"><i class="fas ` +text.features[i].icon+ `"></i><div class="feat-wrap"><h3>`+text.features[i].feat+`</h3><p>`+text.features[i].desc+`</p></div></div>`;
  }
  var content = `
    <div id="intro">
      <section>
        <h1>`+text.head+`</h1>
        <h2>`+text.subhead+`</h2>
        <div class="btn-wrap wrap-c">
        <a class="btn btn-seco" href="#features">Find out more</a>
        <a class="btn btn-prim" href="/#build">Start building!</a></div>
      </section>
      <div id='features'>`+features+`</div>

      <div id='faqs'>`+faqs+`</div>

    </div>
    `;
    return content;
};
