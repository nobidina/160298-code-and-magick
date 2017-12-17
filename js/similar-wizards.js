'use strict';

(function (userDialog) {

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    var similarList = userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    while (similarList.firstChild) {
      similarList.removeChild(similarList.firstChild);
    }

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarList.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var wizards = [];

  window.changeCoatColorHandler = function (color) {
    window.mainWizardCoatColor = color;
    window.debounce(updateWizards);
  };

  window.changeEyesColorHandler = function (color) {
    window.mainWizardEyesColor = color;
    window.debounce(updateWizards);
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.mainWizardCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.mainWizardEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var compareNames = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = compareNames(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.backend.errorHandler);
})(window.userDialog);
