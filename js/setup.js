'use strict';

var COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR_LIST = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');

// получение раздомных целых чисел
(function () {
  window.getRandom = function (range) {
    return Math.floor(Math.random() * range);
  };
})();

// перетаскиваем артефакты
(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem;
  var artifactsElement = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName === 'IMG') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
    artifactsElement.style.outlineColor = 'red';
    artifactsElement.style.outlineStyle = 'dashed';
    artifactsElement.style.outlineWidth = '2px';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();

    if (event.target.tagName === 'DIV') {
      evt.target.appendChild(draggedItem.cloneNode(true));
    }
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outlineColor = '';
    artifactsElement.style.outlineStyle = '';
    artifactsElement.style.outlineWidth = '';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'yellow';
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });
})();

// смена цветов частей волшебника по клику
(function () {
  window.changeMainWizardСolors = function () {
    var mainWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
    var mainWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    var fireball = document.querySelector('.setup-fireball-wrap');
    window.mainWizardCoatColor = '';
    window.mainWizardEyesColor = '';

    var fillWizardCoat = function (element, color) {
      element.style.fill = color;
      window.changeCoatColorHandler(color);
    };

    var fillWizardEyes = function (element, color) {
      element.style.fill = color;
      window.changeEyesColorHandler(color);
    };

    var changeFireballBackground = function (element, color) {
      element.style.backgroundColor = color;
    };

    window.colorizeElement(mainWizardCoat, COAT_COLOR_LIST, fillWizardCoat);
    window.colorizeElement(mainWizardEyes, EYES_COLOR_LIST, fillWizardEyes);
    window.colorizeElement(fireball, FIREBALL_COLOR_LIST, changeFireballBackground);
  };
})();

// показываем окно с опциями волшебника
var showWizardOptions = function () {
  window.installСloseOpenSetup(userDialog);
  window.changeMainWizardСolors();
};

showWizardOptions();

// отправляем данные формы
(function () {
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var successHandler = function () {
      userDialog.classList.add('hidden');
    };

    window.backend.save(new FormData(form), successHandler, window.backend.errorHandler);
  });
})();
