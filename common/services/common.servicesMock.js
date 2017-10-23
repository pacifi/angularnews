/*globals angular*/
(function () {
    "use strict";

    var app = angular.module("common.servicesMock", [
        'ngMockE2E'
    ]);

    app.run(["$httpBackend", function ($httpBackend) {

        var categories = ['Politica', 'Economia', 'Deportes', 'Moda', 'Mundo'];

        var categoriesUrl = "/api/categorias";

        $httpBackend.whenGET(categoriesUrl).respond(categories);

        var news = [
            {
                'idNoticia': 1,
                'codigoNoticia': 'NWD-9848',
                'tituloNoticia': 'Peru envio nota diplomatica a Chile',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta dignissimos distinctio, eum fugit itaque obcaecati placeat quos vero! Atque dignissimos esse impedit necessitatibus placeat quas quia quisquam ratione tempore.',
                'fechaPublicacion': new Date(),
                'banner': "static/imgs/MUÑOZCHILE189.jpg",
                'destacado': true,
                'categoria': 'Politica',
                'tags': ['peru', 'politica', 'guerra']
            },
            {
                'idNoticia': 2,
                'codigoNoticia': 'NFK-1275',
                'tituloNoticia': 'Alan Garcia cuestiiona ofertas laborales',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim itaque molestias natus nulla! Ad alias consequatur, deleniti doloremque ducimus, exercitationem hic illum laudantium nemo quaerat quia, quisquam quo quod similique.',
                'fechaPublicacion': new Date(2015, 0, 1),
                'banner': "static/imgs/350028.jpg",
                'destacado': true,
                'categoria': 'Economia',
                'tags': ['alan garcia', 'politica']
            },
            {
                'idNoticia': 3,
                'codigoNoticia': 'TFS-7890',
                'tituloNoticia': 'Esta semana continua el campeonato Clausura',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolorum ipsum necessitatibus pariatur recusandae vero! A accusamus, corporis illo iste odio repellat vero? Aspernatur deserunt enim quam repudiandae veniam!',
                'fechaPublicacion': new Date(2015, 10, 2),
                'banner': "static/imgs/Primera-Pretemporada-Clausura-2017-790x353.jpg",
                'destacado': false,
                'categoria': 'Deportes',
                'tags': ['futbol', 'clausura']
            },
            {
                'idNoticia': 4,
                'codigoNoticia': 'JNQ-4564',
                'tituloNoticia': 'Avion se cayo en egipto se despedazo',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut, doloremque dolores doloribus explicabo facilis, maxime molestias nam numquam perspiciatis porro quisquam repellat repudiandae saepe sit temporibus velit. Ducimus, maiores.',
                'fechaPublicacion': new Date(2015, 10, 3),
                'banner': "static/imgs/Accidente_de_avion-Accidente_en_Taiwan_LNCIMA20150204_0106_5.jpg",
                'destacado': false,
                'categoria': 'Mundo',
                'tags': ['avion', 'accidente']
            },
            {
                'idNoticia': 5,
                'codigoNoticia': 'NRR-6002',
                'tituloNoticia': 'Los primeros dias del LifWeek',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolorum ipsum necessitatibus pariatur recusandae vero! A accusamus, corporis illo iste odio repellat vero? Aspernatur deserunt enim quam repudiandae veniam!',
                'fechaPublicacion': new Date(2015, 10, 2),
                'banner': "static/imgs/1078359.jpg",
                'destacado': false,
                'categoria': 'Moda',
                'tags': ['lifweek', 'moda']
            },
            {
                'idNoticia': 6,
                'codigoNoticia': 'NRR-6001',
                'tituloNoticia': 'Mestiza la marca de marra que compite en Brasil',
                'descripcionNoticia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolorum ipsum necessitatibus pariatur recusandae vero! A accusamus, corporis illo iste odio repellat vero? Aspernatur deserunt enim quam repudiandae veniam!',
                'fechaPublicacion': new Date(2016, 10, 2),
                'banner': "static/imgs/simplemente maria2.jpg",
                'destacado': false,
                'categoria': 'Moda',
                'tags': ['gamarra', 'moda']
            }
        ];
        var newsUrl = "/api/noticias";
        $httpBackend.whenGET(newsUrl).respond(news);

        var editingRegExp = new RegExp(newsUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegExp).respond(function (method, url, data) {
            var newsItem = {idNoticia: 0};
            var parameters = url.split('/'); ///api/noticias/2
            var length = parameters.length;
            var newsItemId = parameters[length - 1];

            if(newsItemId > 0){
                for (var i = 0; i < news.length; i++) {
                    if (news[i].idNoticia == newsItemId){
                        newsItem = news[i];
                        break;
                    }
                }
            }

            return [200, newsItem, {}];
        });


        $httpBackend.whenGET(/app/).passThrough();
    }]);
}());
