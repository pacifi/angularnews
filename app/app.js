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
        "ui.router",
        "ui.mask",
        'ui.bootstrap'
    ]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })
            .state("newsList", {
                    url: "/noticias",
                    templateUrl: "app/news/newsListView.html",
                    controller: "NewsCtrl as vm"
                }
            )
            .state("newsEdit", {
                url: "/noticias/edit/:idNoticia",
                abstract: true,
                templateUrl: "app/news/newsEditView.html",
                controller: "NewsEditCtrl as vm",
                resolve: {
                    newsResource: "newsResource",
                    newsItem: function (newsResource, $stateParams) {
                        var idNoticia = $stateParams.idNoticia;
                        return newsResource.get({idNoticia: idNoticia}).$promise;
                    }
                }
            })
            .state("newsEdit.info", {
                url: "/info",
                templateUrl: "app/news/newsEditInfoView.html"
            })
            .state("newsEdit.tagas", {
                url: "/tags",
                templateUrl: "app/news/newsEditTagsView.html"

            })
            .state("newsDetail", {
                url: "/noticias/:idNoticia",
                templateUrl: "app/news/newsDetailView.html",
                controller: "NewsDetailCtrl as vm",
                resolve: {
                    newsResource: "newsResource",
                    newsItem: function (newsResource, $stateParams) {
                        var idNoticia = $stateParams.idNoticia;
                        return newsResource.get({idNoticia: idNoticia}).$promise;
                    }
                }
            });
    }]);
}());
