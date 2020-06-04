templates.homeSection = function(data){
  var text = data[0];
  var list = "";
  // if there's a list
  if (text.list !== ""){
    list += `<`+text.list[0].type+`>`;
    // get each list item
    for (var i = 0; i<text.list[0].content.length; i++){
      list += `<li>`+text.list[0].content[i]+`</li>`;
    }
    list += `</`+text.list[0].type+`>`;
  }
  var moreText = text.more.join('\n');
  var content = `
  <div class="window">
  <div class="title">
    <h3>`+text.head+`</h3></div>
    <div class="homeSectionOverview"><p>`+text.subhead+`</p>`
    +list+
    `<div class="curtain">
    <details>
    <summary>More</summary>
      <p>`+moreText+`</p>
    </details>
      </div>
    </div>
  </div>`;
  return content;
};
