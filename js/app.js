$(function() {
  // IE9+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');
  // $(selector).filter(filterFn);

  Array.prototype.filter.call(items, function(e){
    console.log(e);
  });
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
});