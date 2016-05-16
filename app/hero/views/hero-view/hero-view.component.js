"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('../../services/hero.service');
var hero_list_component_1 = require('../../components/hero-list/hero-list.component');
var hero_detail_view_component_1 = require('../hero-detail-view/hero-detail-view.component');
var router_1 = require('@angular/router');
var card_1 = require('@angular2-material/card/card');
var HeroView = (function () {
    function HeroView(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
    }
    HeroView.prototype.ngOnInit = function () {
        this._loadHeros();
    };
    HeroView.prototype.heroSelected = function (hero) {
        this._router.navigate(['/heros/detail/', hero.id]);
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
            directives: [router_1.ROUTER_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, hero_list_component_1.HeroListComponent],
            providers: [hero_service_1.HeroService]
        }),
        router_1.Routes([
            { path: '/detail/:id', component: hero_detail_view_component_1.HeroDetailView }
        ]), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroView);
    return HeroView;
}());
exports.HeroView = HeroView;
//# sourceMappingURL=hero-view.component.js.map