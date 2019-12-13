templates.overviewQuad = function(data){
  var text = ros[0];

  var content = `
  <div id="overview" class="nav-start">
    <section>
      <img src="`+text.what[0].img+`" />
      <h1>`+text.what[0].head+`</h1>
      <p>`+text.what[0].overview+`</p>
    </section>

    <section>
      <img src="`+text.who[0].img+`" />
      <h1>`+text.who[0].head+`</h1>
      <p>`+text.who[0].overview+`</p>
    </section>

    <section>
      <img src="`+text.how[0].img+`" />
      <h1>`+text.how[0].head+`</h1>
      <p>`+text.how[0].overview+`</p>
    </section>

    <section>
      <img src="`+text.security[0].img+`" />
      <h1>`+text.security[0].head+`</h1>
      <p>`+text.security[0].overview+`</p>
    </section>
    </div>
    `;
    return content;
};
