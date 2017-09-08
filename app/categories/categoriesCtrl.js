/*globals angular:false */

(function () {
    "use strict";

    angular.module("newsWikiApp")
        .controller("CategoriesCtrl", ["categoriesService", CategoriesCtrl]);

    function CategoriesCtrl(categoriesService) {
        var me = this;

        me.showCategories = true;
        categoriesRepository.getCategories(
            {
                categoriesService: categoriesService,
                success: function (data) {

                    me.categories = data;

                }
            });

        me.toggleCategories = function () {
            me.showCategories = !me.showCategories;
        };

    }

    //Patron Revealing Module
    var categoriesRepository = (function () {
        var me = {};
        me.getCategories = function (options) {
            options.categoriesService.then(function (response) {
                options.success(response.data);
            });
        };
        return {
            getCategories: me.getCategories
        };
    }());
}());