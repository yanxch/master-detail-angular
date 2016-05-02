System.register(['angular2/core', 'angular2/router', '@angular2-material/toolbar/toolbar', '@angular2-material/sidenav/sidenav', '@angular2-material/card/card', '@angular2-material/list/list', '@angular2-material/button/button', './home/index', './hero/views/index'], function(exports_1, context_1) {
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
    var core_1, router_1, toolbar_1, sidenav_1, card_1, list_1, button_1, index_1, index_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.navigateToHome = function () {
                    this._router.navigate(['HomeView']);
                };
                AppComponent.prototype.navigateToHeros = function () {
                    this._router.navigate(['HeroView']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <md-toolbar color=\"primary\">\n            <button md-icon-button (click)=\"nav.toggle()\">\n                <i class=\"material-icons demo-toolbar-icon\">menu</i>\n            </button>\n            <span> My Heros Application</span>\n        </md-toolbar>\n\n        <md-sidenav-layout class=\"hundred\">\n\n            <md-sidenav #nav opened=\"true\" mode=\"side\">\n                <md-list>\n                    <md-list-item>\n                        <button md-button (click)=\"navigateToHome()\">Home</button>\n                    </md-list-item>\n                    <md-list-item>\n                        <button md-button (click)=\"navigateToHeros()\">Heros</button>\n                    </md-list-item>\n                </md-list>\n            </md-sidenav>\n\n            <router-outlet></router-outlet>\n\n            <!--router-outlet name=\"detail\"></router-outlet-->\n\n        </md-sidenav-layout>\n\n   ",
                        styleUrls: ['app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MdButton, toolbar_1.MdToolbar, sidenav_1.MdSidenav, sidenav_1.MdSidenavLayout, card_1.MdCard, card_1.MdCardHeader, card_1.MdCardTitleGroup]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'HomeView',
                            component: index_1.HomeView,
                            useAsDefault: true
                        },
                        {
                            path: '/heros/...',
                            name: 'HeroView',
                            component: index_2.HeroView
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map