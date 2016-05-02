System.register(['angular2/core', '../index'], function(exports_1, context_1) {
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
    var core_1, index_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeros = function () {
                    return Promise.resolve(index_1.HEROS);
                };
                HeroService.prototype.getHerosSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(index_1.HEROS); }, 250);
                    });
                };
                HeroService.prototype.getHeroById = function (id) {
                    var result = undefined;
                    index_1.HEROS.forEach(function (hero) {
                        if (hero.id == id) {
                            result = hero;
                        }
                    });
                    console.log(result);
                    return result;
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map