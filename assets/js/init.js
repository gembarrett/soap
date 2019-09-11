var templates = {};
var controllers = {};
var views = {};

window.onload = function(){
  console.log('Window loaded');
  document.querySelector('#no-js').remove();
  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );

  utils.router();
};
