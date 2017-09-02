/**
 * Created by pacifi on 7/18/17.
 */

// IIFE Immediately invoked function Expresion
/*globals angular*/

(function () {
    "use strict"; // corrector estricto basado en ECMA Script
    var app = angular.module("newsWikiApp", [
        "common.services",
        "common.servicesMock",
        "ui.router"
    ]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url:"/",
                templateUrl:"app/welcomeView.html"
            })
            .state("newsList", {
                    url: "/noticias",
                    templateUrl: "app/news/newsListView.html",
                    controller: "NewsCtrl as vm"
                }
            );
    }]);
}());
