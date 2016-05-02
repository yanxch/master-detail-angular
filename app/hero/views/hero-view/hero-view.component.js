System.register(['angular2/core', 'angular2/router', '@angular2-material/card/card', '../../../empty/index', '../hero-detail-view/hero-detail-view.component', '../../index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, card_1, index_1, hero_detail_view_component_1, index_2;
    var HeroView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (hero_detail_view_component_1_1) {
                hero_detail_view_component_1 = hero_detail_view_component_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            HeroView = (function () {
                function HeroView(_heroService, _routeParams, _router) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                HeroView.prototype.ngOnInit = function () {
                    this._loadHeros();
                };
                HeroView.prototype.heroSelected = function (hero) {
                    this._router.navigate(['HeroView', 'HeroDetailView', { id: hero.id }]);
                };
                HeroView.prototype._loadHeros = function () {
                    var _this = this;
                    this._heroService.getHerosSlowly()
                        .then(function (heros) {
                        console.log('Load heros');
                        _this.heros = heros;
                    });
                };
                HeroView = __decorate([
                    core_1.Component({
                        selector: 'hero-view',
                        template: "\n        <div class=\"Grid\">\n            <div class=\"Grid-cell\">\n                <md-card>\n                    <md-card-title>Heros</md-card-title>\n                    <md-card-content>\n                        <my-hero-list [heros]=\"heros\" (heroSelectedEvent)=\"heroSelected($event)\"></my-hero-list>\n                    </md-card-content>\n                </md-card>\n            </div>\n            <div class=\"Grid-cell\">\n                <!-- outlet for the detail view -->\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
                        styleUrls: ['app/hero/views/hero-view/hero-view.css'],
                        directives: [router_2.ROUTER_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, index_2.HeroListComponent],
                        providers: [index_2.HeroService]
                    }),
                    router_2.RouteConfig([
                        {
                            path: '',
                            name: 'EmptyComponent',
                            component: index_1.Empty,
                            useAsDefault: true
                        },
                        {
                            path: '/detail',
                            name: 'HeroDetailView',
                            component: hero_detail_view_component_1.HeroDetailView
                        }
                    ]), 
                    __metadata('design:paramtypes', [index_2.HeroService, router_1.RouteParams, router_1.Router])
                ], HeroView);
                return HeroView;
            }());
            exports_1("HeroView", HeroView);
        }
    }
});
//# sourceMappingURL=hero-view.component.js.map