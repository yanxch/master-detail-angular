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
var router_1 = require('@angular/router');
var index_1 = require('../../index');
var card_1 = require('@angular2-material/card/card');
var button_1 = require('@angular2-material/button/button');
var HeroDetailView = (function () {
    function HeroDetailView(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
    }
    HeroDetailView.prototype.ngOnInit = function () {
        console.log('HeroDetailView');
        //var id = this._routeParams.get('id');
        //this.selectedHero = this._heroService.getHeroById(id);
        //console.log(id);
    };
    HeroDetailView.prototype.routerOnActivate = function (curr) {
        var id = +curr.getParam('id');
        this.selectedHero = this._heroService.getHeroById(id);
    };
    HeroDetailView.prototype.save = function () {
        console.log('shaved');
        this._router.navigate(['/heros']);
    };
    HeroDetailView.prototype.cancel = function () {
        console.log('canceld');
        this._router.navigate(['/heros']);
    };
    HeroDetailView = __decorate([
        core_1.Component({
            selector: 'hero-detail-view',
            template: "\n        <div *ngIf=\"selectedHero\">\n\n            <md-card>\n                <md-card-title>Hero Detail</md-card-title>\n                <md-card-content>\n                    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n                </md-card-content>\n                <md-card-actions>\n                    <button md-button color=\"primary\" (click)=\"save()\">Save</button>\n                    <button md-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\n                </md-card-actions>\n            </md-card>\n\n        </div>\n    ",
            styleUrls: ['app/hero/views/hero-detail-view/hero-detail-view.css'],
            providers: [index_1.HeroService],
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton, index_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.HeroService])
    ], HeroDetailView);
    return HeroDetailView;
}());
exports.HeroDetailView = HeroDetailView;
//# sourceMappingURL=hero-detail-view.component.js.map