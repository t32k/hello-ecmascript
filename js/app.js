$(function() {
  // $(el).siblings();
  // IE9+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  console.log(Array.prototype.filter.call(el.parentNode.children, function(child){
    return child !== el;
  }));
});