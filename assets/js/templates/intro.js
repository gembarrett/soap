templates.intro = function(data){
  var text = ros[0];
  var content = `
    <div id="intro" class="nav-start">
      <div id="logoContainer">
        <div><img id="logoBig" src="assets/images/soapLogoW.png" /></div>
        <h1>`+text.head+`</h1>
      </div>
      <h2>`+text.subhead+`</h2>
      <div class="btn-wrap wrap-c">
        <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" name="home-q1-el" placeholder="Great Organization Name" required="">
        <button class="btn btn-prim" id="submit-home-q1" onclick="getNameFromHome()">Let's go!</button>
        </div>
      </div>
    </div>
    `;
    return content;
};
