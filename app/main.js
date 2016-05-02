System.register(['angular2/platform/browser', './app.component', 'angular2/core', '@angular2-material/core/overlay/overlay', '@angular2-material/core/live-announcer/live-announcer', '@angular2-material/core/overlay/overlay-container', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, core_1, overlay_1, live_announcer_1, overlay_container_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (live_announcer_1_1) {
                live_announcer_1 = live_announcer_1_1;
            },
            function (overlay_container_1_1) {
                overlay_container_1 = overlay_container_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                live_announcer_1.MdLiveAnnouncer,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_container_1.createOverlayContainer() })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map