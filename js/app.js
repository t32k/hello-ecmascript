$(function() {
  // IE8+
  // $(el).hasClass(className);
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');


  if (el.classList) {
    var text = el.classList.contains('foo');
  } else {
    var text = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
  console.log(text);
});