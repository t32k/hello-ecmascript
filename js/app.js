$(function() {
  // IE8+
  // $(el).attr('tabindex');
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = el.getAttribute('tabIndex');
  console.log(text);
});