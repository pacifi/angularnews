/**
 * Created by pacifi on 10/23/17.
 */
/* globals angular toastr */
(function () {
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsEditCtrl", ["newsItem", "$state", NewsEditCtrl]);

    function NewsEditCtrl(newsItem, $state) {
        var self = this;
        self.newsItem = newsItem;

        if (!self.newsItem.idNoticia) {
            self.titulo = "Nueva Noticia";

        } else {
            self.titulo = "Editar: " + self.newsItem.tituloNoticia;
        }

        if (!self.newsItem.destacado) {
            self.newsItem.destacado = false;
        }

        self.showDatepicker = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            self.opened = !self.opened;

        };

        self.guardar = function () {
            self.newsItem.$save(function (data) {
                toastr.success("La noticia se a guardado");
            });
        };

        self.cancelar = function () {
            $state.go("newsList");
        };

    }
}());