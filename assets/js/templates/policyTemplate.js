templates.policyTemplate = function(data){
  policyText = compilePolicy();
  download(policyText, 'policyDoc', 'txt');
  console.log('your policy is' + policyText);
  var content = '<textarea class="policyHolder">'+policyText+'</textarea>';
  return content;
};
