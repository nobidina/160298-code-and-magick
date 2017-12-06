'use strict';

// открытие и закрытие окна редактирования волшебника

(function () {
  var BTN_ESC = 27;
  var BTN_ENTER = 13;

  window.installСloseOpenSetup = function (userDialog) {
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

})();
