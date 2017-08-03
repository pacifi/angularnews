/*globals angular*/
(function () {
    "use strict";

    var app = angular.module("common.servicesMock", [
        'ngMockE2E'
    ]);

    app.run(function ($httpBackend) {
        var categories = ['Politica', 'Economia', 'Deportes', 'Moda', 'Mundo'];
        var categoriesUrl = "/api/categorias";
        $httpBackend.whenGET(categoriesUrl).respond(categories);
    });

}());