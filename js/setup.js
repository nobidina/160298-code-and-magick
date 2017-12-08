'use strict';

var userDialog = document.querySelector('.setup');
var NAME_LIST = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME_LIST = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandom = function (range) {
  return Math.floor(Math.random() * range);
};

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

// показываем окно с опциями волшебника
var showWizardOptions = function () {
  window.showWisardsList(userDialog, NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
  window.installСloseOpenSetup(userDialog);
  window.changeMainWizardСolors(COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
};

showWizardOptions();
