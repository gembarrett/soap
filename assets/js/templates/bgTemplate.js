templates.bgTemplate = function(data){
  var text = ros[0];
  var content = `
    <div id="bgContainer">
      <p>`+text.background[0].head+`</p>
      <p>`+text.background[0].desc+`</p>
    </div>
    `;
    return content;
};
