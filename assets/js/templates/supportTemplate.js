templates.supportTemplate = function(data){
  var text = ros[0];
  var content = `
    <div id="supportContainer">
      <p>`+text.support[0].head+`</p>
      <p>`+text.support[0].desc+`</p>
    </div>
    `;
    return content;
};
