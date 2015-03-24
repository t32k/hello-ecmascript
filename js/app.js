$(function() {
  // IE8+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');

  console.log(el.querySelector('#js-child') !== null);
});