'use strict';

(function () {
  var BTN_ESC = 27;
  var BTN_ENTER = 13;
  var userDialogStyleTop = '80px';
  var userDialogStyleLeft = '50%';

  // открытие и закрытие окна редактирования волшебника
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

    var onSetupOpenEnterPress = function (evt) {
      if (evt.keyCode === BTN_ENTER) {
        openPopup();
      }
    };

    var openPopup = function () {
      userDialog.classList.remove('hidden');
      returnSetupStartPosition(userDialog);
      installDragSetup(userDialog);

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
    setupOpen.addEventListener('keydown', onSetupOpenEnterPress);
  };

  // перетаскивание окна
  var installDragSetup = function (userDialog) {
    var dialogHandle = userDialog.querySelector('.upload');

    dialogHandle.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
        userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };

  // возвращаем окну начальные координаты
  var returnSetupStartPosition = function (userDialog) {
    userDialog.style.top = userDialogStyleTop;
    userDialog.style.left = userDialogStyleLeft;
  };
})();
