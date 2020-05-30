templates.intro = function(data){
  var text = ros[0];
  var content = `
    <div id="intro" class="nav-start">
      <h1>`+text.head+`</h1>
      <h2>`+text.subhead+`</h2>
      <div class="btn-wrap wrap-c">
        <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" name="home-q1-el" placeholder="Great Organization Name" required="">
        <a class="btn btn-prim" href="/#build">Let's go!</a>
        </div>
      </div>
    </div>
    `;
    return content;
};
