templates.bgTemplate = function(data, params){
  // if params === "what-is-soap" then have that element first
  // default order: what-who-how-security
  // those 4 sections followed by background-future-contribute
  var text = ros[0];

  var optionsArray = ["what-is-soap", "who-should-use-soap", "how-does-soap-work", "how-secure-private-is-soap"];

  var order;

  var whatGroup = `<img src="assets/images/pic-bc.jpg" /><div class="text-img-wrap"><h1>`+text.what[0].head+`</h1>`;
  whatGroup = formatArray(text.what[0].desc, whatGroup);
  whatGroup += '</div>';
  var whoGroup = `<img src="assets/images/pic-who.jpg" /><h1>`+text.who[0].head+`</h1>`;
  whoGroup = formatArray(text.who[0].desc, whoGroup);
  var howGroup = `<h1>`+text.how[0].head+`</h1><img src="assets/images/pic-how-1.jpg" /><img src="assets/images/pic-how-2.jpg" /><img src="assets/images/pic-how-3.jpg" />`;
  howGroup = formatArray(text.how[0].desc, howGroup);
  var securityGroup = `<img src="assets/images/pic-how-1.jpg" /><h1>`+text.security[0].head+`</h1>`;
  securityGroup = formatArray(text.security[0].desc, securityGroup);

  var backgroundGroup = `<div>resource1, resource 2, resource3, resource4</div><h1>`+text.background[0].head+`</h1>`;
  backgroundGroup = formatArray(text.background[0].desc, backgroundGroup);
  backgroundGroup += `<a href="/assets/SecuringCivilSociety-report.pdf"><button class="btn btn-prim">Securing Civil Society report</button></a>`
  var futureGroup = `<h1>`+text.future[0].head+`</h1>`;
  futureGroup = formatArray(text.future[0].desc, futureGroup);
  var supportGroup = `<h1>`+text.support[0].head+`</h1>`;
  supportGroup = formatArray(text.support[0].desc, supportGroup);
  // if there are parameters, change the order
  if (params) {
    switch (params[0]) {
      case optionsArray[0]:
        order = `<section class="highlight nav-start">`+ whatGroup + '</section><section class="nav-scroll">' + whoGroup + '</section><section class="nav-start">' + howGroup +'</section><section class="nav-scroll">' + securityGroup + '</section>';
        break;
      case optionsArray[1]:
        order = `<section class="highlight nav-start">` + whoGroup + '</section><section class="nav-scroll">'+ whatGroup + '</section><section class="nav-start">' + howGroup +'</section><section class="nav-scroll">' + securityGroup + '</section>';
        break;
      case optionsArray[2]:
        order = `<section class="highlight nav-start">` + howGroup + '</section><section class="nav-scroll">'+ whatGroup + '</section><section class="nav-start">' + whoGroup +'</section><section class="nav-scroll">' + securityGroup + '</section>';
        break;
      case optionsArray[3]:
        order = `<section class="highlight nav-start">` + securityGroup + '</section><section class="nav-scroll">'+ whatGroup + '</section><section class="nav-start">' + whoGroup +'</section><section class="nav-scroll">' + howGroup + '</section>';
        break;
      default:
      order = `<section class="highlight nav-start">`+ whatGroup + '</section><section class="nav-scroll">' + whoGroup + '</section><section class="nav-start">' + howGroup +'</section><section class="nav-scroll">' + securityGroup + '</section>';
    }
  } else {
    // this is default order
    order = `<section class="highlight nav-start">`+ whatGroup + '</section><section class="nav-scroll">' + whoGroup + '</section><section class="nav-start">' + howGroup +'</section><section class="nav-scroll">' + securityGroup + '</section>';
  }

  order += `<section class="nav-start">`+backgroundGroup+`</section><div id="maintenanceGroup"><section class="nav-scroll">`+futureGroup+`</section><section class="nav-start">`+supportGroup+`</section></div>`;

  var content = `
    <div id="bgContainer">
      `+order+`</div>
    `;
    return content;
};
