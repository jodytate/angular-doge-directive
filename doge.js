'use strict';

var link = function (scope, element, attr) {
  var baseWidth = 550;
  var baseHeight = 550;
  var canvas = element.find('canvas')[0];
  var context = canvas.getContext('2d');
  var options = {
    scale:  attr.scale  || 1.0,
    width:  attr.width  || baseWidth,
    height: attr.height || baseHeight,
  };

  var doge = new Image();
  doge.src = "img/doge.png"; 

  canvas.width = options.width * options.scale;
  canvas.height = options.height * options.scale;
  
  doge.onload = function() {
     context.drawImage(doge, 0, 0, canvas.width, canvas.height);
  };
}

angular.module('doge-app', []).
  directive('doge', function () {
    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      link: link
    };
  });
