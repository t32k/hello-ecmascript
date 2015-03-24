$(function() {
  // $(parent).prepend(el);
  // IE8+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var text = el.insertBefore(child, parent.firstChild);;
  console.log(text);
});