System.register(['./model/hero', './services/hero.service', './components/hero-detail/hero-detail.component', './components/hero-list/hero-list.component', './services/mock-hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (hero_1_1) {
                exportStar_1(hero_1_1);
            },
            function (hero_service_1_1) {
                exportStar_1(hero_service_1_1);
            },
            function (hero_detail_component_1_1) {
                exportStar_1(hero_detail_component_1_1);
            },
            function (hero_list_component_1_1) {
                exportStar_1(hero_list_component_1_1);
            },
            function (mock_hero_1_1) {
                exportStar_1(mock_hero_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map