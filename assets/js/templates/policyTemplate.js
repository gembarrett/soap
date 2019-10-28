templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;

  txt = '<button class="btn btn-prim" onclick="downloadPolicy(\'plain\')">Text file</button>';
  md = '<button class="btn btn-prim" onclick="downloadPolicy(\'markdown\')">Markdown file</button>';
  html = '<button class="btn btn-prim" onclick="downloadPolicy(\'html\')">HTML file</button>';
  var content = '<h2>You built a security policy!</h2><p>You are free to edit it in the textbox below, then copy and paste it into your own document. Or simply download the unedited version as text, markdown or html using the buttons.</p><textarea class="policyHolder">'+docContent.plain+'</textarea>' + txt + md + html;
  return content;
};
