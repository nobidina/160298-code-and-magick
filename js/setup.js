'use strict';

var NAME_LIST = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME_LIST = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR_LIST = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var BTN_ESC = 27;
var BTN_ENTER = 13;
var userDialog = document.querySelector('.setup');

var getRandom = function (range) {
  return Math.floor(Math.random() * range);
};

var getWizardslist = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    var randomName = NAME_LIST[getRandom(NAME_LIST.length)];
    var randomLastName = LAST_NAME_LIST[getRandom(LAST_NAME_LIST.length)];

    wizards[i] = {
      name: randomName + ' ' + randomLastName,
      coatColor: COAT_COLOR_LIST[getRandom(COAT_COLOR_LIST.length)],
      eyesColor: EYES_COLOR_LIST[getRandom(EYES_COLOR_LIST.length)]
    };
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizards = getWizardslist();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
};

var showWisardsList = function () {
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

// смена цветов по клику

var changeMainWizardСolors = function () {
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

// открытие и закрытие окна редактирования волшебника

var closeOpenSetup = function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');
  var setupUserName = document.querySelector('.setup-user-name');

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === BTN_ESC && setupUserName !== document.activeElement) {
      closePopup();
    }
  };

  var onSetupCloseEnterPress = function (evt) {
    if (evt.keyCode === BTN_ENTER) {
      closePopup();
    }
  };

  var onSetupCloseClick = function () {
    closePopup();
  };

  var onSetupeOpenEnterPress = function (evt) {
    if (evt.keyCode === BTN_ENTER) {
      openPopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    setupClose.addEventListener('click', onSetupCloseClick);
    setupSubmit.addEventListener('click', onSetupCloseClick);
    document.addEventListener('keydown', onSetupEscPress);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    setupSubmit.addEventListener('keydown', onSetupCloseEnterPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');

    setupClose.removeEventListener('click', onSetupCloseClick);
    setupSubmit.removeEventListener('click', onSetupCloseClick);
    document.removeEventListener('keydown', onSetupEscPress);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
    setupSubmit.removeEventListener('keydown', onSetupCloseEnterPress);
  };

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onSetupeOpenEnterPress);

};

var showWizardOptions = function () {
  renderWizards();
  showWisardsList();
  closeOpenSetup();
  changeMainWizardСolors();
};

showWizardOptions();
