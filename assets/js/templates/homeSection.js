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
    <h3>`+text.head+`</h3>
    <p>`+text.subhead+`</p>`
    +list+
    `<div class="curtain">
      <p>secondary text</p>
    </div>
  </div>`;
  return content;
};
