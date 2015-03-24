$(function() {
  // $(el).html(string);
  // IE8+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  el.innerHTML = '!';
});