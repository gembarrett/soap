templates.policyTemplate = function(data){
  policyText = compilePolicy();
  console.log('your policy is' + policyText);
  var content = '<textarea class="policyHolder">'+policyText+'</textarea>';
  return content;
};
