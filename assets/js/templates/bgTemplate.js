templates.bgTemplate = function(data, params){
  // if params === "what-is-soap" then have that element first
  // default order: what-who-how-security
  // those 4 sections followed by background-future-contribute
  var text = ros[0];

  var optionsArray = ["what-is-soap", "who-should-use-soap", "how-does-soap-work", "how-secure-private-is-soap"];

  var order;

  var whatGroup = `<h1>`+text.what[0].head+`</h1>`;
  whatGroup = formatArray(text.what[0].desc, whatGroup);
  var whoGroup = `<h1>`+text.who[0].head+`</h1>`;
  whoGroup = formatArray(text.who[0].desc, whoGroup);
  var howGroup = `<h1>`+text.how[0].head+`</h1>`;
  howGroup = formatArray(text.how[0].desc, howGroup);
  var securityGroup = `<h1>`+text.security[0].head+`</h1>`;
  securityGroup = formatArray(text.security[0].desc, securityGroup);

  var backgroundGroup = `<h1>`+text.background[0].head+`</h1>`;
  backgroundGroup = formatArray(text.background[0].desc, backgroundGroup);
  var futureGroup = `<h1>`+text.future[0].head+`</h1>`;
  futureGroup = formatArray(text.future[0].desc, futureGroup);
  var supportGroup = `<h1>`+text.support[0].head+`</h1>`;
  supportGroup = formatArray(text.support[0].desc, supportGroup);
  // if there are parameters, change the order
  if (params) {
    switch (params[0]) {
      case optionsArray[0]:
        order = `<section class="highlight">`+ whatGroup + '</section><section>' + whoGroup + '</section><section>' + howGroup +'</section><section>' + securityGroup + '</section>';
        break;
      case optionsArray[1]:
        order = `<section class="highlight">` + whoGroup + '</section><section>'+ whatGroup + '</section><section>' + howGroup +'</section><section>' + securityGroup + '</section>';
        break;
      case optionsArray[2]:
        order = `<section class="highlight">` + howGroup + '</section><section>'+ whatGroup + '</section><section>' + whoGroup +'</section><section>' + securityGroup + '</section>';
        break;
      case optionsArray[3]:
        order = `<section class="highlight">` + securityGroup + '</section><section>'+ whatGroup + '</section><section>' + whoGroup +'</section><section>' + howGroup + '</section>';
        break;
      default:
      order = `<section class="highlight">`+ whatGroup + '</section><section>' + whoGroup + '</section><section>' + howGroup +'</section><section>' + securityGroup + '</section>';
    }
  } else {
    // this is default order
    order = `<section class="highlight">`+ whatGroup + '</section><section>' + whoGroup + '</section><section>' + howGroup +'</section><section>' + securityGroup + '</section>';
  }

  order += `<section>`+backgroundGroup+`</section><section>`+futureGroup+`</section><section>`+supportGroup+`</section>`;

  var content = `
    <div id="bgContainer">
      `+order+`</div>
    `;
    return content;
};
