$(function() {
  // IE9+
  // $(el).text();
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = el.textContent;
  console.log(text);
});