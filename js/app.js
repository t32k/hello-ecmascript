$(function() {
  // $(el).offset();
  // IE8+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var rect = el.getBoundingClientRect();
  console.log({
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  });
});