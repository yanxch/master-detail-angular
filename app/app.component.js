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
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var index_1 = require('./hero/index');
var index_2 = require('./home/index');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.navigateToHome = function () {
        this._router.navigate(['/']);
    };
    AppComponent.prototype.navigateToHeros = function () {
        this._router.navigate(['/heros']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n            <md-toolbar color=\"primary\">\n                <button md-icon-button (click)=\"nav.toggle()\">\n                    <i class=\"material-icons demo-toolbar-icon\">menu</i>\n                </button>\n                <span> My Heros Application</span>\n            </md-toolbar>\n\n            <md-sidenav-layout class=\"hundred\">\n\n                <md-sidenav #nav opened=\"true\" mode=\"side\">\n                    <md-list>\n                        <md-list-item>\n                            <button md-button (click)=\"navigateToHome()\">Home</button>\n                        </md-list-item>\n                        <md-list-item>\n                            <button md-button (click)=\"navigateToHeros()\">Heros</button>\n                        </md-list-item>\n                    </md-list>\n                </md-sidenav>\n\n                <router-outlet></router-outlet>\n\n            </md-sidenav-layout>\n\n  ",
            styleUrls: ['app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, button_1.MdButton, card_1.MdCard, card_1.MdCardHeader, card_1.MdCardTitleGroup],
            providers: [index_1.HeroService]
        }),
        router_1.Routes([
            { path: '/', component: index_2.HomeView },
            { path: '/heros', component: index_1.HeroView }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map