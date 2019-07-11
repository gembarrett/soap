var utils = (function(){

  return {
    router: function(route, data){
      route = route || location.hash.slice(1) || 'home';
      // route = route || 'home';

      var temp = route.split('?');
      var route_split = temp.length;
      var function_to_invoke;
      if (temp[0] === 'build') {
        function_to_invoke = 'questionsView';
      } else if (temp[0] === 'policy') {
        function_to_invoke = 'policyView';
      } else if (temp[0] === 'background') {
        function_to_invoke = 'bgView';
      } else if (temp[0] === 'contribute') {
        function_to_invoke = 'supportView';
      } else {
        function_to_invoke = temp[0] || false;
      }

      if(route_split > 1){
        var params = extract_params(temp[1]);
      }

      if(function_to_invoke){
        views[function_to_invoke](data, params);
      }
    },

    render: function(element_id, content){
        document.getElementById(element_id).innerHTML = content;
    },

  };

})();
