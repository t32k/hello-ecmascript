$(function() {
  // IE9+
  // $(el).css(ruleName);
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = getComputedStyle(el)['color'];
  console.log(text);
});