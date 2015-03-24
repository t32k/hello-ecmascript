$(function() {
  // IE8+
  // $(el).html();
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = el.innerHTML;
  console.log(text);
});