'use strict';

(function () {
  window.colorizeElement = function (element, color, action) {
    element.addEventListener('click', function () {
      action(element, color[window.getRandom(color.length)]);
    });
  };
})();
