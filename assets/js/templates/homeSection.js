templates.homeSection = function(data){
  var text = data[0];
  var list = "";
  console.log(text.list[0]);
  // if there's a list
  if (text.list !== ""){
    list += `<`+text.list[0].type+`>`;
    // get each list item
    for (var i = 0; i<text.list[0].content.length; i++){
      list += `<li>`+text.list[0].content[i]+`</li>`;
    }
    list += `</ul>`;
  }
  var content = `
  <div class="window">
  <div class="title">
    <h3>`+text.head+`</h3></div>
    <div class="homeSectionOverview"><p>`+text.subhead+`</p>`
    +list+
    `<div class="curtain">
    <details>
    <summary>More</summary>
      <p>`+text.more+`</p>
    </details>
      </div>
    </div>
  </div>`;
  return content;
};
