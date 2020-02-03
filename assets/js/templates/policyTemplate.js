templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;

  txt = '<button class="btn btn-prim" onclick="downloadPolicy(\'plain\')">Text  <i class="fas fa-download"></i></button>';
  md = '<button class="btn btn-prim" onclick="downloadPolicy(\'markdown\')">Markdown  <i class="fas fa-download"></i></button>';
  html = '<button class="btn btn-prim" onclick="downloadPolicy(\'html\')">HTML  <i class="fas fa-download"></i></button>';
  var content =
    `<div id="policy"><h1>You just built an organizational security policy!</h1>
    <div class="text-img-wrap">
    <div id="policy-dl"><h3>Download pre-formatted file:</h3><div id="dl-wrapper">`
    + txt + md + html + `</div></div>
    <div id="policy-edit">
    <h3>Edit, copy and paste into your own file:</h3>
    <textarea class="policyHolder">`+docContent.plain+`</textarea></div>
    </div><h3>All done? Clear your data from SOAP by pressing F5 to reload the page or by clicking here: <button id="reset" onclick="clearData()" class="btn btn-seco">Clear data <i class="fas fa-trash"></i></button></h3></div>`;
  return content;
};
