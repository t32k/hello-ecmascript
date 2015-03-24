$(function() {
  // $(el).off(eventName, eventHandler);
  // IE9+
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var eventHandler = function() {
    console.log('Click!!!!!')
  }
  el.addEventListener('click', eventHandler);
});