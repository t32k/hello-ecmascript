$(function() {
  // IE8+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');

  console.log(el !== child && el.contains(child));
});