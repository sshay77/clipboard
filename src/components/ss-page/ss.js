

define(["knockout", "text!./ss.html","jquery"], function(ko, ssTemplate, $) {

  function Ss(route) {
    this.message = ko.observable('Welcome to ss page!');
        this.response = ko.observable('no reposne yet to ss page!');
    this.requests= ko.observableArray([]);
    
    
  }

  Ss.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };
  
  Ss.prototype.doRequestioForUrl = function() {
    var count = this.requests().length;
    this.requests.push('You invoked doRequestioForUrl() on the viewmodel.' + count);
    var self = this;
  $.get('index.html#about', function(resp){
    self.response(resp);
  });
    
  };

  return { viewModel: Ss , template: ssTemplate };

});
