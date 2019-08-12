templates.bgTemplate = function(data){
  var text = ros[0];
  var bgContent = "";
  bgContent = formatArray(text.background[0].desc, bgContent);
  var content = `
    <div id="bgContainer">
      <h1>`+text.background[0].head+`</h1>`
      +bgContent+`</div>
    `;
    return content;
};
