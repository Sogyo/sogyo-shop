'use strict';

angular.module('frontendApp')
  .factory('falcor', [function () {
    return window.falcor;
  }]);

angular.module('frontendApp')
  .factory('rx', [function () {
    return window.Rx;
  }]);

angular.module('frontendApp')
  .factory('falcor-domain-model-router', [function () {
    return "http://localhost:3000/model.json";
  }]);
