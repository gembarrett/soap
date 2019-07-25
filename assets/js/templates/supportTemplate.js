templates.supportTemplate = function(data){
  var text = ros[0];
  var supportContent = "";
  for (var i=0; i<text.support[0].desc.length;i++){
    if (i === 0) {
      supportContent += `<p>`+text.support[0].desc[i]+`</p>`;
    } else {
      supportContent += `<li>`+text.support[0].desc[i]+`</li>`;
    }
  }
  var content = `
    <div id="supportContainer">
      <h1>`+text.support[0].head+`</h1><ul>`
      +supportContent+`</ul></div>
    `;
    return content;
};
