templates.intro = function(data){
  var text = ros[0];
  var content = `
    <div id="intro" class="nav-start">
      <h1>`+text.head+`</h1>
      <div class="text-img-wrap">
        <div class="text-buttons-wrap">
          <h2>`+text.subhead+`</h2>
          <div class="btn-wrap wrap-c">
          <a class="btn btn-prim" href="/#build">Start building!</a>
            <a class="btn btn-seco" href="#features">Find out more</a>
          </div>
        </div>
        <div id="home-pic"><img id="img-intro" src="assets/images/pic-build.jpg" /></div>
      </div>
    </div>
    `;
    return content;
};
