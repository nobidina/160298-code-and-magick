'use strict';

// смена цветов частей волшебника по клику
(function () {
  var FIREBALL_COLOR_LIST = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.changeMainWizardСolors = function (COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom) {
    var mainWizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
    var mainWizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
    var fireballColor = document.querySelector('.setup-fireball-wrap');

    mainWizardCoatColor.addEventListener('click', function () {
      mainWizardCoatColor.style.fill = COAT_COLOR_LIST[getRandom(COAT_COLOR_LIST.length)];
    });
    mainWizardEyesColor.addEventListener('click', function () {
      mainWizardEyesColor.style.fill = EYES_COLOR_LIST[getRandom(EYES_COLOR_LIST.length)];
    });
    fireballColor.addEventListener('click', function () {
      fireballColor.style.backgroundColor = FIREBALL_COLOR_LIST[getRandom(FIREBALL_COLOR_LIST.length)];
    });
  };
})();
