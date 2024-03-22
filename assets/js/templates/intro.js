templates.intro = function(data){
  var text = textStore.ros[0];
  var content = `
    <div id="intro" class="nav-start contain">
      <div id="logoContainer">
        <div><img id="logoBig" alt="SOAP logo" src="assets/images/soapLogoW.png" /></div>
        <h1>`+text.head+`</h1>
      </div>
      <h2>`+text.subhead+`</h2>
      <div class="btn-wrap wrap-c">
        <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" title="Great Organization Name!" name="home-q1-el" placeholder="Great Organization Name">
        <button class="btn btn-prim" id="submit-home-q1" onclick="getNameFromHome()">Let's go!</button>
        </div>
      </div>
    </div>
    `;
    return content;
};
