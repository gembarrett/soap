var templates = {};
var controllers = {};
var views = {};

window.onload = function(){
  console.log('Window loaded');

  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );

  utils.router();
};
