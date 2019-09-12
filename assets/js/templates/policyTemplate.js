templates.policyTemplate = function(data){
  policyText = compilePolicy();
  console.log('your policy is' + policyText);
  // TODO: refactor this
  txt = '<button onclick="download(policyText, \'policyDoc\', \'text/plain\')">Text file</button>';
  pdf = '<button onclick="download(policyText, \'policyDoc\', \'application/pdf\')">PDF file</button>';
  md = '<button onclick="download(policyText, \'policyDoc\', \'text/markdown\')">Markdown file</button>';
  html = '<button onclick="download(policyText, \'policyDoc\', \'text/html\')">HTML file</button>';
  var content = '<textarea class="policyHolder">'+policyText+'</textarea>' + txt + pdf + md + html;
  return content;
};
