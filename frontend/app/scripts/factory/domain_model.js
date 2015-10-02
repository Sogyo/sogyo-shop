'use strict';

angular.module('frontendApp')
  .factory('DomainModel', ['DomainCache', 'falcor', 'falcor-domain-model-router', function (DomainCache, falcor, model_router) {
    var model = new falcor.Model({
      source: new falcor.HttpDataSource(model_router, {
        crossDomain: true,
        withCredentials: false
      }),
      cache: DomainCache.cache
    });

    return {
      model: model
    };
  }]);
