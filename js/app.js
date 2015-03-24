$(function() {
  // IE9+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  Array.prototype.forEach.call(items, function(el, i){
    console.log(el, i);
  });

  // You can assign a different this object when calling an existing function. this refers to the current object, the calling object. With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
});