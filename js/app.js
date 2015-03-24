$(function() {
  // IE9+
  // $(el).next();
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = el.nextElementSibling;
  console.log(text);
});