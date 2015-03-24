$(function() {
  // IE9+
  // $(el).is('.my-class');;
  var el = document.getElementById('js-el');
  var child = document.getElementById('js-child');
  var items = document.querySelectorAll('#js-list > li');

  var matches = function(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  };

  matches(el, '.my-class');
});