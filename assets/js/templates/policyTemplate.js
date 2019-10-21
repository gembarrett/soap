templates.policyTemplate = function(data){
  policyText = compilePolicy();
  appendixText = compileAppendix();

  var today = new Date();
  today.setHours(0,0,0,0);

  // TODO: refactor this
  txt = '<button class="btn btn-prim" onclick="downloadPolicy(\'text/plain\')">Text file</button>';
  md = '<button class="btn btn-prim" onclick="downloadPolicy(\'text/markdown\')">Markdown file</button>';
  html = '<button class="btn btn-prim" onclick="downloadPolicy(\'text/html\')">HTML file</button>';
  var content = '<h2>You built a security policy!</h2><p>You are free to edit it in the textbox below, then copy and paste it into your own document. Or simply download the unedited version as text, markdown or html using the buttons.</p><textarea class="policyHolder">'+policyText+appendixText+'Created '+today+'</textarea>' + txt + md + html;
  return content;
};
