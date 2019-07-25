templates.bgTemplate = function(data){
  var text = ros[0];
  var bgContent = "";
  for (var i=0; i<text.background[0].desc.length;i++){
    bgContent += `<p>`+text.background[0].desc[i]+`</p>`;
  }
  var content = `
    <div id="bgContainer">
      <h1>`+text.background[0].head+`</h1>`
      +bgContent+`</div>
    `;
    return content;
};
