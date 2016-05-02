
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from 'angular2/core';

import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';

import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [
    MdLiveAnnouncer,
    ROUTER_PROVIDERS,
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()})
]);
