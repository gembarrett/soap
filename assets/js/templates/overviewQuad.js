templates.overviewQuad = function(data){
  var text = ros[0];

  var content = `
  <div id="overview" class="nav-start">
    <section>
      <img src="assets/images/`+text.what[0].img+`.jpg" />
      <div class="text-group">
        <h1>`+text.what[0].head+`</h1>
        <p>`+text.what[0].overview+`</p>
      </div>
      <a class="btn btn-prim" href="#background?what-is-soap">More</a>
    </section>

    <section>
      <img src="assets/images/`+text.who[0].img+`.jpg" />
      <div class="text-group">
        <h1>`+text.who[0].head+`</h1>
        <p>`+text.who[0].overview+`</p>
      </div>
      <a class="btn btn-prim" href="#background?who-should-use-soap">More</a>
    </section>

    <section>
      <img src="assets/images/`+text.how[0].img+`.jpg" />
      <div class="text-group">
        <h1>`+text.how[0].head+`</h1>
        <p>`+text.how[0].overview+`</p>
      </div>
      <a class="btn btn-prim" href="#background?how-does-soap-work">More</a>
    </section>

    <section>
      <img src="assets/images/`+text.security[0].img+`.jpg" />
      <div class="text-group">
        <h1>`+text.security[0].head+`</h1>
        <p>`+text.security[0].overview+`</p>
      </div>
      <a class="btn btn-prim" href="#background?how-secure-private-is-soap">More</a>
    </section>
    </div>
    `;
    return content;
};
