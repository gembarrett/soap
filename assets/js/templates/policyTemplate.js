templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;
  var resources = ros[0].background[0].links;
  var links = "<div><p>For more information on organizational and personal security, and how you can get the most out of your new policy, check out these resources:</p>";
  for (var r = 0; r<resources.length; r++){
    links += `<a href="`+resources[r].url+`" target="_blank" class="btn btn-seco">`+resources[r].name+`</a>`;
  }
  txt = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'plain\')"><i class="fas fa-download"></i> Text</button>';
  md = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'markdown\')"><i class="fas fa-download"></i> Markdown</button>';
  html = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'html\')"><i class="fas fa-download"></i> HTML</button>';
  var content =
    `<div id="policy-dl" class="window">
        <h3>Get policy</h3>
        <div class="dlBtnWrapper">
          <p>Download pre-formatted versions of your organizational security policy in plaintext, markdown and HTML.</p><div>`+ txt + md + html +
      `</div></div></div>
      <div id="policy-edit" class="window">
        <h3>Edit policy</h3>
        <textarea class="policyHolder">`+docContent.plain+`</textarea>
      </div>
      <div id="resources" class="window">
        <h3>Learn more</h3>`
        +links+`
      </div>
      <div id="policy-reset" class="window">
        <h3>Start over</h3><div>
        <p>All done? You'll need to reload the page before building another policy.</p>
        <button id="reset" onclick="clearData()" class="btn btn-seco">
        <i class="fas fa-redo"></i> Build another policy
        </button></div>
      </div>
      </div>`;
  return content;
};
