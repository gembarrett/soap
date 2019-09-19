templates.policyTemplate = function(data){
  policyText = compilePolicy();
  // TODO: refactor this
  txt = '<button onclick="downloadPolicy(\'text/plain\')">Text file</button>';
  md = '<button onclick="downloadPolicy(\'text/markdown\')">Markdown file</button>';
  html = '<button onclick="downloadPolicy(\'text/html\')">HTML file</button>';
  var content = '<textarea class="policyHolder">'+policyText+'</textarea>' + txt + md + html;
  return content;
};
