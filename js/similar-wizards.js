'use strict';

// получаем рандомное целое число

(function () {
  // получаем список волшебников

  var getWizardslist = function (NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom) {
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

  // создаем разметку для волшебника

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // добавляем волшебников в родительский блок

  var renderWizards = function (userDialog, NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom) {
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var wizards = getWizardslist(NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
    for (var j = 0; j < wizards.length; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }

    similarListElement.appendChild(fragment);
  };

  // показываем блок с волшебниками

  window.showWisardsList = function (userDialog, NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom) {
    renderWizards(userDialog, NAME_LIST, LAST_NAME_LIST, COAT_COLOR_LIST, EYES_COLOR_LIST, getRandom);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
