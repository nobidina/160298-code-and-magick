'use strict';

window.renderStatistics = function (ctx, names, times) {
  var drawBackground = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
  };

  drawBackground();

  var writeText = function () {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  writeText();

  var getMaxTime = function () {
    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var max = getMaxTime();

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var indent = 50;
  var barHeigth = 40;
  var initialX = 40;
  var initialY = 100;
  var lineHeight = 15;
  var opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
  var pos = names.indexOf('Вы');

  for (var j = 0; j < times.length; j++) {
    if (names[j] === names[pos]) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomOpacity = opacity[Math.floor(Math.random() * opacity.length)];
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    }
    ctx.fillRect(initialX = initialX + indent + barHeigth, initialY + (histogramHeight - times[j] * step), barHeigth, times[j] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[j], initialX, initialY + histogramHeight + lineHeight);
    ctx.fillText(Math.floor(times[j]), initialX, (initialY + (histogramHeight - times[j] * step)) - lineHeight);
  }
};
