templates.policyTemplate = function(data){
  policyText = compilePolicy();
  console.log('your policy is' + policyText);
  var content = policyText;
  return content;
};
