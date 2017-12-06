'use strict';

var userDialog = document.querySelector('.setup');
var NAME_LIST = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME_LIST = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandom = function (range) {
  return Math.floor(Math.random() * range);
};

// показываем окно с опциями волшебника

var showWizardOptions = function () {
  window.showWisardsList(userDialog, NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
  window.installСloseOpenSetup(userDialog);
  window.changeMainWizardСolors(COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
};

showWizardOptions();
