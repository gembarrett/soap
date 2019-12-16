templates.bgTemplate = function(data, params){
  var text = ros[0];

  var optionsArray = ["what-is-soap", "who-should-use-soap", "how-does-soap-work", "how-secure-private-is-soap"];

  var order;

  var whatGroup = `<img src="assets/images/pic-bc.jpg" /><div class="text-img-wrap"><h1>`+text.what[0].head+`</h1>`;
  whatGroup = formatArray(text.what[0].desc, whatGroup);
  whatGroup += '</div>';
  var whoGroup = `<img src="assets/images/pic-policy.jpg" /><div class="text-img-wrap"><h1>`+text.who[0].head+`</h1>`;
  whoGroup = formatArray(text.who[0].desc, whoGroup);
  whoGroup += '</div>';
  var howGroup = `<img src="assets/images/pic-how-1.jpg" /><img src="assets/images/pic-how-2.jpg" /><img src="assets/images/pic-how-3.jpg" /><h1>`+text.how[0].head+`</h1>`;
  howGroup = formatArray(text.how[0].desc, howGroup);
  var securityGroup = `<img src="assets/images/pic-security.jpg" /><div class="text-img-wrap"><h1>`+text.security[0].head+`</h1>`;
  securityGroup = formatArray(text.security[0].desc, securityGroup);
  securityGroup += '</div>';
  var bgLinks = "";
  for (var u = 0; u<text.background[0].links.length; u++){
    bgLinks += `<a href="`+text.background[0].links[u].url+`" target="_blank">`;
    bgLinks += `<button class="btn btn-tert">`+text.background[0].links[u].name+`</button></a>`;
  }
  var backgroundGroup = `<div class="grid"><h4>Other resources</h4>`+bgLinks+`</div><div class="text-img-wrap"><h1>`+text.background[0].head+`</h1>`;
  backgroundGroup = formatArray(text.background[0].desc, backgroundGroup);
  backgroundGroup += `<a href="/assets/SecuringCivilSociety-report.pdf"><button class="btn btn-seco">Securing Civil Society report</button></a></p>`
  var futureGroup = `<h1>`+text.future[0].head+`</h1>`;
  futureGroup = formatArray(text.future[0].desc, futureGroup);
  var supportGroup = `<h1>`+text.support[0].head+`</h1><div class="border-white-round">`;
  supportGroup = formatArray(text.support[0].desc, supportGroup);
  supportGroup += `</div>`;
  // if there are parameters, change the order
  if (params) {
    switch (params[0]) {
      case optionsArray[0]:
        order = `<section class="highlight nav-start dbl">`+ whatGroup + '</section><section class="nav-scroll dbl reverse">' + whoGroup + '</section><section class="nav-start trio">' + howGroup +'</section><section class="nav-scroll dbl">' + securityGroup + '</section>';
        break;
      case optionsArray[1]:
        order = `<section class="highlight nav-start dbl reverse">` + whoGroup + '</section><section class="nav-scroll dbl">'+ whatGroup + '</section><section class="nav-start trio">' + howGroup +'</section><section class="nav-scroll dbl">' + securityGroup + '</section>';
        break;
      case optionsArray[2]:
        order = `<section class="highlight nav-start trio">` + howGroup + '</section><section class="nav-scroll dbl">'+ whatGroup + '</section><section class="nav-start dbl reverse">' + whoGroup +'</section><section class="nav-scroll dbl">' + securityGroup + '</section>';
        break;
      case optionsArray[3]:
        order = `<section class="highlight nav-start dbl">` + securityGroup + '</section><section class="nav-scroll dbl">'+ whatGroup + '</section><section class="nav-start dbl reverse">' + whoGroup +'</section><section class="nav-scroll trio">' + howGroup + '</section>';
        break;
      default:
      order = `<section class="highlight nav-start dbl">`+ whatGroup + '</section><section class="nav-scroll dbl reverse">' + whoGroup + '</section><section class="nav-start trio">' + howGroup +'</section><section class="nav-scroll dbl">' + securityGroup + '</section>';
    }
  } else {
    // this is default order
    order = `<section class="highlight nav-start dbl">`+ whatGroup + '</section><section class="nav-scroll dbl reverse">' + whoGroup + '</section><section class="nav-start trio">' + howGroup +'</section><section class="nav-scroll dbl">' + securityGroup + '</section>';
  }

  order += `<section class="nav-start dbl reverse">`+backgroundGroup+`</section><div id="maintenanceGroup"><section class="nav-scroll text-img-wrap">`+futureGroup+`</section><section class="nav-start text-img-wrap">`+supportGroup+`</section></div>`;

  var content = `
    <div id="bgContainer">
      `+order+`</div>
    `;
    return content;
};
