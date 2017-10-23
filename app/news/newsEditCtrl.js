/**
 * Created by pacifi on 23/10/2017.
 */
/*globals angular, toastr*/

(function () {
    "use strict";

    angular.module("newsWikiApp")
        .controller("NewsEditCtrl", ["newsItem", "$state", NewsEditCtrl]);

    function NewsEditCtrl(newsItem, $state) {
        var me = this;
        me.format = 'MMM dd,yyyy';
        me.newsItem = newsItem;

        if (!me.newsItem.idNoticia) {
            me.titulo = "Nueva Noticia";
        } else {
            me.titulo = "Editar: " + me.newsItem.tituloNoticia;
        }

        if (!me.newsItem.destacado) {
            me.newsItem.destacado = false;
        }

        me.showDatepicker = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            me.opened = !me.opened;
        };

        me.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                me.newsItem.tags = me.newsItem.tags ? me.newsItem.tags.concat(array) : array;
                me.newTags = "";
            }
        };

        me.removeTag = function (idx) {
            me.newsItem.tags.splice(idx, 1);
        };

        me.guardar = function () {
            me.newsItem.$save(function (data) {
                toastr.success("La noticia se ha guardado", "Success");
            });
        };

        me.cancelar = function () {
            $state.go("newsList");
        };

    }
}());