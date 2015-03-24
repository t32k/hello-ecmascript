$(function() {
  var el = document.getElementById('js-el');

  if (el.classList) {
    el.classList.add('foo');
  } else {
    el.className += ' ' + 'f00';
  }
});